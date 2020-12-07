import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/banner2.jpg'
import BannerBlock from '../components/Bannerblock'
import FormLogin from '../components/login/FormLogin'

function Login () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
      <FormLogin/>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('AgroGreen')(Login)