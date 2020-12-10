import React from 'react'
import withHelmet from '../util/withHelmet'
import styled from 'styled-components'
import Banner from '../components/Banner/index'
import Content from '../components/Content/index'
import Navbar from '../components/Navbar/index'
import Footer from '../components/footer/Footer'

const Container = styled.div`
  width: 100vw;
  height: 120%;
  background-color: #fff;
`

function Home () {
  return (
    <>
      <Container>
        <Navbar />
        <Banner />
        <Content />
      </Container>
      <Footer />
    </>
  )
}

export default withHelmet('Agogreen | Home')(Home)
