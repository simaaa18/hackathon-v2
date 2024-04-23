/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          gainsboro: "#d9d9d9",
          "foundation-green-g300": "#dbe274",
          "foundation-black-b40": "#dedede",
          silver: "#c4c4c4",
          "foundation-green-g900": "#c9d32c",
          olive: "#96a100",
        },
        spacing: {},
        fontFamily: {
          "body-b1": "Roboto",
        },
        borderRadius: {
          xl: "20px",
          "98xl": "117px",
        },
      },
      fontSize: {
        "29xl": "48px",
        "10xl": "29px",
        "19xl": "38px",
        "5xl": "24px",
        lgi: "19px",
        xl: "20px",
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        lg: {
          max: "1200px",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  