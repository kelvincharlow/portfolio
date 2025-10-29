// Alternative contact form using Web3Forms
// Replace the form in contact.tsx with this if Formspree doesn't work

<form 
  action="https://api.web3forms.com/submit" 
  method="POST"
  className="space-y-6"
  onSubmit={(e) => {
    console.log('Form submitting to Web3Forms...')
    setTimeout(() => setIsSubmitted(true), 2000)
  }}
>
  {/* Web3Forms Access Key - Get from web3forms.com */}
  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
  
  {/* Form fields */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium text-foreground">
        Name
      </label>
      <Input
        id="name"
        name="name"
        placeholder="Your name"
        required
        className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-foreground">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </div>
  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium text-foreground">
      Message
    </label>
    <Textarea
      id="message"
      name="message"
      placeholder="Tell me about your project or just say hello!"
      rows={6}
      required
      className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Optional: Custom redirect */}
  <input type="hidden" name="redirect" value="https://your-portfolio-url.com/?success=true" />
  
  <Button
    type="submit"
    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
  >
    <Send className="mr-2 h-4 w-4" />
    Send Message
  </Button>
</form>