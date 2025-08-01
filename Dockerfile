# Use specific Node.js version for consistency
FROM node:20.19.0-alpine AS base

# Install curl for health checks and other utilities
RUN apk add --no-cache curl

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files with exact versions
COPY package.json package-lock.json ./

# Clean install with exact versions from package-lock.json
RUN npm ci --only=production --silent --no-audit --no-fund

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies with exact versions
RUN npm ci --silent --no-audit --no-fund

# Copy source code
COPY . .

# Set build environment
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Production image, copy all the files and run astro
FROM base AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 astro && \
    adduser --system --uid 1001 astro

# Copy only necessary files with proper ownership
COPY --from=builder --chown=astro:astro /app/dist ./dist
COPY --from=deps --chown=astro:astro /app/node_modules ./node_modules
COPY --from=builder --chown=astro:astro /app/package.json ./package.json

# Switch to non-root user
USER astro

# Expose port
EXPOSE 4321

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

# Health check to ensure application is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4321/ || exit 1

# Start the application
CMD ["node", "./dist/server/entry.mjs"]