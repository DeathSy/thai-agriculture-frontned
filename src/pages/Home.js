import React from 'react'
import withHelmet from '../util/withHelmet'
import styled from 'styled-components'
import Banner from '../components/Banner/index'
import Content from '../components/Content/index'

const Container = styled.div`
  width:100vw;
  height: 200vh;
  background-color:firebrick;
`

function Home () {
  return (
    <div>
      <Container>
        <Banner />
        <Content />
      </Container>
    </div>
  )
}

export default withHelmet('Agogreen | Home')(Home)
