import type { Config } from 'tailwindcss';

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
        brand: '#D45B7E',
      },
    },
  },
  plugins: [],
};
export default config;
