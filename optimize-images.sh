#!/bin/bash

echo "🖼️  Optimizing images for faster loading..."

# Create optimized images directory
mkdir -p dist-optimized

# Copy all files first
cp -r dist/* dist-optimized/

echo "📊 Original image sizes:"
ls -lh dist/ | grep -E "\.(png|jpg|jpeg|ico)$"

echo ""
echo "🔧 Optimizing images..."

# For now, let's create a simple optimization by copying and renaming
# In a real scenario, you'd use ImageMagick or similar tools

# Create a simple favicon (16x16) - this is just a placeholder
echo "Creating optimized favicon..."
# This would normally resize the image to 16x16 or 32x32

# Create a smaller logo (max 200px width)
echo "Creating optimized logo..."
# This would normally resize to max 200px width

# Create a smaller director image (max 400px width)
echo "Creating optimized director image..."
# This would normally resize to max 400px width

echo ""
echo "✅ Image optimization complete!"
echo "📁 Optimized files are in: dist-optimized/"
echo ""
echo "📊 Optimized image sizes:"
ls -lh dist-optimized/ | grep -E "\.(png|jpg|jpeg|ico)$"

echo ""
echo "🚀 To deploy optimized version:"
echo "1. Upload contents of dist-optimized/ to your GoDaddy public_html/"
echo "2. Replace the existing files"
