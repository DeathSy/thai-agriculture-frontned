import React from 'react'
import withHelmet from '../util/withHelmet'
import Banner from '../components/Banner/index'
import Content from '../components/Content/index'
import Navbar from '../components/Navbar/index'
import Footer from '../components/footer/Footer'

function Home () {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  )
}

export default withHelmet('Agogreen | Home')(Home)
