import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        changeColors: {
          "0%,100%": {color:"red"},
          "8%": {color:"#ff7f00"},
          "16%": {color:"#ff0"},
          "25%": {color:"#7fff00"},
          "33%": {color:"#0f0"},
          "41%": {color:"#00ff7f"},
          "50%": {color:"#007fff"},
          "58%": {color:"#7fff00"},
          "66%": {color:"#00f"},
          "75%": {color:"#7f00ff"},
          "83%": {color:"#f0f"},
          "91%": {color:"#ff007f"},
        }
      },
      animation: {
        "changeColors": "changeColors 1s linear infinite"
      },
      colors:{
        "prettyPink": "#d846ff",
        "prettyYellow": "#fefb04",
        "prettyBlue":"#48edf0",
        "prettyPurple":"#140527"
      },
      fontFamily: {
        merriWeather: ["Merriweather"],
        playFair: ["Playfair Display","serif"],
        ptSerif: ["PT Serif", "serif"]
      },
      backgroundImage: {
        "cpsi": "url('../assets/cellCPSI.png')",
        "lyricsLogo": "url('../assets/lyricsLogo.png')",
        "joguinho_f": "url('../assets/joguinho_f.png')",
        "user": "url('../assets/user.svg')",
        "email": "url('../assets/email.svg')",
      }
    },
  },
  plugins: [],
};
export default config;
