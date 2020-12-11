import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  ButtonClose,
  HeaderDevice,
  customStyles
} from '../ButtonModal/styled'
import { TextTitle, InputInfomation } from '../Modal/styled'
import Modal from 'react-modal'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: 2.1vw;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 11;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentMinMaxEdit = styled.div`
 
`
function BackgroundBlock ({ src, height = 4.1, children }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <BackgroundImage src={src} height={height}>
        <BackgroundOverylay onClick={handleOpen}>{children}</BackgroundOverylay>
      </BackgroundImage>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <HeaderDevice>
          <Title>Edit Infomation</Title>
          <ButtonClose onClick={handleClose}>x</ButtonClose>
        </HeaderDevice>
        <ContentMinMaxEdit>
          <TextTitle>Maximum range</TextTitle>
          <InputInfomation type='number' />
          <TextTitle>Minimum range</TextTitle>
          <InputInfomation type='number' />
        </ContentMinMaxEdit>
      </Modal>
    </>
  )
}
export default BackgroundBlock
