import React, { useState } from 'react'
import { ContentModal, Title, ButtonClose, HeaderDevice, customStyles, ButtonInfo, TextButton, ContentButtonInfo } from './styled'
import ModalInfo from '../Modal/ModalInformation'
import Modal from 'react-modal'
import { ContentButtonInfo } from '../ButtonModal/styled'
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
        <ButtonInfo onClick={handleOpen}>+</ButtonInfo>
        <TextButton>Add Info</TextButton>
      </ContentButtonInfo>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ContentModal>
          <HeaderDevice>
            <Title>Add Infomation</Title>
            <ButtonClose onClick={handleClose}>x</ButtonClose>
          </HeaderDevice>
          <ModalInfo />
        </ContentModal>
      </Modal>
    </>
  )
}

export default ButtonDevice
