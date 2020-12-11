import styled from 'styled-components'

// Start-Header
export const HeaderDevice = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-size: 1.5rem;
`
export const ButtonClose = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
  color: #000;
`
// End-Header
// Start-Button-Infromation
export const ButtonAddInfo = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
`
export const TextButton = styled.h3`
  margin-top: 10px;
  color: #10c18b;
`
export const ContentButtonInfo = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// End-Button-Infromation

// Start-Button-Device
export const ButtonAddDevice = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  font-family: 'Signika', sans-serif;
  :hover {
    background-color: #00a472;
  }
`
export const ContentButtonDevice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
// End-Button-Device

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(128, 128, 128, 0.36)',
    zIndex: 100
  },
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderColor: 'black',
    width: '25%',
    height: '31%',
    fontSize: '30px',
    zIndex: 100,
    borderRadius: '10px',
    padding: '25px'
  }
}
// Start-Modal
