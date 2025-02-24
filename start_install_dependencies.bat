@echo off
setlocal

:: === Запуск від імені адміністратора ===
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Запуск від імені адміністратора...
    powershell -Command "Start-Process cmd -ArgumentList '/c %~s0' -Verb RunAs"
    exit
)

:: === Встановлення Node.js ===
echo Downloading Node.js...
set "NODE_VERSION=20.16.0"
set "NODE_URL=https://nodejs.org/dist/v%NODE_VERSION%/node-v%NODE_VERSION%-x64.msi"
set "NODE_INSTALLER=%TEMP%\nodejs_installer.msi"

powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%NODE_URL%', '%NODE_INSTALLER%')"

echo Installing Node.js...
msiexec /i "%NODE_INSTALLER%" /quiet /norestart ALLUSERS=1
del "%NODE_INSTALLER%"

:: === Додаємо шлях до Node.js в реєстр ===
set "NODE_PATH=C:\Program Files\nodejs"
for /f "tokens=2*" %%a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path') do set "OLD_PATH=%%b"
set "NEW_PATH=%NODE_PATH%;%OLD_PATH%"
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /t REG_EXPAND_SZ /d "%NEW_PATH%" /f

:: === Інший варіант додавання NodeJS в змінні оточення ===
REM for /f "skip=2 tokens=2,*" %%A in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do (
REM setx /M PATH "%%B;%%NODE_PATH%%"
REM )

:: === Перезапускаємо explorer.exe ===
echo Restarting explorer.exe...
taskkill /F /IM explorer.exe
start explorer.exe
timeout /t 2 >nul

:: === Встановлення Python 3.10 ===
echo Downloading Python 3.10...
set "PYTHON_VERSION=3.10.11"
set "PYTHON_URL=https://www.python.org/ftp/python/%PYTHON_VERSION%/python-%PYTHON_VERSION%-amd64.exe"
set "PYTHON_INSTALLER=%TEMP%\python_installer.exe"

powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%PYTHON_URL%', '%PYTHON_INSTALLER%')"

echo Installing Python 3.10...
start /wait %PYTHON_INSTALLER% /quiet InstallAllUsers=1 PrependPath=1 Include_test=0
del "%PYTHON_INSTALLER%"

:: === Перевірка встановлення ===
echo Node.js version:
call node -v
call npm -v

echo Python version:
call python --version
call pip --version

cd /d "%~dp0app"
start /b npm install
pip install -r whisper/requirements.txt

cd /d "%~dp0client"
start /b npm install

pause
