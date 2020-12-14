import React, { useState } from 'react'
import { createDevice } from '../../services/newDeviceAPI'
// import { useHistory } from 'react-router-dom'
import {
  ContentDevice,
  TextTitle,
  InputDevice,
  ButtonAdd,
  FooterDevice,
  ContainerDevice
} from './styled'
function ModalAddDevice () {
  // const history = useHistory()
  const [valueId, setValueId] = useState('')
  const [valueName, setValueName] = useState('')
  const handleSubmit = () => {
    createDevice(localStorage.getItem('token'), localStorage.getItem('userId'), valueId, valueName)// .then(() => history.push('/home'))
  }
  return (
    <ContainerDevice>
      <ContentDevice>
        <TextTitle>Device ID</TextTitle>
        <InputDevice value={valueId} onChange={(e) => { setValueId(e.target.value) }} />
        <TextTitle>Device Name</TextTitle>
        <InputDevice value={valueName} onChange={(e) => { setValueName(e.target.value) }} />
      </ContentDevice>
      <FooterDevice>
        <ButtonAdd onClick={handleSubmit}>Add</ButtonAdd>
      </FooterDevice>
    </ContainerDevice>
  )
}

export default ModalAddDevice
