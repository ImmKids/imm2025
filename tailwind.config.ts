import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        'imm-green': "#3AEAA1",
        'imm-header': "#D9D9D9",
        'imm-banner': "#2D2D2D",
        'imm-about': "#1D1D1D",  // Added new color
        'imm-profiles': "#414141",  // Added new color
      },
      fontFamily: {
        jersey: ['var(--font-jersey)'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        jaro: ["var(--font-jaro)", ...fontFamily.sans],
      },
      spacing: {
        'header': 'var(--header-height)',
        '15': '3.75rem', // 60px
      },
      textShadow: {
        'glow': '0 0 20px rgba(58, 234, 161, 0.8), 0 0 40px rgba(58, 234, 161, 0.6), 0 0 60px rgba(58, 234, 161, 0.4), 0 0 80px rgba(58, 234, 161, 0.2)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
} satisfies Config;
