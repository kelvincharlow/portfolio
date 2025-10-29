# 📧 Email Setup Guide for Contact Form

## Option 1: EmailJS (Recommended - Free & Easy)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Setup Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard
5. **Copy your Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent via your portfolio website
```

4. **Copy your Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

### Step 5: Update Your Code
Replace in `src/components/contact.tsx`:

```javascript
// Replace these values:
'YOUR_SERVICE_ID' → 'service_abc123' (your actual service ID)
'YOUR_TEMPLATE_ID' → 'template_xyz789' (your actual template ID)  
'YOUR_PUBLIC_KEY' → 'abcdef123456' (your actual public key)
```

### Step 6: Test
1. Save and test your contact form
2. Check your email for messages

---

## Option 2: Formspree (Alternative)

### Step 1: Setup
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free account
3. Create new form

### Step 2: Update Form Action
Replace the form in contact.tsx:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## Option 3: Netlify Forms (If using Netlify)

Add `data-netlify="true"` to your form:
```jsx
<form data-netlify="true" name="contact">
```

---

## Option 4: Vercel + API Route (Advanced)

Create `src/app/api/contact/route.ts`:
```javascript
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  // Configure nodemailer with your email service
  const transporter = nodemailer.createTransporter({
    // Your email configuration
  })

  // Send email logic here
}
```

---

## 🔧 Current Status

✅ EmailJS package installed
✅ Contact form updated with EmailJS integration
⚠️ **Need to add your EmailJS credentials**

## 🚀 Next Steps

1. Choose your preferred option (EmailJS recommended)
2. Follow the setup steps above
3. Update the credentials in your code
4. Test the form
5. Deploy your changes

## 📝 Notes

- EmailJS free tier: 200 emails/month
- All options are secure and professional
- EmailJS works entirely on the frontend (no backend needed)