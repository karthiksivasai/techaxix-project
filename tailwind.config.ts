import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
    screens: {
      // Custom breakpoints for comprehensive responsive design
      "xs": "320px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "hero-bg": "hsl(var(--hero-bg))",
        "hero-overlay": "hsl(var(--hero-overlay))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand colors from logo
        brand: {
          "blue-light": "hsl(var(--brand-blue-light))",
          "blue-dark": "hsl(var(--brand-blue-dark))",
        },
        // Light theme specific colors
        "text-primary": "hsl(var(--text-primary))",
        "text-body": "hsl(var(--text-body))",
        "text-muted": "hsl(var(--text-muted))",
        "text-disabled": "hsl(var(--text-disabled))",
        "primary-hover": "hsl(var(--primary-hover))",
        "primary-active": "hsl(var(--primary-active))",
        "button-disabled-bg": "hsl(var(--button-disabled-bg))",
        "button-disabled-text": "hsl(var(--button-disabled-text))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        info: "hsl(var(--info))",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-brand": "var(--brand-gradient)",
      },
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        "card-custom": "var(--shadow-card)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        // Resolution-based fluid typography with laptop optimization - REDUCED SIZES
        "fluid-xs": [
          "clamp(0.625rem, 0.6rem + 0.1vw, 0.75rem)", 
          { lineHeight: "1.4" }
        ],
        "fluid-sm": [
          "clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem)", 
          { lineHeight: "1.5" }
        ],
        "fluid-base": [
          "clamp(0.875rem, 0.8rem + 0.2vw, 1rem)", 
          { lineHeight: "1.6" }
        ],
        "fluid-lg": [
          "clamp(1rem, 0.9rem + 0.25vw, 1.125rem)", 
          { lineHeight: "1.6" }
        ],
        "fluid-xl": [
          "clamp(1.125rem, 1rem + 0.3vw, 1.25rem)", 
          { lineHeight: "1.5" }
        ],
        "fluid-2xl": [
          "clamp(1.25rem, 1.1rem + 0.35vw, 1.5rem)", 
          { lineHeight: "1.4" }
        ],
        "fluid-3xl": [
          "clamp(1.5rem, 1.3rem + 0.4vw, 1.875rem)", 
          { lineHeight: "1.3" }
        ],
        "fluid-4xl": [
          "clamp(1.875rem, 1.6rem + 0.5vw, 2.25rem)", 
          { lineHeight: "1.2" }
        ],
        "fluid-5xl": [
          "clamp(2.25rem, 1.9rem + 0.6vw, 2.75rem)", 
          { lineHeight: "1.1" }
        ],
        "fluid-6xl": [
          "clamp(2.75rem, 2.3rem + 0.7vw, 3.25rem)", 
          { lineHeight: "1.1" }
        ],
        "fluid-7xl": [
          "clamp(3.25rem, 2.7rem + 0.8vw, 3.75rem)", 
          { lineHeight: "1" }
        ],
      },
      spacing: {
        // Responsive spacing utilities
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
