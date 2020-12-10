import React, { useState } from 'react'
import {
  ContentDetail,
  ContentSelect,
  TextTitle,
  ContentMinMax,
  InputInfomation,
  ButtonAdd,
  FooterDevice,
  Select
} from './styled'
// import Select from 'react-select'

export const options = [
  { value: 'Temperature' },
  { value: 'Humidity' },
  { value: 'PM 1' },
  { value: 'PM 2.5' },
  { value: 'PM 10' },
  { value: 'Wind Direction' },
  { value: 'Wind Velocity' },
  { value: 'Corrosion' },
  { value: 'Pressure' }
]
function ModalAddDevice () {
  const { number, setNumber } = useState(0.0)
  const handleInputNumber = event => setNumber(event.target.value)
  return (
    <>
      <ContentDetail>
        <ContentSelect>
          <TextTitle>Device ID</TextTitle>
          <Select>
            {/* {value.map(options => (
              <option key={options}>{options}</option>
            ))} */}
          </Select>
        </ContentSelect>
        <ContentMinMax>
          <TextTitle>Device Name</TextTitle>
          <InputInfomation min={0.0} max={100.0} value={number} type='number' onChange={handleInputNumber} />
        </ContentMinMax>
      </ContentDetail>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
