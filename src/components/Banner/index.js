import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: red;
`
const Bannerimg = styled.div`
  width: 100vh;
  height: 20vh;
  background-color: red;
`

const Img = styled.div`
  width: 100vh;
  height: 20vh;
  background-color: red;
`
function Banner () {
  return (
    <div>
      <Container>
        <Bannerimg>
          <Img />
        </Bannerimg>
      </Container>
    </div>
  )
}

export default Banner
