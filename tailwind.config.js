/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {},
  variants: {},
  plugins: [],
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark-mode"
  },
  variants: {
    backgroundColor: [
      "dark",
    ],
    borderColor: ["dark"],
    textColor: ["dark"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};