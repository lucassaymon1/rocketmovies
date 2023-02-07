import { Link } from "react-router-dom"

import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_800 : theme.COLORS.PINK};
  border-radius: 10px;
  border: none;

  color: ${({theme, isNew}) => isNew ? theme.COLORS.PINK : theme.COLORS.GRAY_600};
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;

  &:hover{
    filter: brightness(0.9);
  }
`