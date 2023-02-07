import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.GRAY_400}; 
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-radius: 12px;
  
  textarea{
    width: 100%;
    height: 274px;

    padding: 12px;

    border: 0;
    padding: 19px 24px;

    background: transparent;
    color: white;
    font-size: 14px;
    line-height: 18px;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`