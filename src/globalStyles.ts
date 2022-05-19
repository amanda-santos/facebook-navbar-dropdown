import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #242526;
    --bg-dark: #191919;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }

  body {
    margin: 0;
    color: var(--text-color);
    background: var(--bg-dark);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    margin: 0; 
    padding: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  } 

  svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`;
