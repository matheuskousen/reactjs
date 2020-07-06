import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap');
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
