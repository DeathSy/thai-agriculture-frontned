import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/banner2.jpg'
import BannerBlock from '../components/Bannerblock'

function Register () {
  return (
    <>
      <BannerBlock src={backgroundImage} />
    </>
  )
}
export default withHelmet('AgroGreen')(Register)
