import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  
  body, html {
    scroll-behavior: smooth;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    width: 100vw;

    overflow-x: hidden;    
  }

  button {
    border-radius: 7px;
    border: 0;
    
    font-size: 1.4rem;

    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2rem;

    color: ${props => props.theme.colors.title};
  }

  p {
    color: ${props => props.theme.colors.description};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.unHoveredText};

    transition: 500ms;
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }
`