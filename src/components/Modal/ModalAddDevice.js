import React, { useState } from 'react'
import { ContentDetail, TextTitle, InputDevice, ButtonAdd, FooterDevice } from './styled'
function ModalAddDevice () {
  const [valueId, setValueId] = useState('')
  const [valueName, setValueName] = useState('')
  const handleInputId = (event) => setValueId(event.target.value)
  const handleInputName = (event) => setValueName(event.target.value)
  return (
    <>
      <ContentDetail>
        <TextTitle>Device ID</TextTitle>
        <InputDevice value={valueId} onChange={handleInputId} />
        <TextTitle>Device Name</TextTitle>
        <InputDevice value={valueName} onChange={handleInputName} />
      </ContentDetail>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
