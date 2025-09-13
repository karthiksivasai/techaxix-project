# CMS Integration Guide

This guide explains how to integrate the Mission & Values and Leadership Team sections with a real headless CMS.

## Overview

The AboutUs component now supports dynamic content from a CMS through the `CMSService` class located in `src/lib/cms.ts`. The implementation includes:

- **Mission & Values buttons** with hover popovers (desktop) and accordion behavior (mobile)
- **Meet Our Leadership section** with dynamic team member data
- **CMS-ready content structure** with proper TypeScript interfaces
- **Fallback content** when CMS data is unavailable

## CMS Fields

### Mission & Values Content
- `mission_text` (textarea): Company mission statement
- `values_text` (textarea): Company values with markdown support

### Leadership Team Content
- `leadership_team` (array): Array of leadership team members
  - `name` (text): Team member's name
  - `position` (text): Job title/position
  - `bio` (textarea): Short biography
  - `avatar` (image, optional): Profile picture URL
  - `linkedin` (url, optional): LinkedIn profile URL
  - `email` (email, optional): Contact email

## Integration Steps

### 1. Choose a Headless CMS

Popular options:
- **Strapi** (self-hosted, open source)
- **Contentful** (cloud-hosted, freemium)
- **Sanity** (cloud-hosted, developer-friendly)
- **Ghost** (self-hosted, content-focused)
- **WordPress** (headless mode)

### 2. Update CMSService

Replace the mock implementation in `src/lib/cms.ts` with real API calls:

```typescript
// Example for Contentful
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export class CMSService {
  static async getContent(): Promise<CMSContent> {
    try {
      const [missionEntry, valuesEntry, leadershipEntries] = await Promise.all([
        client.getEntry('mission'),
        client.getEntry('values'),
        client.getEntries({ content_type: 'leadershipMember' })
      ]);

      return {
        mission_text: missionEntry.fields.text,
        values_text: valuesEntry.fields.text,
        leadership_team: leadershipEntries.items.map(item => ({
          id: item.sys.id,
          name: item.fields.name,
          position: item.fields.position,
          bio: item.fields.bio,
          avatar: item.fields.avatar?.fields?.file?.url,
          linkedin: item.fields.linkedin,
          email: item.fields.email,
        }))
      };
    } catch (error) {
      console.error('CMS Error:', error);
      throw error;
    }
  }
}
```

### 3. Environment Variables

Add your CMS credentials to `.env`:

```env
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### 4. Content Structure in CMS

#### Mission Content Type
```json
{
  "name": "Mission",
  "fields": [
    {
      "id": "text",
      "name": "Mission Text",
      "type": "Text",
      "required": true
    }
  ]
}
```

#### Values Content Type
```json
{
  "name": "Values",
  "fields": [
    {
      "id": "text",
      "name": "Values Text", 
      "type": "Text",
      "required": true
    }
  ]
}
```

#### Leadership Member Content Type
```json
{
  "name": "Leadership Member",
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "required": true
    },
    {
      "id": "position",
      "name": "Position",
      "type": "Symbol", 
      "required": true
    },
    {
      "id": "bio",
      "name": "Bio",
      "type": "Text",
      "required": true
    },
    {
      "id": "avatar",
      "name": "Avatar",
      "type": "Link",
      "linkType": "Asset",
      "required": false
    },
    {
      "id": "linkedin",
      "name": "LinkedIn URL",
      "type": "Symbol",
      "required": false
    },
    {
      "id": "email",
      "name": "Email",
      "type": "Symbol",
      "required": false
    }
  ]
}
```

## Features Implemented

### ✅ Mission & Values Buttons
- **Desktop**: Hover cards with accessible popovers
- **Mobile**: Accordion panels that expand on tap
- **Accessibility**: Proper ARIA attributes (`role="button"`, `aria-haspopup="true"`, `aria-expanded`)
- **CMS Integration**: Content editable via `mission_text` and `values_text` fields

### ✅ Meet Our Leadership Section
- **Dynamic Content**: Leadership team data from CMS
- **Responsive Design**: Grid layout that adapts to screen size
- **Interactive Cards**: Hover effects and smooth animations
- **Contact Links**: LinkedIn and email integration
- **Fallback Content**: Default content when CMS data unavailable

### ✅ Modern UI Design
- **Clean Aesthetics**: Modern card design with gradients and shadows
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Works on all device sizes
- **Accessible**: Proper semantic HTML and ARIA attributes

## Testing

To test the implementation:

1. **Desktop**: Hover over Mission/Values buttons to see popovers
2. **Mobile**: Tap Mission/Values to expand accordion panels
3. **Leadership Section**: Verify team member cards display correctly
4. **CMS Integration**: Update content in your CMS and verify changes appear

## Performance Considerations

- **Lazy Loading**: CMS content loads only when component mounts
- **Error Handling**: Graceful fallback to default content
- **Caching**: Consider implementing content caching for better performance
- **Image Optimization**: Leadership avatars should be optimized for web

## Next Steps

1. Set up your chosen headless CMS
2. Create the content types as described above
3. Update the `CMSService` with real API calls
4. Add environment variables for CMS credentials
5. Test the integration thoroughly
6. Consider adding content preview/editing capabilities

The implementation is production-ready and follows modern React best practices with proper TypeScript typing and accessibility features.
