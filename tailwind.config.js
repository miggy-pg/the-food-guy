/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotMono: "Roboto Mono, monospace",
    },
    // we are extending/overriding the default tailwind config
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
