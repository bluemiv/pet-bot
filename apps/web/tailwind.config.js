const primaryColor = {
  primary0: '#e6f4ff',
  primary1: '#bae0ff',
  primary2: '#91caff',
  primary3: '#69b1ff',
  primary4: '#4096ff',
  primary5: '#1677ff',
  primary6: '#0958d9',
  primary7: '#003eb3',
  primary8: '#002c8c',
  primary9: '#001d66',
  primary: '#0958d9',
  'primary-dark': '#4096ff',
};

const secondaryColor = {
  secondary0: '#fafafa',
  secondary1: '#f5f5f5',
  secondary2: '#f0f0f0',
  secondary3: '#d9d9d9',
  secondary4: '#bfbfbf',
  secondary5: '#8c8c8c',
  secondary6: '#595959',
  secondary7: '#434343',
  secondary8: '#262626',
  secondary9: '#1f1f1f',
  secondary: '#595959',
  'secondary-dark': '#bfbfbf',
};

const viewerX = '768px';
const viewerY = '512px';

const eyesX = '100px';
const eyesY = '170px';

const primary = '#20c997';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        ...primaryColor,
        ...secondaryColor,
      },
      borderColor: {
        ...primaryColor,
        ...secondaryColor,
      },
      textColor: {
        ...primaryColor,
        ...secondaryColor,
      },
      width: {
        eyes: eyesX,
        viewer: viewerX,
      },
      height: {
        eyes: eyesY,
        viewer: viewerY,
      },
    },
  },
  plugins: [],
};
