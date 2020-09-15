
$args = "serve", "--gc", "--noHTTPCache", "--forceSyncStatic", "--disableFastRender", "--templateMetrics", "--templateMetricsHints", "--ignoreCache"

Start-Process -NoNewWindow -FilePath "hugo.exe" -ArgumentList $args

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
    while (Get-Process | Where-Object { $_.ProcessName -match "hugo" } -eq $true) {
        Start-Sleep -Milliseconds 500
        Write-Host "Waiting"
    }
    Start-Process -NoNewWindow -FilePath "hugo.exe" -ArgumentList $args
}

Register-ObjectEvent $watcher 'Changed' -Action $action
