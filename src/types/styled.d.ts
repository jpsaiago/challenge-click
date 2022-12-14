import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      textField: string;
      highlight: string;
      background: string;
      containerBorder: string;
      containerBackground: string;
      statusBarColor: string;
      font: {
        "100": string;
        "200": string;
        "300": string;
      };
    };
  }
}
