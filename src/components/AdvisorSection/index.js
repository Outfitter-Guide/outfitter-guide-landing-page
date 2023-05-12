import React from 'react'
import CardSection from '../Card'
import { brian, kelly, rahul, steve } from '../Card/Data'
import {
    AdvisorContainer,
    AdvisorContent,
    AdvisorH1,
    AdvisorInfo
} from './AdvisorElements'

function AdvisorSection() {
  return (
    <AdvisorContainer id='advisors'>
        <AdvisorContent>
            <AdvisorH1>Advisor Team</AdvisorH1>
            <AdvisorInfo>
              <CardSection {...brian}/>
              <CardSection {...kelly} />
              <CardSection {...rahul} />
              <CardSection {...steve} />
            </AdvisorInfo>
        </AdvisorContent>
    </AdvisorContainer>
  )
}

export default AdvisorSection