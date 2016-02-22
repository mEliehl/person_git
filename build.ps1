param (
	[Parameter(Mandatory=$true)]
	[ValidatePattern("^\d+\.\d+\.(?:\d+\.\d+$|\d+$)")]
	[string]
	$ReleaseVersionNumber,
	[Parameter(Mandatory=$true)]
	[string]
	[AllowEmptyString()]
	$PreReleaseName
)

$PSScriptFilePath = (Get-Item $MyInvocation.MyCommand.Path).FullName
$SolutionRoot = Split-Path -Path $PSScriptFilePath -Parent
$ProjectsPath = Join-Path -Path $SolutionRoot -ChildPath "src"

# Make sure we don't have a release folder for this version already
$BuildFolder = Join-Path -Path $SolutionRoot -ChildPath "build";
$ReleaseFolder = Join-Path -Path $BuildFolder -ChildPath "Releases\v$ReleaseVersionNumber$PreReleaseName";

" PSScriptFilePath = $PSScriptFilePath"
$DNU = "dnu"
$DNX = "dnx"
$DNVM = "dnvm"

# ensure the correct version
& $DNVM install 1.0.0-rc1-final -r coreclr

# use the correct version
& $DNVM use 1.0.0-rc1-final -r coreclr

& $DNU restore "$ProjectsPath"
if (-not $?)
{
	throw "The DNU restore process returned an error code."
}

cd "$ProjectsPath" 
& $DNU build "\*"
if (-not $?)
{
	throw "The DNU build process returned an error code."
}


if ((Get-Item $ReleaseFolder -ErrorAction SilentlyContinue) -ne $null)
{
	Write-Warning "$ReleaseFolder already exists on your local machine. It will now be deleted."
	Remove-Item $ReleaseFolder -Recurse
}

& $DNU pack "\*" --configuration Release --out "$ReleaseFolder"
if (-not $?)
{
	throw "The DNU pack process returned an error code."
}

cd "$SolutionRoot"