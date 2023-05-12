import React from 'react'
import {
    InformContainer,
    InformContent,
    InformH1,
    InformP1,
    InformOutfitters,
} from './InformElements'

function InformSection() {
  return (
    <InformContainer id='prod-dev'>
        <InformContent>
            <InformH1> Help Inform Our Product Development</InformH1>
            <InformP1>Join Other Top Outfitters in our Closed Beta! 
                Email <u onClick={(e) => {window.location.href ='mailto:zach@theoutfitter.guide';}}
                >Zach Hanson</u> to learn more.
            </InformP1>
            <InformOutfitters>
                <img src={require('../../images/fawnie_mountain-logo.svg').default} style={{alignSelf: 'center'}} height={125} width={450} alt='logo'/>
                <img src={require('../../images/mystic_saddle.jpg')} height={125} width={450} alt='logo'/>
                <img src={require('../../images/bear_creek.png')} width={500} alt='logo'/>
            </InformOutfitters>
        </InformContent>
    </InformContainer>
  )
}

export default InformSection