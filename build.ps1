$PSScriptFilePath = (Get-Item $MyInvocation.MyCommand.Path).FullName
$SolutionRoot = Split-Path -Path $PSScriptFilePath -Parent
$ProjectsPath = Join-Path -Path $SolutionRoot -ChildPath "src"

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
cd $SolutionRoot
