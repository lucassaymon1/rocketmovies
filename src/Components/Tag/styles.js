import styled from "styled-components";

export const Container = styled.div`

  display: inline-block;

  color: hsla(0, 0%, 90%, 1);
  font-size: 12px;
  line-height: 14px;
  font-family: "Roboto", sans-serif;

  padding: 8px 16px;
  background-color: ${({theme}) => theme.COLORS.DARK_PINK};
  border-radius: 8px;

`