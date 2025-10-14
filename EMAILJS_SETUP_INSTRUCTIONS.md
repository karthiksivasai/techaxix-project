# EmailJS Setup Instructions for Contact Form

## Current Status ✅
- Contact form is coded and ready (`src/pages/Contact.tsx`)
- `.env` file created with placeholder values
- `.gitignore` updated to protect environment variables

## Step-by-Step Setup

### 1. Get Your EmailJS Credentials

You need to collect these 3 values from your EmailJS dashboard:

#### A. Public Key
1. Go to your EmailJS dashboard
2. Navigate to **Account** → **API Keys**
3. Copy your **Public Key**
4. Replace `YOUR_PUBLIC_KEY_HERE` in `.env` file

#### B. Service ID
1. Go to **Email Services** in your dashboard
2. Find your email service (Gmail, Outlook, etc.)
3. Copy the **Service ID**
4. Replace `YOUR_SERVICE_ID_HERE` in `.env` file

#### C. Template ID
1. Go to **Email Templates** in your dashboard
2. Find your "Contact Us" template
3. Copy the **Template ID**
4. Replace `YOUR_TEMPLATE_ID_HERE` in `.env` file

### 2. Update Your Email Template

Make these changes in your "Contact Us" template:

#### Subject Line
Change from: `{{subject}}`
Change to: `New Contact Form: {{subject}}`

#### Email Content
Replace the current message body with:
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

#### Template Settings (Right Sidebar)
- **To Email**: `admin@techaxisconsulting.com` ✓
- **From Name**: `{{from_name}}` ✓
- **Reply To**: `{{from_email}}` ✓

**Important**: Click **"Save"** after making changes!

### 3. Update Environment Variables

Open `.env` file and replace the placeholder values:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

### 4. Test the Contact Form

1. **Restart your development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Navigate to your contact page**

3. **Fill out the form** with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: +91 9876543210
   - Subject: Test Submission
   - Message: This is a test message

4. **Submit the form**

5. **Check your email** at `admin@techaxisconsulting.com`

### 5. Troubleshooting

#### If emails don't arrive:
- Check browser console for errors
- Verify all 3 credentials in `.env` are correct
- Ensure EmailJS service is properly configured
- Check spam folder

#### Common errors:
- "Service not found" → Check Service ID
- "Template not found" → Check Template ID
- "Public key invalid" → Check Public Key

#### Debug steps:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. Look for any red error messages

### 6. Form Data Mapping

Your contact form sends these fields:
- `{{from_name}}` → Full Name
- `{{from_email}}` → Email Address
- `{{from_phone}}` → Phone Number (optional)
- `{{subject}}` → Selected Subject
- `{{message}}` → Message Content

All emails will be sent to: `admin@techaxisconsulting.com`

## Security Notes
- ✅ `.env` file is protected in `.gitignore`
- ✅ Public keys are safe to expose in frontend
- ⚠️ Never commit actual credentials to git
- ⚠️ Consider upgrading EmailJS plan for production use

## EmailJS Limits
- Free tier: 200 emails/month
- Resets monthly
- Upgrade available for higher limits

---

**Need help?** Check the EmailJS documentation or their support team.
