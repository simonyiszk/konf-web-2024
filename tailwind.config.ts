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
        nebula: 'url("/img/nebula.gif")',
        space: 'url("/img/space.jpg")',
      },
      boxShadow: {
        gloria: '0 0 60px 0 white',
      },
    },
  },
  plugins: [],
};
export default config;
