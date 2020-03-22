Start-Process -NoNewWindow -FilePath "hugo.exe" -ArgumentList "serve", "--gc", "--noHTTPCache", "--forceSyncStatic", "--disableFastRender"

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.IncludeSubdirectories = $true
$watcher.Path = '.\layouts'
$watcher.EnableRaisingEvents = $true

$action =
{
    $path = $event.SourceEventArgs.FullPath
    $changetype = $event.SourceEventArgs.ChangeType
    Write-Host "$path was $changetype at $(get-date)"
    Get-Process | Where-Object { $_.ProcessName -match "hugo" } | Stop-Process -Force
    do {
        Start-Sleep -Milliseconds 500
        Write-Host "Waiting"
    } while (Get-Process | Where-Object { $_.ProcessName -match "hugo" } -eq $true)
    Start-Process -NoNewWindow -FilePath "hugo.exe" -ArgumentList "serve", "--gc", "--noHTTPCache", "--forceSyncStatic", "--disableFastRender"
}

Register-ObjectEvent $watcher 'Changed' -Action $action
