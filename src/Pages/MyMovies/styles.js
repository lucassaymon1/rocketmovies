import styled from "styled-components"

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  main{
    grid-area: content;
    overflow-y: auto;
  }
  

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
