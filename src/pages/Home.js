import React from 'react'
import withHelmet from '../util/withHelmet'
import styled from 'styled-components'
import Banner from '../components/Banner/index'
import Content from '../components/Content/index'
import Navbar from '../components/Navbar'

const Container = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: #fff;
`

function Home () {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Content />
    </Container>
  )
}

export default withHelmet('Agogreen | Home')(Home)
