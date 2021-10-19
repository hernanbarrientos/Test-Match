import styled from "styled-components";
import px2vw from "../utils/px2vw"



export const HeaderContainer = styled.header`
display: flex;
align-items: center;
text-align: center;
background-color:#1B53BA;
width: 100%;
height: 10%;
justify-content: space-between;
box-shadow: 1px 1px 2px black;
position: fixed;
z-index: 1;

.buttonHome{
    margin-left: 2em;
}
.avatar{
    margin-right: 1.2em;
    box-shadow: 0.5px 0.5px 0.5px black;
}

h1{
  
  color: white;
  letter-spacing: 6px;
  text-align: center;
  padding: 1em;
  text-shadow: 3px 3px 5px #000111;
}

@media (max-width: 768px) {
    position: relative;
    z-index: none;
    
    h1{
        font-size: 100%;
        letter-spacing: 3px;
        
    }
    .buttonHome{
    font-size: 0.5rem;
    }

    .avatar{
    
    
    box-shadow: 0.5px 0.5px 0.5px black;
    }       
    




}
`
export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
    width: 100%;
    height: 93vh;
    justify-content: center;
    align-items: center;
    text-align: center;   
    background-color: #223d6e;

    .buttonPagination{
    
    font-size: 2rem;
    font-weight: bold;
    }

    @media (max-width: 768px) {
    
    min-height: 30%;
    
    .buttonPagination{
    
    font-size: 1rem;
    font-weight: bold;
    }
}


    
    `
export const PokeCardContainer = styled.div`
    height: 50%;
    width: 80%;
    display: grid;
    grid-template-columns: 0.8fr 0.8fr 0.8fr 0.8fr;
    align-items: center;    
    text-align: center;

    @media (max-width: 768px) {
        grid-template-columns: 0.8fr 0.8fr 0.8fr;
        width:100%;
    }
    
    `

export const Footer = styled.footer`
    display: flex;
    background-color:  #1B53BA;
    width: 100%;
    height: 8vh;
    justify-content: center;
    text-align: center;
    align-items:center;
    margin: 0;
    clear: both;
    position: relative;
    bottom:0;
    left:0;

    h4{
        display: flex;
        letter-spacing: 4px;
        text-align: center;
        margin: 2%;
        align-self: center;
        color: white;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

    }

`
export const LinkFooter = styled.div`
    width: auto;
    height: 0.5em;
    text-align: center;
    align-items: center;
    display: flex;
    gap: 32px;

`
export const CardNameDev = styled.p`
    width: auto;
    height: 0.5em;
    background-color: lightgrey;
    border-radius: 10px;
    font-size: 1.3em;
    text-align: right;
    position: relative;
    display: none;

        &:hover {
            display: inline-flex;
        }

`

export const PictureFooter = styled.img`

    width: 2em;
    border-radius: 50px;

    &:hover{
        width: 2.3em;
        box-shadow: 2px 2px 10px  black;
        
        
        

    }
    

`
