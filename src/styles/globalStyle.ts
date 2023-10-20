import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100%;
    margin: 0;
}

ul{
    padding: 0;
}

li{
    list-style: none;
}

button, input, textarea{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    margin: 8px 0;
    padding: 0 20px;
}

h1{
    font-size: 1rem;
    font-weight: 700;
}
`;

export default GlobalStyle;
