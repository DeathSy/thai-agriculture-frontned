import React, { useState } from 'react'
import {
  Title,
  ButtonClose,
  HeaderDevice,
  customStyles,
  ButtonAddDevice,
  ContentButtonDevice
} from './styled'
import ModalDevice from '../Modal/ModalAddDevice'
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
      <ContentButtonDevice>
        <ButtonAddDevice onClick={handleOpen}>Add Device</ButtonAddDevice>
      </ContentButtonDevice>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <HeaderDevice>
          <Title>Add Device</Title>
          <ButtonClose onClick={handleClose}>x</ButtonClose>
        </HeaderDevice>
        <ModalDevice />
      </Modal>
    </>
  )
}

export default ButtonDevice
