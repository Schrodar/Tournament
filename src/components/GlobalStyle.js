import { createGlobalStyle } from 'styled-components'   

const GlobalStyles = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;

    }
}
body{
    font-family: 'Montserrat', sans-serif;
    background: rgb(224, 217, 217);
}



h2{
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
}
h3{
    font-size: 1.3rem;
    color: #333;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a{
    text-decoration: none;
    color: black;
}
 img{
    display:block;
 }
#numberOfTeams{
    font-size:2rem;
    margin-left: 1rem;
}
#pushmedown{
    margin-top: 1rem;
}

`;
export default GlobalStyles;
