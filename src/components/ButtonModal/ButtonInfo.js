import React, { useState } from 'react'
import {
  Title,
  ButtonClose,
  HeaderDevice,
  customStyles,
  ButtonAddInfo,
  TextButton,
  ContentButtonInfo
} from './styled'
import ModalInfo from '../Modal/ModalInfomation'
import Modal from 'react-modal'
function ButtonDevice () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <ContentButtonInfo>
        <ButtonAddInfo onClick={handleOpen}>+</ButtonAddInfo>
        <TextButton>Add Info</TextButton>
      </ContentButtonInfo>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <HeaderDevice>
          <Title>Add Infomation</Title>
          <ButtonClose onClick={handleClose}>x</ButtonClose>
        </HeaderDevice>
        <ModalInfo />
      </Modal>
    </>
  )
}

export default ButtonDevice
