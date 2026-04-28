/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        spotix: {
          black: '#0a0a0a',
          dark: '#111111',
          orange: '#F97316',
          orangeLight: '#FB923C',
          orangeDark: '#EA580C',
          amber: '#F59E0B',
          white: '#FFFFFF',
          gray: '#9CA3AF',
          darkgray: '#1a1a1a',
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        fly: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) translateY(-5px) rotate(2deg)' },
          '50%': { transform: 'translateX(0) translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px) rotate(-2deg)' },
        },
        'home-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(249, 115, 22, 0.3)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 25px rgba(249, 115, 22, 0.6)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100vh) translateX(30px)', opacity: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fly': 'fly 4s ease-in-out infinite',
        'fly-delayed': 'fly 4s ease-in-out 1.3s infinite',
        'fly-slow': 'fly 5s ease-in-out 2.6s infinite',
        'home-pulse': 'home-pulse 2s ease-in-out infinite',
        'particle': 'particle-float 12s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
