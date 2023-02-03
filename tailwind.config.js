module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#fff7f5',
          100: '#ffefeb',
          200: '#ffd7ce',
          300: '#ffbeb0',
          400: '#fe8e74',
          500: '#fe5d39',
          600: '#e55433',
          700: '#bf462b',
          800: '#983822',
          900: '#7c2e1c',
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f4',
          200: '#e4e4e4',
          300: '#d3d3d3',
          400: '#b3b3b3',
          500: '#929292',
          600: '#838383',
          700: '#6e6e6e',
          800: '#585858',
          900: '#484848',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
