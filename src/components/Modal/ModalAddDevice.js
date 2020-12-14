import React, { useState } from 'react'
import {
  ContentDevice,
  TextTitle,
  InputDevice,
  ButtonAdd,
  FooterDevice,
  ContainerDevice
} from './styled'
function ModalAddDevice () {
  const [valueId, setValueId] = useState('')
  const [valueName, setValueName] = useState('')
  const handleInputId = event => setValueId(event.target.value)
  const handleInputName = event => setValueName(event.target.value)
  return (
    <ContainerDevice>
      <ContentDevice>
        <TextTitle>Device ID</TextTitle>
        <InputDevice value={valueId} onChange={handleInputId} />
        <TextTitle>Device Name</TextTitle>
        <InputDevice value={valueName} onChange={handleInputName} />
      </ContentDevice>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </ContainerDevice>
  )
}

export default ModalAddDevice
