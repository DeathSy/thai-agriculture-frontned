import React from 'react'
import { ContentDetail, ContentModal, TextTitle, Title, InputDevice, ButtonAdd, ButtonClose, HeaderDevice, FooterDevice } from './styled'
import Select from 'react-select'
const options = [
  { value: 'Temperature', label: 'Temperature' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
function ModalAddDevice () {
  return (
    <>
      <ContentDetail>
        <ContentSelect>
        <TextTitle>Device ID</TextTitle>
        <Select options={options} />
        </ContentSelect>
        <ContentMinMax>
        <TextTitle>Device Name</TextTitle>
        <InputDevice value={valueName} onChange={handleInputName} />
        </ContentMinMax>
      </ContentDetail>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
