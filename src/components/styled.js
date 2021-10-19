import styled from "styled-components";
import px2vw from "../utils/px2vw"

export const PokeCardContainer = styled.div`
    min-height: ${px2vw(80)};
    width: ${px2vw(220)};
    border-radius: 15px;
    background-color: #0075BE;
    box-shadow: 3px 3px 4px 4px rgba(10,40,95);
    margin: 16px;
     
        & h2{
            color: white;
            font-family: 'Trebuchet MS';
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px black;
            text-transform: uppercase;
            margin-top: 1.3rem;
        }
    
    @media (max-width: 768px) {
    width: ${px2vw(180, 768)};
    min-height: 30px;
    height: 50%;
    border-radius: 10px;
       
    
    & h2{
        font-size: 12px;
        letter-spacing: 1px;
        margin-top: 1rem;
    }
    }


`
   
export const TextContainer = styled.div`
  width: 100%;

 

`;

