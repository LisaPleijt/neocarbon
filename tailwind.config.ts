import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neocarbon: {
          'dark-teal': '#011C1E',
          'mid-teal': '#02272A',
          'green-teal': '#0F3229',
          'glow-start': '#1A3A2D',
          'glow-end': '#2A6A4C',
        },
      },
    },
  },
  plugins: [],
}

export default config
