import React, { useState } from 'react'
import {
  ContentDetail,
  ContentSelect,
  TextTitle,
  ContentMinMax,
  InputInfomation,
  ButtonAdd,
  FooterDevice,
  customStyles
} from './styled'
import Select from 'react-select'

const options = [
  { value: 'PM 1', label: 'PM 1' },
  { value: 'PM 2.5', label: 'PM 2.5' },
  { value: 'PM 10', label: 'PM 10' },
  { value: 'Wind Direction', label: 'Wind Direction' },
  { value: 'Wind Velocity', label: 'Wind Velocity' }
]

function ModalAddDevice () {
  const { number, setNumber } = useState(0.0)
  const handleInputNumber = event => setNumber(event.target.value)

  return (
    <>
      <ContentDetail>
        <ContentSelect>
          <TextTitle>Device ID</TextTitle>
          <Select styles={customStyles} options={options} />
        </ContentSelect>
        <ContentMinMax>
          <TextTitle>Device Name</TextTitle>
          <InputInfomation
            min={0.0}
            max={100.0}
            value={number}
            type='number'
            onChange={handleInputNumber}
          />
        </ContentMinMax>
      </ContentDetail>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
