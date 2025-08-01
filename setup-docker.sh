#!/bin/bash

# BlockNova Docker Setup Script
# This script ensures consistent installation across different environments

echo "Setting up BlockNova with Docker..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "Docker is not running. Please start Docker first."
    exit 1
fi

echo "Docker is installed and running"

# Build the Docker image
echo "Building BlockNova Docker image..."
docker build -t blocknova:latest . || {
    echo "Failed to build Docker image"
    exit 1
}

echo "Docker image built successfully"

# Run the container
echo "Starting BlockNova container..."
docker run -d \
    --name blocknova-app \
    -p 4321:4321 \
    --restart unless-stopped \
    blocknova:latest || {
    echo "Failed to start container"
    exit 1
}

echo "BlockNova is now running!"
echo "Open your browser and visit: http://localhost:4321"
echo "Useful commands:"
echo "View logs:     docker logs blocknova-app"
echo "Stop app:      docker stop blocknova-app"
echo "Start app:     docker start blocknova-app"
echo "Remove app:    docker rm -f blocknova-app"
echo "Remove image:  docker rmi blocknova:latest"
