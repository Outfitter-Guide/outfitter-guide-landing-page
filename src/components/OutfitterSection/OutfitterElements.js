import styled from "styled-components";


export const OutfitterContainer = styled.div` 
    background: #A29587;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 650px){
        height: 500px;
    }
`

export const GeneralContent = styled.div` 
    max-width: 1200px;
    position: absolute;
    padding: 8 24px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OutfitterH1 = styled.h1` 
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 650px){
        font-size: 24px;
    }
`
export const OutfitterP1 = styled.p` 
    margin-top: 75px;
    padding-bottom: 50px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 650px){
        font-size: 15px;
    }
`

export const OutfitterP2 = styled.p` 
    margin-top: 5px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 700px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 650px){
        font-size: 15px;
    }
`
