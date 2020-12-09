import React, { useState } from 'react'
import {
  ContentModal,
  Title,
  ButtonClose,
  HeaderDevice,
  customStyles,
  ButtonOpenDevice,
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
        <ButtonOpenDevice onClick={handleOpen}>Add Device</ButtonOpenDevice>
      </ContentButtonDevice>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ContentModal>
          <HeaderDevice>
            <Title>Add Device</Title>
            <ButtonClose onClick={handleClose}>x</ButtonClose>
          </HeaderDevice>
          <ModalDevice />
        </ContentModal>
      </Modal>
    </>
  )
}

export default ButtonDevice
