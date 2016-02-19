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

Get-ChildItem -Path $PSScriptRoot\src -Filter project.json -Depth 1 | ForEach-Object { 
	& $DNU restore $_.FullName 2>1 
	& $DNU build $_.FullName 2>1 
}