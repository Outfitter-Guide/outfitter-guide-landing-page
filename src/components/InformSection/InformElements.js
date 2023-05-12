import styled from "styled-components";

export const InformContainer = styled.div` 
    background-color: #333;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    padding-top: 75px;
    height: 720px;
    z-index: 1;

    @media screen and (max-width: 600px){
        height: 600px;
    }
`

export const InformContent = styled.div` 
    z-index: 1;
    justify-content: center;
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InformH1 = styled.h1` 
    color: white;
    font-size: 48px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 600px){
        font-size: 32px;
    }
`

export const InformP1 = styled.p` 
    margin-top: 30px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    padding-top: 30px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`

export const InformOutfitters = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 3.5em;
  gap: 1.5em;

  img{
    @media screen and (max-width: 600px){
        width: 200px;
        height: 90px;
    }
  }
`
