import { HiColorSwatch } from "react-icons/hi"
import styled from "styled-components"

export const Container = styled.div`
  >main{
    .title{
      >h2{
        margin-block: 24px;  
      }
      display: flex;
      align-items: center;
      gap: 19px;
    }
    
    .rating{
      display: flex;
      gap: 10px;
      align-items: center;
      > svg{
        width: 22px;
        height: 22px;
      }
    }

    > .creationInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;


        >.createdBy, .createdAt{
          display: flex;
          align-items: center;
          justify-content: center; 
          gap: 8px;

          >p{
            font-family: 'Roboto', sans-serif;
            color: hsla(25, 35%, 93%, 1);
          }
        }
        > .createdBy img{
          width: 16px;
          border-radius: 50%;
        }
      }
    >.Tags-Container{
      display: flex;
      flex-direction: row;
      gap: 8px;
      margin-block: 40px;

    }
    
  }

`