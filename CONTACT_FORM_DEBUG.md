# 🚨 Contact Form Troubleshooting Guide

## Current Issue: Form not sending emails

### Quick Tests:

#### Test 1: Direct Formspree URL
Visit this URL in your browser:
```
https://formspree.io/f/xnnodkgw
```

**Expected Result:** Should show a Formspree form page
**If Error:** Your form ID is incorrect or form is disabled

#### Test 2: Check Formspree Dashboard
1. Go to https://formspree.io/forms
2. Login to your account
3. Check if form `xnnodkgw` exists and is enabled
4. Verify your email is confirmed

#### Test 3: Manual Form Test
Open formspree-test.html in browser and submit a test

### Alternative Solutions:

#### Option 1: Web3Forms (Free & Reliable)
1. Go to https://web3forms.com/
2. Enter your email address
3. Get your Access Key
4. Replace form action with Web3Forms

#### Option 2: EmailJS (Your Original Setup)
- Go back to EmailJS if Formspree continues failing
- EmailJS credentials are still in your environment variables

#### Option 3: Simple Mailto Link
```html
<a href="mailto:your-email@domain.com?subject=Portfolio Contact&body=Name:%0D%0AEmail:%0D%0AMessage:">
  Contact Me
</a>
```

### Debugging Checklist:
- [ ] Form ID is correct: `xnnodkgw`
- [ ] Formspree account email is verified
- [ ] Form is enabled in Formspree dashboard
- [ ] No browser console errors
- [ ] Form submits successfully (opens new tab)

### Current Form Status:
- ✅ Form submits to Formspree
- ✅ Opens in new tab for verification
- ✅ Shows success message in portfolio
- ❓ Email delivery depends on Formspree setup

### Next Steps:
1. Verify Formspree setup
2. If still failing, switch to Web3Forms
3. Test with simple HTML form first