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
  width: 100px;
  height: 100px;
  font-size: 50px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  font-family: 'Signika', sans-serif;
`
export const ContentButtonDevice = styled.div`
  /* display: flex;
  justify-content: flex-end;
  align-items: flex-end; */
  position: fixed;
  border-radius: 50px;
  z-index: 100;
  bottom: 0;
  right: 20px;
  margin: 0 2rem 2rem 0;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
  background-color: #10c18b;
  :hover {
    max-width: 300px;
    span {
      max-width: 300px;
      margin-left: 1.5rem;
    }
  }
  span {
    font-size: 30px;
    max-width: 0;
    display: inline-block;
    -webkit-transition: color .25s 1.5s, max-width 2s;
    transition: color .25s 1.5s, max-width 2s;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    color: white;
    margin-top: 1.7rem;
  }
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
    padding: '3vw 3vw 5vw 3vw'
  }
}
// Start-Modal
