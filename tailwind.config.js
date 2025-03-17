/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "color-1" : "var(--color-1)",
        "color-2" : "var(--color-2)",
        "color-3" : "var(--color-3)",
        "color-4" : "var(--color-4)",
        "color-5" : "var(--color-5)",
        "color-6" : "var(--color-6)",
        "color-7" : "var(--color-7)",
        "color-8" : "var(--color-8)",
        "color-9" : "var(--color-9)",
        "color-10" : "var(--color-10)",
        "color-11" : "var(--color-11)",
        "color-12" : "var(--color-12)",
        "color-13" : "var(--color-13)",
        "color-14" : "var(--color-14)",
        "color-15" : "var(--color-15)",
        "color-16" : "var(--color-16)",
        "color-17" : "var(--color-17)",
        "color-18" : "var(--color-18)",
        "color-19" : "var(--color-19)",
        "color-20" : "var(--color-20)",
        "color-21" : "var(--color-21)",
        "color-22" : "var(--color-22)",
        "color-23" : "var(--color-23)",
        "color-24" : "var(--color-24)",
        "color-25" : "var(--color-25)",
        "color-26" : "var(--color-26)",
        "color-27" : "var(--color-27)",
      },
      backgroundImage:{
        "linear-gradient-1" : 'linear-gradient(105.5deg, #FFA432 1.35%, #FF7F32 99.66%)',
        "linear-gradient-2" : 'linear-gradient(90deg, #9054F7 0%, #2E8EF5 228.18%)',
        "linear-gradient-3" : 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)'
      },
      boxShadow:{
        "sd-1" : '0px 4px 20px 0px #00000029',
        "sd-2" : '0px 4px 20px 0px #0000001F'
      }
    },
  },
  plugins: [],
}

