$jsonfile = Get-Content config.json -Raw | ConvertFrom-Json

$output = ""

foreach ($folder in $jsonfile)
{
    $output = $output + (Du64.exe -nobanner -c -q -l $folder.depth $folder.foldername | out-string)
    Write-Host $output
}
