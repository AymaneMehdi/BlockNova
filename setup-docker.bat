@echo off
REM BlockNova Docker Setup Script for Windows
REM This script ensures consistent installation across different environments

echo Setting up BlockNova with Docker...

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Docker is not installed. Please install Docker Desktop first.
    echo Visit: https://docs.docker.com/desktop/windows/
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo Docker is not running. Please start Docker Desktop first.
    pause
    exit /b 1
)

echo Docker is installed and running

REM Build the Docker image
echo Building BlockNova Docker image...
docker build -t blocknova:latest .
if %errorlevel% neq 0 (
    echo Failed to build Docker image
    pause
    exit /b 1
)

echo Docker image built successfully

REM Stop and remove existing container if it exists
docker stop blocknova-app >nul 2>&1
docker rm blocknova-app >nul 2>&1

REM Run the container
echo Starting BlockNova container...
docker run -d --name blocknova-app -p 4321:4321 --restart unless-stopped blocknova:latest
if %errorlevel% neq 0 (
    echo Failed to start container
    pause
    exit /b 1
)

echo BlockNova is now running!
echo Open your browser and visit: http://localhost:4321
echo.
echo Useful commands:
echo   View logs:     docker logs blocknova-app
echo   Stop app:      docker stop blocknova-app
echo   Start app:     docker start blocknova-app
echo   Remove app:    docker rm -f blocknova-app
echo   Remove image:  docker rmi blocknova:latest
echo.
pause
