@echo off
REM Batch File: fix-ejs-links.bat

REM Navigate to script directory
cd /d %~dp0

REM Run the PowerShell script in bypass mode
powershell -ExecutionPolicy Bypass -File "fix-and-backup-ejs-links.ps1"

pause
