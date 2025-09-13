/**
 * CMS Configuration and Content Management
 * 
 * This file defines the content structure for editable CMS fields.
 * In a real implementation, this would connect to a headless CMS like:
 * - Strapi
 * - Contentful
 * - Sanity
 * - Ghost
 * - WordPress (headless)
 */

export interface CMSContent {
  mission_text: string;
  values_text: string;
  leadership_team: LeadershipMember[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  email?: string;
}

// Default content - this would be replaced by CMS data in production
export const defaultCMSContent: CMSContent = {
  mission_text: `Our mission is to empower organizations with cutting-edge Oracle ERP solutions and digital transformation services. We are committed to delivering innovative, scalable, and efficient technology solutions that drive business growth and operational excellence.

We strive to be the trusted partner that helps businesses navigate the complexities of digital transformation, ensuring seamless integration of Oracle technologies while maintaining the highest standards of quality and customer satisfaction.`,

  values_text: `Our core values define who we are and guide everything we do:

• **Innovation**: We embrace new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.

• **Integrity**: We maintain the highest ethical standards in all our business dealings, building trust through transparency and honesty.

• **Excellence**: We are committed to delivering exceptional quality in every project, going above and beyond to exceed expectations.

• **Collaboration**: We believe in the power of teamwork, both within our organization and with our clients, fostering partnerships that drive mutual success.

• **Customer-Centric**: Our clients' success is our success. We listen, understand, and deliver solutions that truly meet their unique needs and challenges.`,

  leadership_team: [
    {
      id: "1",
      name: "John Smith",
      position: "CEO & Founder",
      bio: "25+ years of experience in Oracle ERP implementations and digital transformation across Fortune 500 companies.",
      linkedin: "https://linkedin.com/in/johnsmith",
      email: "john.smith@techaxisconsulting.com"
    },
    {
      id: "2", 
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Expert in cloud architecture and Oracle Cloud technologies with 20+ years of technical leadership experience.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@techaxisconsulting.com"
    },
    {
      id: "3",
      name: "Michael Chen", 
      position: "VP of Operations",
      bio: "Operations leader with 18+ years in project management and client success, ensuring exceptional delivery standards.",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael.chen@techaxisconsulting.com"
    }
  ]
};

// Mock CMS API - replace with actual CMS integration
export class CMSService {
  private static content: CMSContent = defaultCMSContent;

  static async getContent(): Promise<CMSContent> {
    // In production, this would make an API call to your CMS
    // Example: const response = await fetch('/api/cms/content');
    // return response.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.content;
  }

  static async updateContent(updates: Partial<CMSContent>): Promise<CMSContent> {
    // In production, this would make an API call to update your CMS
    // Example: const response = await fetch('/api/cms/content', { method: 'PUT', body: JSON.stringify(updates) });
    // return response.json();
    
    this.content = { ...this.content, ...updates };
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.content;
  }

  static async getMissionText(): Promise<string> {
    const content = await this.getContent();
    return content.mission_text;
  }

  static async getValuesText(): Promise<string> {
    const content = await this.getContent();
    return content.values_text;
  }

  static async getLeadershipTeam(): Promise<LeadershipMember[]> {
    const content = await this.getContent();
    return content.leadership_team;
  }
}

// CMS Field Configuration for Admin Interface
export const cmsFieldConfig = {
  mission_text: {
    type: "textarea",
    label: "Mission Statement",
    description: "Company mission statement displayed in the Who We Are section",
    placeholder: "Enter your company mission statement...",
    required: true,
    maxLength: 1000
  },
  values_text: {
    type: "textarea", 
    label: "Company Values",
    description: "Company values displayed in the Who We Are section",
    placeholder: "Enter your company values...",
    required: true,
    maxLength: 1500
  },
  leadership_team: {
    type: "array",
    label: "Leadership Team",
    description: "Leadership team members for the Meet Our Leadership section",
    fields: {
      name: {
        type: "text",
        label: "Name",
        required: true
      },
      position: {
        type: "text", 
        label: "Position",
        required: true
      },
      bio: {
        type: "textarea",
        label: "Bio",
        required: true,
        maxLength: 500
      },
      avatar: {
        type: "image",
        label: "Avatar",
        required: false
      },
      linkedin: {
        type: "url",
        label: "LinkedIn Profile",
        required: false
      },
      email: {
        type: "email",
        label: "Email",
        required: false
      }
    }
  }
};

// Hook for using CMS content in components
export function useCMSContent() {
  const [content, setContent] = React.useState<CMSContent | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    CMSService.getContent()
      .then(setContent)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const updateContent = React.useCallback(async (updates: Partial<CMSContent>) => {
    try {
      const updatedContent = await CMSService.updateContent(updates);
      setContent(updatedContent);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update content');
    }
  }, []);

  return { content, loading, error, updateContent };
}

// Import React for the hook
import * as React from "react";
