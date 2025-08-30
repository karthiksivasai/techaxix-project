# Logo Setup Instructions

## 🎯 **How to Add Your Techaxis Consulting Logo**

### 1. **Save Your Logo Image**

Save your Techaxis Consulting logo image to:

```
techaxix-project/src/assets/techaxis-logo.png
```

**Recommended specifications:**

- **Format**: PNG (with transparency) or SVG
- **Size**: 200x200px minimum (will be displayed at 48x48px)
- **Background**: Transparent or white
- **Quality**: High resolution for crisp display

### 2. **Logo Placement**

The logo will automatically appear in:

- ✅ **Header** - Top navigation bar
- ✅ **Footer** - Company information section
- ✅ **Contact Page** - Hero section (above "Contact Us" title)
- ✅ **All other pages** - Via Header component

### 3. **Logo Features**

- **Responsive**: Scales appropriately on all devices
- **Clickable**: Logo links back to home page
- **Fallback**: Shows "TC" initials if image fails to load
- **Consistent**: Same styling across all components
- **Professional**: Matches your brand colors

### 4. **Current Implementation**

The logo component includes:

- Company name: "TECHAXIS CONSULTING"
- Tagline: "Techaxis Consulting Private Limited"
- Motto: "...AXIS OF POSSIBILITIES"
- Proper color scheme integration

### 5. **Customization Options**

You can modify the logo display by changing props:

```tsx
// Show logo with full tagline
<Logo variant="header" showTagline={true} />

// Show logo without tagline (for compact spaces)
<Logo variant="header" showTagline={false} />

// Footer variant (different colors)
<Logo variant="footer" />
```

### 6. **File Structure**

```
src/
├── components/
│   ├── Logo.tsx          # Main logo component
│   ├── Header.tsx        # Header with logo
│   └── Footer.tsx        # Footer with logo
├── assets/
│   └── techaxis-logo.png # Your logo image
└── pages/
    └── Contact.tsx       # Contact page with logo
```

### 7. **Testing**

After adding your logo:

1. Run `npm run dev` to start development server
2. Navigate to different pages to see logo placement
3. Check responsive behavior on mobile/tablet
4. Verify logo links back to home page

### 8. **Troubleshooting**

- **Logo not showing**: Check file path and image format
- **Wrong size**: Ensure image is high resolution
- **Fallback showing**: Image failed to load, check file path
- **Styling issues**: Logo uses CSS variables for consistent theming

---

## 🚀 **Ready to Go!**

Once you save your logo image to the assets folder, it will automatically appear throughout your website, maintaining the professional Techaxis Consulting branding across all pages.

The logo system is designed to be:

- **Professional** - Consistent with your brand
- **Responsive** - Works on all devices
- **Accessible** - Proper alt text and fallbacks
- **Maintainable** - Easy to update and modify
