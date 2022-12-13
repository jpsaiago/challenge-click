import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      textField: string;
      highlight: string;
      background: string;
      containerBorder?: string;
    };
  }
}
