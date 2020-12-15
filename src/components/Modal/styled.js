import styled from 'styled-components'

// Start-Content
export const ContentDevice = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`
export const ContainerDevice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: 'Cabin', sans-serif;
`
export const TextTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 20px;
`
export const InputDevice = styled.input`
  width: 93%;
  height: 25px;
  margin: 5px 0px 10px 0;
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
  border-radius: 20px;
  width: 25%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 1rem;
  border: solid 1px;
  padding-left: 10px;
`
export const ContentInfo = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  font-family: 'Cabin', sans-serif;
`
export const ContentSelect = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-bottom: 1rem;
`
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#10c18b' : state.isSelected ? 'grey' : null,
    padding: 15,
    fontSize: '1rem',
    backgroundColor: state.isDisabled ? '#fff' : '#fff',
    ':active': {
      backgroundColor: state.isSelected ? '#fff' : '#f9f9f9'
    },
    container: base => ({
      ...base,
      backgroundColor: '#10c18b',
      padding: 1
    })
  }),
  container: base => ({
    ...base,
    display: 'inline-block',
    width: '14vw'
  }),
  valueContainer: base => ({
    ...base,
    minHeight: '2vw'
  })
}

// End-Content

// Start-Footer
export const FooterDevice = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
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
