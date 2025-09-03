#!/bin/bash

# Clear any existing processes
echo "Clearing existing processes..."
pkill -f "vite" 2>/dev/null || true
pkill -f "node.*vite" 2>/dev/null || true

# Clear Vite cache
echo "Clearing Vite cache..."
rm -rf node_modules/.vite

# Wait a moment
sleep 2

# Start the development server
echo "Starting development server..."
npm run dev
