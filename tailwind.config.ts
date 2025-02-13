import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(25%)' },
        }
      },
      animation: {
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
