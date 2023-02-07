import styled from "styled-components"

export const Container = styled.header`

  height: 116px;
  padding-left: 123px;

  border-bottom: solid ${({theme}) => theme.COLORS.GRAY_600} 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  >input {
    height: 56px;
    width: 60%;

    border: 0;
    outline: none;
    border-radius: 10px;
    padding: 19px 24px;
  
    background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: white;
    font-size: 14px;
    line-height: 18px;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
  > h1{
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
  }
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding-right: 123px;


  >a img{
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_600};
  }

  .container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: right;
  }

  >.container span{
    color: #F4EDE8;
  }

`