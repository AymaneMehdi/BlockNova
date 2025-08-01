# BlockNova - Docker Installation Guide

## Quick Start with Docker

This project is containerized with Docker to ensure consistent installation across all environments, regardless of your local Node.js version or dependencies.

### Prerequisites
- Docker installed on your system
- Docker running/started

### Installation Methods

#### Method 1: Automatic Setup (Recommended)

**For Windows:**
```bash
setup-docker.bat
```

**For Linux/MacOS:**
```bash
chmod +x setup-docker.sh
./setup-docker.sh
```

#### Method 2: Manual Docker Commands

```bash
# Build the image
docker build -t blocknova:latest .

# Run the container
docker run -d --name blocknova-app -p 4321:4321 --restart unless-stopped blocknova:latest
```

### Access Your Application
Open your browser and visit: **http://localhost:4321**

### Docker Management Commands

```bash
# View application logs
docker logs blocknova-app

# Stop the application
docker stop blocknova-app

# Start the application
docker start blocknova-app

# Restart the application
docker restart blocknova-app

# Remove the container
docker rm -f blocknova-app

# Remove the image
docker rmi blocknova:latest

# View running containers
docker ps

# View all containers
docker ps -a
```

### Dockerfile Features

**Dependency Lock**: Uses exact versions from package-lock.json  
**Multi-stage Build**: Optimized for production  
**Security**: Non-root user execution  
**Health Checks**: Automatic application monitoring  
**Alpine Linux**: Lightweight base image  
**Layer Caching**: Faster subsequent builds  

### Troubleshooting

**Container won't start:**
```bash
docker logs blocknova-app
```

**Port already in use:**
```bash
# Use different port
docker run -d --name blocknova-app -p 3000:4321 blocknova:latest
# Then visit: http://localhost:3000
```

**Build fails:**
```bash
# Clean Docker cache and rebuild
docker system prune -a
docker build --no-cache -t blocknova:latest .
```

### Development vs Production

This Dockerfile is optimized for production deployment. For development, you can still use:
```bash
npm install
npm run dev
```

### Version Consistency

The Docker setup ensures:
- Consistent Node.js version (20.19.0)
- Exact dependency versions via package-lock.json
- Same environment across all machines
- No "works on my machine" issues

Anyone can now install and run your project with zero configuration! 
