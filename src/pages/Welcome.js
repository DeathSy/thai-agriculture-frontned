import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/banner2.jpg'
import BannerBlock from '../components/Bannerblock'
import Navbar from '../components/Navbar'

function Register () {
  return (
    <>
      <Navbar />
      <BannerBlock src={backgroundImage} />
    </>
  )
}
export default withHelmet('AgroGreen')(Register)
