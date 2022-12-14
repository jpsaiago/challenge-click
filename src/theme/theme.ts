import { DefaultTheme } from "styled-components/native";

const darkTheme: DefaultTheme = {
  colors: {
    font: {
      "100": "#677488",
      "200": "#A2A4B0",
      "300": "#FFFFFF",
    },
    textField: "#39414A",
    background: "#282C31",
    highlight: "blue",
    containerBackground: "#24282C",
    containerBorder: "#2D353D",
    statusBarColor: "#202020",
  },
};
const lightTheme: DefaultTheme = {
  colors: {
    font: {
      "100": "#A6A8B4",
      "200": "#676A80",
      "300": "#343641",
    },
    textField: "#DDE0E2",
    background: "#F6F8FA",
    highlight: "#DDE0E2",
    containerBackground: "#FFFFFF",
    containerBorder: "#D8DEE4",
    statusBarColor: "#252E32",
  },
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
