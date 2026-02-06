# Spotix - Local Direct Mail Advertising

A modern, minimalist website for Spotix - a shared direct mail service where local businesses reserve ad spots on postcards delivered to 10,000 homes.

![Spotix Preview](./public/postcard-mockup.jpg)

## Features

- **Modern Design**: Clean, minimalist aesthetic with vibrant orange accents
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Ready**: Meta tags, structured content, and semantic HTML
- **Smooth Interactions**: Smooth scrolling, hover effects, and form validation
- **GitHub Pages Optimized**: Ready for easy deployment

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Modern icon library

## Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Full-height section with postcard mockup and CTAs
3. **Why We Started** - Story section with benefit bullets
4. **Choose Your Spot** - Four spot size cards with visual representations
5. **Benefits** - 8 benefit cards in a responsive grid
6. **How It Works** - 4-step process timeline
7. **FAQ** - Accordion-style frequently asked questions
8. **Contact** - Lead capture form with spot selection
9. **Footer** - Minimal footer with navigation links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotix.git
cd spotix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The included workflow (`.github/workflows/deploy.yml`) will automatically deploy on pushes to main

### Manual Deployment

1. Build the project: `npm run build`
2. Copy the `dist/` folder contents to your web server
3. Ensure your server is configured for single-page application routing

## Project Structure

```
spotix/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── postcard-mockup.jpg     # Hero image asset
├── src/
│   ├── sections/               # Page section components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── WhyWeStarted.tsx
│   │   ├── ChooseYourSpot.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/ui/          # shadcn/ui components
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App-specific styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── index.html                  # HTML entry point
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the brand colors:

```javascript
colors: {
  spotix: {
    orange: "#F97316",      // Primary brand color
    "orange-dark": "#EA580C",
    charcoal: "#1F2937",    // Text color
    cream: "#FFFBF7",       // Background accent
  },
}
```

### Content

All content is in the section components under `src/sections/`. Edit the text directly in these files.

### Images

Replace `public/postcard-mockup.jpg` with your own hero image. Recommended size: 1200x900px or larger.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your own projects.

## Contact

For questions or support, email hello@myspotix.com

---

Built with ❤️ for local businesses everywhere.
