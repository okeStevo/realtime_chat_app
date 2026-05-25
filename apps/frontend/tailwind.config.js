/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6', // Premium Violet
          600: '#7c3aed',
          700: '#6d28d9',
        },
        blue: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6', // Vibrant Teal
          600: '#0d9488',
          700: '#0f766e',
        },
        purple: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#ec4899', // Rich Rose/Fuchsia
          600: '#db2777',
          700: '#be185d',
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5', // Zinc-based grays for modern luxury feel
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
    },
  },
  plugins: [],
}