Get-ChildItem -Recurse | ?{ $_.PSIsContainer } | % {
    New-Item -ItemType File -Name ".placeholder" -Path $_.FullName
}