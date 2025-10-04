#!/bin/bash

# Techaxis Consulting - Deployment Script
echo "🚀 Starting deployment process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build for production
echo "🔨 Building for production..."
npm run build

# Check build success
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create deployment package
    echo "📦 Creating deployment package..."
    cd dist/
    
    # Create a zip file for easy deployment
    zip -r ../techaxis-deployment.zip . -x "*.DS_Store" "*.map"
    
    echo "📊 Build Statistics:"
    echo "Total size: $(du -sh . | cut -f1)"
    echo "Files: $(find . -type f | wc -l)"
    echo "Largest files:"
    find . -type f -exec ls -lh {} \; | sort -k5 -hr | head -10
    
    echo ""
    echo "🎉 Deployment ready!"
    echo "📁 Build files in: ./dist/"
    echo "📦 Deployment package: ./techaxis-deployment.zip"
    echo ""
    echo "🌐 To preview locally: npm run preview"
    echo "🚀 Ready for deployment to any static hosting service!"
    
else
    echo "❌ Build failed!"
    exit 1
fi
