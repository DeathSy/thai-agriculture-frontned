import styled from 'styled-components'

// Start-Content
export const ContentDetail = styled.div`
  padding: 10px 0px;
`
export const TextTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 10px;
`
export const InputDevice = styled.input`
  width: 93%;
  height: 25px;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 20px;
  border: solid 2px black;
  outline: none;
  font-size: 20px;
  &:focus {
    border: 1px solid #0c1737;
  }
`
export const ContentMinMax = styled.div``
export const ContentSelect = styled.div``
export const Select = styled.select``
export const InputInfomation = styled.input``
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #000',
    color: state.isSelected ? 'red' : 'blue',
    padding: 25,
    fontSize: '20px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.0 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  }
}

// End-Content

// Start-Footer
export const FooterDevice = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const ButtonAdd = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  :hover {
    background-color: #00a472;
  }
`
// End-Footer
