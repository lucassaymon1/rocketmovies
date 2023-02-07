import styled from "styled-components"

export const Container = styled.div`

  h1{
    margin: 24px 0 40px;
  }

  h2{
    font-size: 20px;
    color: #999591;
  }

  .header-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      padding-inline: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 207px;
      color: #222222;
      >svg{
        width: 25px;
        height: 25px;
      }
    }
  }

`
