import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    font-family: Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    text-decoration: none;
    color: #000;
    boxing: border-box;
  }

  hr {
    width: 1500px;
    border-color: #ffffff;
  }

  .hide {
    display: none;
    visibility: hidden;
  }
`

export default GlobalStyles;