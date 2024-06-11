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
    cursor: pointer;
}

button, input, textarea, select{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    margin: 8px 0;
    padding: 0 20px;
    resize: none;
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
    text-align: center;
}

.color-chat{
    color: #66BB6A;
}
.color-like{
    color: #ff8181;
}
.color-scrap{
    color: #FFC46E;
}

.filebox {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background: #f3f3f3;

    label {
      width: 25%;
      height: 5vh;
      border-radius: 5px;
      background: #1b1c3a;
      color: #ffffff;
      font-size: 0.9rem;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

export default GlobalStyle;
