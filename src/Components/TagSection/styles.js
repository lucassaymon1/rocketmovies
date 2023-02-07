import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  
`