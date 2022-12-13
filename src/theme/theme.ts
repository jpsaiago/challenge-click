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
    textField: "#DDE0E2",
    background: "white",
    highlight: "#DDE0E2",
    containerBorder: "#D8DEE4",
  },
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
