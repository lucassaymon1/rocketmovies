import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  background: none;
  outline: none;
  border: none;

  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 16px;
  font-family: 'Roboto Slab', serif;

  display: flex;
  gap: 8px;
  align-items: center;

`