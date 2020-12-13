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
  /* display: flex;
  justify-content: flex-end;
  align-items: flex-end; */
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 20px;
  margin-bottom: 5rem;
`
// End-Button-Device

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    overflow: 'fixed',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderColor: 'black',
    width: '30%',
    height: '32%',
    fontSize: '30px',
    zIndex: 200,
    borderRadius: '10px',
    padding: '5vh 5vh 10vh 5vh'
  }
}
// Start-Modal
