import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from './BackgroundBlock'
import Img from '../../assets/banner3.jpg'

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: red;
`
const Bannerimg = styled.div`
  width: 100vh;
  height: auto;
  background-color: red;
`

function Banner () {
  return (
    <div>
      <Container>
        <Bannerimg>
          <BackgroundBlock src={Img} />
        </Bannerimg>
      </Container>
    </div>
  )
}

export default Banner
