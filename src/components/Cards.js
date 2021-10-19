import React from "react";
import { PokeCardContainer, TextContainer } from "./styled";



const Cards = (props) => {
 
    
  return (
 

    <PokeCardContainer>
        <TextContainer>
        <h2>{props.poke.name}</h2>         
        </TextContainer>

    </PokeCardContainer>
    
      
  )
}

export default Cards