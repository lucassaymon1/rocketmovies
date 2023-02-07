import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
  color: ${({theme, isNew}) => isNew ? "hsla(270, 5%, 58%, 1)" : "white"};
  border: ${({isNew}) => isNew ? "2px #948F99 dashed" : "transparent"};

  
  input{
    max-width: max-content;
    height: 57px;
    color: white;
    font-size: 16px;
    background-color: transparent;
    border: none;
    outline: none;

    &&hover{
      cursor: ${({isNew}) => isNew ? "text" : "none"};
    }
  }
  > button{
    background-color: transparent;
    border: none;
    > svg{
      width: 24px;
      height: 24px;
    }
  }
`