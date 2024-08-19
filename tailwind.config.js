/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neometric: ['"Neometric Regular"', "sans-serif"],
        neometricItalic: ['"Neometric Italic"', "sans-serif"],
        neometricHairlineItalic: ['"Neometric Hairline Italic"', "sans-serif"],
        neometricExtraLight: ['"Neometric Extra Light"', "sans-serif"],
        neometricExtraLightItalic: [
          '"Neometric Extra Light Italic"',
          "sans-serif",
        ],
        neometricHairline: ['"Neometric Hairline"', "sans-serif"],
        neometricLight: ['"Neometric Light"', "sans-serif"],
        neometricLightItalic: ['"Neometric Light Italic"', "sans-serif"],
        neometricMedium: ['"Neometric Medium"', "sans-serif"],
        neometricMediumItalic: ['"Neometric Medium Italic"', "sans-serif"],
        neometricBold: ['"Neometric Bold"', "sans-serif"],
        neometricBoldItalic: ['"Neometric Bold Italic"', "sans-serif"],
        neometricExtraBold: ['"Neometric Extra Bold"', "sans-serif"],
        neometricExtraBoldItalic: [
          '"Neometric Extra Bold Italic"',
          "sans-serif",
        ],
        neometricBlack: ['"Neometric Black"', "sans-serif"],
        neometricBlackItalic: ['"Neometric Black Italic"', "sans-serif"],
        neometricHeavy: ['"Neometric Heavy"', "sans-serif"],
        neometricHeavyItalic: ['"Neometric Heavy Italic"', "sans-serif"],
        neometricAltRegular: ['"Neometric Alt Regular"', "sans-serif"],
        neometricAltHairline: ['"Neometric Alt Hairline"', "sans-serif"],
      },
      colors: {
        "base-color": "#0c1526",
        "pink-primer": "#e950de",
        "pink-pale": "#e3b2ef",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: false }),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
