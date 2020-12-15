import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/b7.png'
import BannerBlock from '../components/Bannerblock'
import Navbar from '../components/Navbar'
import TextContent from '../components/TextContent'

function Register () {
  return (
    <>
      <Navbar />
      <BannerBlock src={backgroundImage}>
        <TextContent />
      </BannerBlock>
    </>
  )
}
export default withHelmet('AgroGreen')(Register)
