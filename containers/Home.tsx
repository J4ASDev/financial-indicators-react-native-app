import React from 'react'

import Container from '../components/HOCs/Container'
import HomeTemplate from '../components/templates/Home'
import INDICATORS from '../consts/indicators'

function HomeContainer() {
  return (
    <Container>
      <HomeTemplate indicators={INDICATORS} />
    </Container>
  )
}

export default HomeContainer
