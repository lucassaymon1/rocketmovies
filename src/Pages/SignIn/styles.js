import { Link } from "react-router-dom"

import styled from "styled-components";
import backgroundImg from "../../assets/Group15.png";

export const Container = styled.div `

  height: 100vh;
  display: flex;
  align-items: stretch;
  
  >form{

      max-width: 340px;
      margin-inline: 134px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-self: center;
      justify-self: center;

    >.form-header{
      text-align: left;
      >h1{
        color: ${({theme}) => theme.COLORS.PINK};
      }
      >p{
        margin-bottom: 48px;
        font-size: 14px;
        color: #CAC4CF;
      }
      >h3{
        font-size: 24px;
        margin-bottom: 48px;
      }

    }

      .input-wrapper{
        margin-bottom: 24px;
      }

      #sign-up{
        margin-top: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`