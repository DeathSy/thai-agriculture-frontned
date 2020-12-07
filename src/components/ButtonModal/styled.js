import styled from 'styled-components'

// Start-Header
export const HeaderDevice = styled.div`
display:flex;
justify-content:space-between;
`
export const Title = styled.h1`

`
export const ButtonClose = styled.button`
  
`
// End-Header
// Start-Button-Infromation
export const ButtonInfo = styled.button`
  width:40px;
  height:40px;
  font-size:20px;
  border-radius:50%;
  cursor: pointer;
  border: none;
`
export const TextButton = styled.h1`
margin-top:10px;

`
export const ContentButtonInfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
// End-Button-Infromation

// Start-Button-Device
export const ButtonOpenDevice = styled.button`
  width:200px;
  height:50px;
  font-size:20px;
  border-radius:50px;
  cursor: pointer;
  border: none;
`
export const ContentButtonDevice = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
// End-Button-Device

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#c5d9d6',
    borderColor: 'black',
    width: '30%',
    height: '30%',
    fontSize: '30px'
  }
}
// Start-Modal
export const ContentModal = styled.div`
`
