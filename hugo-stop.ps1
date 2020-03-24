
Get-EventSubscriber | Unregister-Event
Get-Process | Where-Object { $_.ProcessName -match "hugo" } | Stop-Process -Force
while (Get-Process | Where-Object { $_.ProcessName -match "hugo" } -eq $true) {
    Start-Sleep -Milliseconds 500
    Write-Host "Waiting"
}
