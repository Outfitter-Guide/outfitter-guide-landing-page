import React from 'react'
import CardSection from '../Card';
import { zack, kyle, john, patrick, alex } from '../Card/Data';
import {
    FounderContainer,
    FounderContent,
    FounderH1,
    FounderP1,
    FounderInfo
} from './FounderElements';


function FounderSection() {
  return (
    <FounderContainer id='founders'>
        <FounderContent>
            <FounderH1>Our Founding Team</FounderH1>
                <FounderP1>
                    Our group brings the pefect mix of cutting edge technological
                    and outdoor experience
                </FounderP1>
            <FounderInfo>
            <CardSection {...zack}/>
            <CardSection {...kyle}/>
            <CardSection {...john}/>
            <CardSection {...patrick}/>
            <CardSection {...alex}/>
            </FounderInfo>
        
        </FounderContent>
    </FounderContainer>
  )
}

export default FounderSection