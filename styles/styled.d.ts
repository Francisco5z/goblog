import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      text: string;
      title: string;
      description: string;
      footer: string;
      unHoveredText: string;
    }
  }
}