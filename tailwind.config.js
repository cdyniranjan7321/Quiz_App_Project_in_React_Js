/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
      },
      transform: {
        'rotate-360': 'rotate(360deg)',
      },
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        work: ['Work'],
        sansi: ['Sansita'],
      },
      height: {
        95: '376px',
      },
      width: {
        95: '376px',
      },
      blur: {
        150: '150px',
        100: '100px',
        '4xl': '98px',
      },
      colors: {
        custom: {
          Indigo: 'rgb(200,107,250)',

          Blackis: 'rgb(48, 5, 89)',
          Purplee: '#564196',
          Purple2: '#3A00E5',
          Blue: '#6E6BFA',
          Green: '#081C15',
          White: '#FFFAFA',
          brown: '#AD9090',
        },
      },
    },

    screens: {
      sm: '300px', // Small screens and above (default: 640px)
      md: '768px', // Medium screens and above (default: 768px)
      lg: '1024px', // Large screens and above (default: 1024px)
      xl: '1280px', // Extra-large screens and above (default: 1280px)
      '2xl': '1440px', // 2X large screens and above (default: 1440px)
      // Add your custom breakpoints here
      custom: '900px', // Custom breakpoint
    },
    opacity: {
      69: '0.69',
    },
  },
  plugins: [],
}
