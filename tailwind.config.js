/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotMono: "Roboto Mono, monospace",
      flavors: "Flavors, cursive",
    },
    // we are extending/overriding the default tailwind config
    extend: {
      backgroundImage: {
        "section-background": "url('src/assets/pizza-vector-background.png')",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "200px minmax(1fr, 600px)",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
