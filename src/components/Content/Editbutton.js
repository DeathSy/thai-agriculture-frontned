import React from 'react'
import styled from 'styled-components'
// import {
//   Title,
//   ButtonClose,
//   HeaderDevice,
//   customStyles
// } from '../ButtonModal/styled'
// import { TextTitle, InputInfomation } from '../Modal/styled'
// import Modal from 'react-modal'

const BackgroundImage = styled.div`
  height: 4vh;
  width: 4vh;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fix;
  z-index: 11;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`
function BackgroundBlock ({ src, children }) {
  return (
    <BackgroundImage src={src}>
      {children}
    </BackgroundImage>
  )
}
export default BackgroundBlock
