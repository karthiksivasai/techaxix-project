# 🚀 Quick Setup Card - EmailJS Contact Form

## What You Need to Do Right Now:

### 1. 📋 Get Your Credentials
From your EmailJS dashboard, collect these 3 values:
- **Public Key** (Account → API Keys)
- **Service ID** (Email Services)
- **Template ID** (Email Templates → Contact Us)

### 2. 📝 Update Email Template
In your "Contact Us" template:

**Subject**: Change to `New Contact Form: {{subject}}`

**Content**: Replace with:
```
Hello Admin,

You have received a new contact form submission from your website.

Contact Details:
─────────────────────────────
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Subject: {{subject}}

Message:
─────────────────────────────
{{message}}
─────────────────────────────

Please respond to the customer at their email address: {{from_email}}

Best regards,
Techaxis Consulting Website
```

**Don't forget to click SAVE!** 💾

### 3. 🔧 Update .env File
Open `.env` file and replace:
```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

### 4. ✅ Test It
1. Restart dev server: `npm run dev`
2. Go to contact page
3. Fill form with test data
4. Submit
5. Check email at `admin@techaxisconsulting.com`

---

**That's it!** Your contact form will start sending emails to you. 📧

**Need help?** Check `EMAILJS_SETUP_INSTRUCTIONS.md` for detailed steps.
