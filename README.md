# Spotix - Direct Mail Advertising Website

A modern, responsive website for Spotix - a direct mail advertising service that helps businesses reach 10,000 Toronto homes with postcards.

## Features

- **Modern Dark Theme** with electric blue/cyan accent colors
- **3D Abstract Hero Visual** with floating envelopes and postcards
- **Responsive Design** - works on all devices
- **Smooth Animations** and scroll effects
- **Contact Form** integrated with Formspree
- **FAQ Accordion** section
- **Testimonials** from satisfied clients

## File Structure

```
spotix/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # External stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images and other assets (if needed)
└── README.md           # This file
```

## GitHub Pages Deployment

### Method 1: Upload to GitHub Repository

1. Create a new repository on GitHub
2. Upload all files from this folder to the repository
3. Go to **Settings** > **Pages**
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/repository-name/`

### Method 2: Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/spotix.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Form Configuration

The contact form is configured to use Formspree. To use your own form:

1. Create an account at [Formspree](https://formspree.io)
2. Create a new form
3. Replace the form action URL in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Color Palette

- **Background**: Pure Black (#000000)
- **Primary Accent**: Electric Blue/Cyan (#00D9FF to #0099FF)
- **Secondary**: Deep Blue (#0066CC)
- **Text**: White (#FFFFFF)
- **Subtle Text**: Gray (#888888)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Spotix. All rights reserved.
