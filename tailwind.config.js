/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8', // Sky Blue (Dark mode accent)
        secondary: '#818CF8', // Indigo (Dark mode accent)
        cobalt: '#2563EB', // Royal Cobalt (Light mode accent)
        midnight: '#0B0F19', // Midnight dark background
        slatecard: '#111827', // Dark card background
        indigoaccent: '#4F46E5', // Light mode primary accent
        skyaccent: '#38BDF8', // Dark mode primary accent
        obsidian: '#070709', 
        alabaster: '#F8FAFC', // Slate-50 background for light mode
        ink: '#0F172A', // Slate-900 primary text for light mode
        paper: '#FFFFFF', // Pure white card background for light mode
        chalk: '#F9FAFB',
        neutralGray: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
