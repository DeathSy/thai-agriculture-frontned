import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/banner2.jpg'
import BannerBlock from '../components/BannerRegister'
import FormRegister from '../components/register/FormRegister'

function Register () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <FormRegister />
      </BannerBlock>
    </div>
  )
}
export default withHelmet('AgroGreen')(Register)
