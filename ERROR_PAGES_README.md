# Techaxis Consulting - Error Pages System

## Overview

A comprehensive collection of professional error pages designed specifically for the Techaxis Consulting website. These error pages maintain brand consistency while providing users with clear information and navigation options during error scenarios.

## 🎨 Design System

### Color Palette

- **Background**: Dark Navy (#0B1A30) - Primary theme color
- **Typography**: White/Light Gray for optimal readability
- **Primary Accent**: Blue Gradient (#2E86FF → #5AB1FF) for buttons and interactive elements
- **Error Highlights**: Red (#FF4D4D) for error indicators and warnings
- **Secondary Elements**: Navy variations (#1a2a40) for cards and containers

### Typography

- **Error Codes**: Large, gradient text with subtle animations
- **Titles**: Clear, bold headings in white
- **Messages**: Descriptive text in light gray for readability
- **Buttons**: High-contrast text with hover effects

## 📱 Error Pages

### 1. 404 - Page Not Found

- **Route**: `/error/404`
- **Message**: "Oops! The page you're looking for doesn't exist."
- **Actions**: "Go Back Home" button
- **Illustration**: Circuit board pattern with question mark
- **Use Case**: Invalid URLs, broken links, missing pages

### 2. 500 - Internal Server Error

- **Route**: `/error/500`
- **Message**: "Something went wrong on our side. Please try again later."
- **Actions**: "Reload Page" and "Contact Support" buttons
- **Illustration**: Server rack with error indicators
- **Use Case**: Server errors, application crashes, backend failures

### 3. 403 - Access Forbidden

- **Route**: `/error/403`
- **Message**: "You don't have permission to access this page."
- **Actions**: "Go Back Home" and "Contact Support" buttons
- **Illustration**: Lock with security patterns
- **Use Case**: Unauthorized access, restricted areas, permission issues

### 4. Offline - Network Error

- **Route**: `/error/offline`
- **Message**: "You are offline. Please check your internet connection."
- **Actions**: Dynamic retry button, "Go Back Home" option
- **Illustration**: WiFi signal waves with connection status
- **Use Case**: No internet connection, network failures
- **Features**: Real-time offline detection, automatic reconnection handling

### 5. Timeout - Slow Connection

- **Route**: `/error/timeout`
- **Message**: "The request is taking too long."
- **Actions**: "Retry" and "Go Back Home" buttons
- **Illustration**: Clock with animated hands and loading indicators
- **Use Case**: Slow network responses, request timeouts, server delays

### 6. 503 - Maintenance Mode

- **Route**: `/error/maintenance`
- **Message**: "We're upgrading our systems to serve you better. Please check back soon."
- **Actions**: "Check Back Later" button
- **Illustration**: Tools and gears with progress indicator
- **Use Case**: Scheduled maintenance, system upgrades, service unavailability

### 7. Security - Attack Detected

- **Route**: `/error/security`
- **Message**: "Suspicious activity detected. For your security, this action was blocked."
- **Actions**: "Return to Homepage" and "Contact Security Team" buttons
- **Illustration**: Shield with security patterns and alerts
- **Use Case**: Security threats, suspicious behavior, blocked actions

## 🚀 Features

### Interactive Elements

- **Animated Illustrations**: Each error page features unique, tech-themed SVG illustrations
- **Floating Elements**: Subtle animated dots and indicators for visual interest
- **Hover Effects**: Smooth transitions on buttons and interactive elements
- **Loading States**: Dynamic indicators for retry operations

### Responsive Design

- **Mobile First**: Optimized for all device sizes
- **Flexible Layouts**: Adaptive grid systems and spacing
- **Touch Friendly**: Appropriate button sizes and touch targets
- **Cross Browser**: Consistent experience across all modern browsers

### User Experience

- **Clear Messaging**: Concise, helpful error descriptions
- **Multiple Actions**: Users always have navigation options
- **Brand Consistency**: Maintains Techaxis Consulting visual identity
- **Accessibility**: High contrast, readable text, semantic HTML

## 🛠 Technical Implementation

### Components

#### Base ErrorPage Component

```tsx
import ErrorPage from "../components/ErrorPage";

<ErrorPage
  errorCode="404"
  title="Page Not Found"
  message="Oops! The page you're looking for doesn't exist."
  description="Optional additional context..."
  actions={{
    primary: { text: "Go Home", href: "/" },
    secondary: { text: "Contact Support", href: "/contact" },
  }}
  illustration={customIllustration}
/>;
```

#### Error Boundary

```tsx
import ErrorBoundary from "../components/ErrorBoundary";

<ErrorBoundary>
  <YourApp />
</ErrorBoundary>;
```

#### Network Status Hook

```tsx
import useNetworkStatus from "../hooks/useNetworkStatus";

const { isOnline, isSlow, connectionType } = useNetworkStatus();
```

#### Error Page Router

```tsx
import ErrorPageRouter from "../components/ErrorPageRouter";

<ErrorPageRouter
  errorType="404"
  statusCode={404}
  error={errorObject}
  showOfflineDetection={true}
/>;
```

### File Structure

```
src/
├── components/
│   ├── ErrorPage.tsx          # Base error page component
│   ├── ErrorBoundary.tsx      # React error boundary
│   └── ErrorPageRouter.tsx    # Dynamic error page router
├── hooks/
│   └── useNetworkStatus.ts    # Network monitoring hook
├── pages/
│   ├── errors/
│   │   ├── NotFound.tsx       # 404 error page
│   │   ├── InternalServerError.tsx # 500 error page
│   │   ├── Forbidden.tsx      # 403 error page
│   │   ├── Offline.tsx        # Offline error page
│   │   ├── Timeout.tsx        # Timeout error page
│   │   ├── Maintenance.tsx    # 503 error page
│   │   ├── Security.tsx       # Security error page
│   │   └── index.ts           # Export all error pages
│   └── ErrorDemo.tsx          # Demo page for testing
```

## 🧪 Testing

### Demo Page

Visit `/error-demo` to see all error pages in action with navigation between them.

### Individual Routes

Each error page can be accessed directly:

- `/error/404` - Page Not Found
- `/error/500` - Internal Server Error
- `/error/403` - Access Forbidden
- `/error/offline` - Offline Error
- `/error/timeout` - Timeout Error
- `/error/maintenance` - Maintenance Mode
- `/error/security` - Security Alert

### Offline Testing

1. Open browser DevTools
2. Go to Network tab
3. Check "Offline" checkbox
4. Navigate to any page to see offline error

## 🔧 Customization

### Adding New Error Pages

1. Create new component in `src/pages/errors/`
2. Import and use the base `ErrorPage` component
3. Add route in `App.tsx`
4. Update the demo page if needed

### Modifying Styles

- Colors are defined in `src/index.css` as CSS variables
- Component-specific styles use Tailwind CSS classes
- Animations use CSS transitions and keyframes

### Illustration Customization

- Each error page has a custom `techIllustration` component
- Illustrations are built using CSS and SVG-like elements
- Can be replaced with custom SVG files or images

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Variables, ES6+

## 🚀 Performance

- **Bundle Size**: Minimal impact on main bundle
- **Lazy Loading**: Error pages loaded only when needed
- **Optimized**: Efficient CSS and minimal JavaScript
- **Caching**: Static error pages can be cached aggressively

## 🔒 Security

- **XSS Protection**: All user input is properly sanitized
- **CSRF Protection**: Built-in React security features
- **Content Security**: No external scripts or unsafe content
- **Privacy**: No user data collection on error pages

## 📞 Support

For questions or issues with the error pages system:

- **Contact**: Use the contact form on the main website
- **Documentation**: This README and inline code comments
- **Demo**: Visit `/error-demo` to see all pages in action

---

**Techaxis Consulting** - Professional error handling for professional websites.
