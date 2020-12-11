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
const ContentMinMaxEdit = styled.div``
function BackgroundBlock ({ src, children }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <BackgroundImage onClick={handleOpen} src={src}>
        {children}
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
