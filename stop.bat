@echo off
echo Stopping Vibe Code course server...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":5173" ^| find "LISTENING"') do (
    taskkill /PID %%a /F >nul 2>&1
)
echo Server stopped.
