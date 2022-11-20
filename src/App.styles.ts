import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
 height: 100%;
}
body {
 background-color: #e0ebeb; 
 text-align: center;
 padding: 30px;
}

* {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
}
`