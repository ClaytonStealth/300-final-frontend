/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      before: {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#00c9f5",
        transform: "translateX(-100%)",
        zIndex: "-1",
        transition: "transform 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      // Enable the transition on hover variant for the before pseudo-element
      before: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities, variants }) {
      addUtilities(
        {
          ".before-slide:hover::before": {
            transform: "translateX(100%)",
          },
        },
        variants("before")
      );
    },
  ],
};
