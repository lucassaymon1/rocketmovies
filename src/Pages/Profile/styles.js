import styled from "styled-components";

export const Container = styled.div`
  >header{
    height: 144px;
    background-color: ${({theme}) => theme.COLORS.DARK_PINK};
    display: flex;
    align-items: center;
    padding-inline: 144px;
  }
  >main{
    text-align: center;

    .user-photo img{
      border-radius: 50%;
    }
    .user-photo label{
      >svg{
        color: #312E38;
      }
      >input{
        display: none;
      }

      cursor: pointer;
      background-color: ${({theme}) => theme.COLORS.PINK};
      width: 48px;
      height: 48px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 7px;
      right: 0;
    }

    .user-photo{
      position: relative;
      margin: -135px auto 64px;
      max-width: 186px;
    }

    >form{
      max-width: 340px;
      margin: auto;

      >.username, .password{
        margin-bottom: 24px;
      }
    }

  }
`