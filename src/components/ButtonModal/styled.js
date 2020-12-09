import styled from 'styled-components'

// Start-Header
export const HeaderDevice = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h1``
export const ButtonClose = styled.button`
  cursor: pointer;
`
// End-Header
// Start-Button-Infromation
export const ButtonInfo = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color:#10C18b;
  color:#fff;
`
export const TextButton = styled.h3`
  margin-top: 10px;
  color: #10C18b;
`
export const ContentButtonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:10%;
`
// End-Button-Infromation

// Start-Button-Device
export const ButtonOpenDevice = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color:#10C18b;
  color: #fff;
  : hover {
    background-color: #00a472;
  }
`
export const ContentButtonDevice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`
// End-Button-Device

export const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.36)'
  },
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
export const ContentModal = styled.div``
