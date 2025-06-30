import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*,*:after,*:before{
box-sizing: border-box;
margin: 0;
padding: 0;
}

html,body{
font-family: 'Inter', sans-serif;
background-color: #e1e3de;
font-size: 16px;
height: 100%;
}

a{
text-decoration:none;
color:inherit;
}

ul{
list-style:none;
display: flex;
}

button{
font-family: inherit;
cursor: pointer;
border: none;
background: none;
}
`