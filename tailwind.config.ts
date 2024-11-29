import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        background: '#ffffff',       // Light background color
        foreground: '#171717',       // Light foreground color (text)
        darkBackground: '#0a0a0a',   // Dark background color
        darkForeground: '#ededed',   // Dark foreground color (text)
        primary: '#CFA6A61C',        // Primary background color with transparency
        accent: '#F98585',
      },
    },
  },
  plugins: [],
} satisfies Config;
