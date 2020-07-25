import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline: 0;
    &:focus {
    outline: 0
  }
}

html,body{
    -webkit-font-smoothing: antialiased !important;
}

body{
    font-family:  'Montserrat', sans-serif;
    font-size:16px;
    font-weight:400;
}

button,input{
    font-family:  'Montserrat', sans-serif;
}

a{
    text-decoration:none;

}
ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
