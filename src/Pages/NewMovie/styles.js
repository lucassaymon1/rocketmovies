import styled from "styled-components";

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

  .section{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 40px;
}
`