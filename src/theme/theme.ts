import { DefaultTheme } from "styled-components/native";

const darkTheme: DefaultTheme = {
  colors: {
    textField: "white",
    background: "#282C31",
    highlight: "blue",
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
    containerBorder: "#D8DEE4",
  },
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
