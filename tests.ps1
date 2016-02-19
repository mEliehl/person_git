$PSScriptFilePath = (Get-Item $MyInvocation.MyCommand.Path).FullName
$SolutionRoot = Split-Path -Path $PSScriptFilePath -Parent

" PSScriptFilePath = $PSScriptFilePath"
$DNU = "dnu"
$DNX = "dnx"
$DNVM = "dnvm"

# ensure the correct version
& $DNVM install 1.0.0-rc1-final -r coreclr

# use the correct version
& $DNVM use 1.0.0-rc1-final -r coreclr

Get-ChildItem -Path $PSScriptRoot\test -Filter project.json -Recurse | ForEach-Object { 
	& $DNU restore $_.FullName 2>1
	if (-not $?)
	{
		throw "The DNU restore process returned an error code."
	}
}

Get-ChildItem -Path $PSScriptRoot\test -Filter project.json -Recurse | ForEach-Object { 
	& $DNU build $_.FullName 2>1 	
	if (-not $?)
	{
		throw "The DNU build process returned an error code."
	}
}

Get-ChildItem -Path $PSScriptRoot\test -Filter project.json -Recurse | ForEach-Object { 
	& $DNX -p $_.FullName 2>1 test
	if (-not $?)
	{
		throw "The dnx test process returned an error code."
	}
}