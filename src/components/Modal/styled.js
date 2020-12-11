import styled from 'styled-components'

// Start-Content-
export const ContentDevice = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction:column;
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
export const InputInfomation = styled.input`
`
export const ContentInfo = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content:space-between;
`
export const ContentMinMax = styled.div``
export const ContentSelect = styled.div`
 width:50%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:left;
`
// export const InputInfomation = styled.input``
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #000',
    color: state.isFocused ? 'gray' : state.isSelected ? '#10c18b' : null,
    padding: 15,
    fontSize: '1.25rem',
    backgroundColor: state.isDisabled ? '#10c18b' : '#fff',
    ':active': {
      backgroundColor: state.isSelected ? '#10c18b' : '#fff'
    }
  })
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
