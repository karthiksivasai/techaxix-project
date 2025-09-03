# Deployment Configuration Notes

## Server Configuration for SPA Fallback

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    # Handle static assets
    location ~* ^/(assets|static|vite|.*\.js|.*\.css|.*\.map|.*\.ico|.*\.png|.*\.jpg|.*\.svg)$ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
        add_header Content-Type "application/javascript" for .js files;
        add_header Content-Type "text/css" for .css files;
    }

    # SPA fallback for all other routes
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache .htaccess
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Don't rewrite static assets
    RewriteCond %{REQUEST_URI} \.(js|css|png|jpg|svg|ico|map)$ [OR]
    RewriteCond %{REQUEST_URI} ^/(assets|static|vite)/
    RewriteRule ^ - [L]
    
    # SPA fallback for all other routes
    RewriteRule . /index.html [L]
</IfModule>

# Set proper MIME types
<IfModule mod_mime.c>
    AddType application/javascript .js
    AddType text/css .css
</IfModule>
```

### Netlify _redirects
```
# Static assets
/assets/*  /assets/:splat  200
/static/*  /static/:splat  200

# SPA fallback
/*         /index.html     200
```

### Vercel vercel.json
```json
{
  "rewrites": [
    {
      "source": "/assets/(.*)",
      "destination": "/assets/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Environment Variables

### Development
```bash
VITE_BASE_URL=/
```

### Production
```bash
VITE_BASE_URL=/
# or for subdirectory deployment:
VITE_BASE_URL=/your-subdirectory/
```

## Build Commands

```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Preview build locally
npm run preview

# Run E2E tests
npm run test:e2e
```

## Health Checks

### Verify Build
1. Check that `dist/` folder contains all assets
2. Verify `dist/index.html` references correct chunk files
3. Test that all chunk files return 200 status with correct MIME types

### Verify Deployment
1. Test main navigation routes
2. Check browser console for errors
3. Verify all CTA buttons work
4. Test service worker registration (if enabled)

## Troubleshooting

### Common Issues

1. **404 for chunk files**: Ensure server doesn't rewrite asset URLs to index.html
2. **MIME type errors**: Verify server serves .js files with `application/javascript`
3. **Router not working**: Check that basename matches deployment path
4. **Service worker issues**: Clear browser cache and unregister old service workers

### Debug Commands

```bash
# Check for React version conflicts
npm ls react react-dom

# Verify build output
ls -la dist/assets/

# Test chunk loading
curl -I https://your-domain.com/assets/index-[hash].js
```
