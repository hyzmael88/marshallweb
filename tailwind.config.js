/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'brand-primary': "#EC2F2F",
        "brand-secondary": "#233E9E"
      },
      fontFamily:{
        "header": "Roboto, sans-serif",
        "paragraph": "Roboto, sans-serif",
      },
      boxShadow: {
        'brand': '0px 3px 6.2px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
