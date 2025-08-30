# EmailJS Setup Guide for Contact Form

## 🚀 Quick Setup

Your contact form is now configured with EmailJS! Follow these steps to make it functional:

### 1. Create EmailJS Account

- Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
- Verify your email address

### 2. Create Email Service

- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- **Save your Service ID** (you'll need this)

### 3. Create Email Template

- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}} Hello, You have received
a new contact form submission: Name: {{from_name}} Email: {{from_email}} Phone:
{{from_phone}} Subject: {{subject}} Message: {{message}} Best regards, Techaxis
Consulting Website
```

- **Save your Template ID** (you'll need this)

### 4. Get Your Public Key

- Go to "Account" → "API Keys"
- **Copy your Public Key**

### 5. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 6. Test Your Form

- Restart your development server
- Fill out the contact form
- Submit and check if you receive the email

## 🔧 Configuration Details

### Environment Variables

- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `VITE_EMAILJS_SERVICE_ID`: Your email service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your email template ID

### Form Data Mapping

The form sends these fields to EmailJS:

- `from_name` → Full Name
- `from_email` → Email Address
- `from_phone` → Phone Number (optional)
- `subject` → Selected Subject
- `message` → Message Content

## 📧 Email Template Variables

Your email template can use these variables:

- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{from_phone}}` - Sender's phone number
- `{{subject}}` - Selected subject
- `{{message}}` - Message content

## 🚨 Troubleshooting

### Common Issues:

1. **"Service not found"** - Check your Service ID
2. **"Template not found"** - Check your Template ID
3. **"Public key invalid"** - Check your Public Key
4. **Emails not sending** - Verify email service setup

### Debug Steps:

1. Check browser console for errors
2. Verify all environment variables are set
3. Ensure EmailJS service is properly configured
4. Check if your email provider allows API access

## 💡 Pro Tips

1. **Gmail Setup**: You may need to enable "Less secure app access" or use App Passwords
2. **Rate Limiting**: Free tier has limits, consider upgrading for business use
3. **Spam Protection**: Add CAPTCHA or honeypot fields for production
4. **Email Validation**: The form already validates email format on frontend

## 🔒 Security Notes

- Public keys are safe to expose in frontend code
- Never expose service credentials or private keys
- Consider adding rate limiting for production use
- Monitor for spam submissions

## 📱 Testing

Test your form with:

- Different email formats
- Various subject selections
- Optional phone number
- Long/short messages
- Special characters in text

---

**Need Help?** Check EmailJS documentation or contact their support team.
