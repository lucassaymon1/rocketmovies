import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background-color: ${({theme}) => theme.COLORS.DARK_PINK}; 
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 24px;

  >h3{
    font-size: 24px;
    color: hsla(25, 35%, 93%, 1);
  }

  >.half-text{
    color: #999591;
    
    >p{
      font-family: 'Roboto', sans-serif;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      
    }
  }

  >.rating{
    display: flex;
    gap: 6px;
  }

  >.tags{
    >div{
      background-color: hsla(258, 10%, 20%, 1);
    }
    margin-top: 15px;
    display: flex;
    gap: 8px
  }
` 