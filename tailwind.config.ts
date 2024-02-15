import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        nebula: 'url("/img/nebula.webp")',
        space: 'url("/img/space.webp")',
      },
      boxShadow: {
        gloria: '0 0 50px -20px white',
      },
      colors: {
        brand: '#8f8e8f',
        konf: {
          yellow: '#FFE500',
        },
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      dropShadow: {
        hero: '0px 5.175px 5.175px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      xs: '600px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
