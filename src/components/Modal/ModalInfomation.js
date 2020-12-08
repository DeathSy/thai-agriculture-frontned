import React from 'react'
import {
  ContentDetail,
  ContentSelect,
  TextTitle,
  ContentMinMax,
  InputDevice,
  ButtonAdd,
  FooterDevice
  // customStyles
} from './styled'
import Select from 'react-select'

const options = [
  { value: 'Temperature', label: 'Temperature' },
  { value: 'Humidity', label: 'Humidity' },
  { value: 'PM 1', label: 'PM 1' },
  { value: 'PM 2.5', label: 'PM 2.5' },
  { value: 'PM 10', label: 'PM 10' },
  { value: 'Wind Direction', label: 'Wind Direction' },
  { value: 'Wind Velocity', label: 'Wind Velocity' },
  { value: 'Corrosion', label: 'Corrosion' },
  { value: 'Pressure', label: 'Pressure' }
]
function ModalAddDevice () {
  return (
    <>
      <ContentDetail>
        <ContentSelect>
          <TextTitle>Device ID</TextTitle>
          <Select styles={ContentSelect.select} options={options} />
        </ContentSelect>
        <ContentMinMax>
          <TextTitle>Device Name</TextTitle>
          <InputDevice type='number' />
        </ContentMinMax>
      </ContentDetail>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
