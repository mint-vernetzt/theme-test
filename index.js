const daisyui = require("daisyui");

module.exports = {
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "theme-test": {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
