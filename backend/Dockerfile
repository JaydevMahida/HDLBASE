# Use official Node.js image (Lightweight Alpine version)
FROM node:18-alpine

# Install simulation tools
RUN apk add --no-cache iverilog

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies (including production only if needed)
RUN npm install

# Copy source code
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose port
EXPOSE 5000

# Environment variables (Defaults, can be overridden)
ENV PORT=5000
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
