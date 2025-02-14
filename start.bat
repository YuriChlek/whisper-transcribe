@echo off
setlocal enableextensions

:: Визначаємо порти
set APP_PORT=4000
set CLIENT_PORT=5173

:: Закриваємо процеси, що займають порти (якщо є)
echo Checking and killing processes on ports %APP_PORT% and %CLIENT_PORT%...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%APP_PORT%') do taskkill /PID %%a /F >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%CLIENT_PORT%') do taskkill /PID %%a /F >nul 2>&1

:: Пауза для безпечного завершення процесів
timeout /t 2 >nul

:: Виконання Python-скрипта перед запуском сервера
cd /d "%~dp0app"
echo Running Python script: whisper/whisper_entry_point.py...
python whisper/whisper_entry_point.py

:: Запуск сервера
echo App is running...
start /b npm run dev

:: Запуск клієнта
cd /d "%~dp0client"
echo Client is running...
start /b npm run dev

echo Both processes are running. Close this window to stop them.
pause
