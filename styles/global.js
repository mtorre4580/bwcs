import { createGlobalStyle } from "styled-components";

// global style reset default browsers
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Epilogue;
    }
    a {
        text-decoration: none;
    }
    ol, ul {
        list-style: none;
    }
    text-rendering: optimizeLegibility;
`;

export default GlobalStyle;
