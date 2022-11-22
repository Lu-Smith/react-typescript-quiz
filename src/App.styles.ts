import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 0;
    margin: 0;
}

html {
 height: 100%;
}
body {
 background-color: #e0ebeb; 
 text-align: center;
 padding: 30px;
}


`