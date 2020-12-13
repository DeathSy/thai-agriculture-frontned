import React from 'react'
import styled from 'styled-components'
import Imglogo from '../../assets/field.png'
import Logo from '../Navbar/Logo'

const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30%;
  background-color: #e0e0e0;
  text-align: center;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Between = styled.div`
  height: 1rem;
`

function Footer () {
  return (
    <Wrapper>
      <Logo src={Imglogo} />
      <Between />
      Copyrights © AgroGreen 2020. All rights reserved.
    </Wrapper>
  )
}

export default Footer
