const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 24px;
   background: rgb(251,241,254);
  background: linear-gradient(90deg, rgba(251,241,254,1) 50%, rgba(250,237,241,1) 100%);
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
    list-style: none;
    padding-left: 0;
}
`;
