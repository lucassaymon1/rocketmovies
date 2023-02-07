import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  body{
    color: white;
    font-size: 16px;

    background-color: #1C1B1E;
  }

  h2 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 400;
  }
  a{
    text-decoration: none;
    color: gray;
    transition: all 0.1s ease;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button{
    transition: all 0.1s ease;
    &:hover{
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  svg{
    color: ${({theme}) => theme.COLORS.PINK}
  }

  input::placeholder, textarea::placeholder{
    font-size: 16px;
  }

  main{
    text-align: justify;
    margin: 46px 91px 130px 123px;
    color: hsla(25, 35%, 93%, 1);
    max-width: 85%;
  }
  
`

export default GlobalStyle

