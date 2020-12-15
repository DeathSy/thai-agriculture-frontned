import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from './BackgroundBlock'
import Img from '../../assets/banner6.jpg'

const Container = styled.div`
  width: 100vw;
  height: 45vh;
`
const Bannerimg = styled.div`
  width: 100vw;
  height: 100vh;
`

function Banner () {
  return (
    <Container>
      <Bannerimg>
        <BackgroundBlock src={Img} />
      </Bannerimg>
    </Container>
  )
}

export default Banner
