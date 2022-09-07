import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;

  --purple: #8284fa;
  --purple-dark: #5e60ce;

  --blue: #4ea8de;
  --blue-dark: #1e6f9f;

  --danger: #e25858;
}

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%; 
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  a {
  text-decoration: none;
  color: inherit;
}
  
`;
