import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.GRAY_400}; 
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-radius: 12px;

  margin-bottom: 8px;
  padding-left: 12px;

  >svg{
    color: #948F99;
  }
  >input{
    height: 56px;
    width: 100%;

    border: 0;
    padding: 24px 12px;
    outline: none;
  
    background: transparent;
    color: white;
    font-size: 15px;
    line-height: 18px;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`

