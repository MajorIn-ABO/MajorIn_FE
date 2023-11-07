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

button, input, textarea, select{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    margin: 8px 0;
    padding: 0 20px;
}

h1{
    font-size: 1.2rem;
    font-weight: 700;
}

.category{
    border-radius: 5px;
    background: #c8caff7d;
    color: #6468ed;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 5px 10px;
    margin-right: 10px;
}

.color-chat{
    color: #44b0ff;
}
.color-like{
    color: #ff8181;
}
.color-scrap{
    color: #ffe920;
}
`;

export default GlobalStyle;
