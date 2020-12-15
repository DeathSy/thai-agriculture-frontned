import React from 'react'
import {
  ContentInfo,
  ContentSelect,
  TextTitle,
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
  return (
    <>
      <ContentInfo>
        <TextTitle>Information</TextTitle>
        <ContentSelect>
          <Select
            placeholder='Information'
            styles={customStyles}
            options={options}
          />
        </ContentSelect>
        <TextTitle>Maximum range</TextTitle>
        <InputInfomation min={20.0} max={50.0} step={0.5} type='number' />
        <TextTitle>Minimum range</TextTitle>
        <InputInfomation min={20.0} max={50.0} step={0.5} type='number' />
      </ContentInfo>
      <FooterDevice>
        <ButtonAdd>Add</ButtonAdd>
      </FooterDevice>
    </>
  )
}

export default ModalAddDevice
