import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonAddDevice from '../ButtonModal/ButtonDevice'
import AddInfo from '../ButtonModal/ButtonInfo'

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  background-color: #fff;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    padding-bottom: 3rem;
    font-family: 'Cabin', sans-serif; 
    letter-spacing:10px;
  }
`
const AddDevice = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  border:4px solid black;
  margin-bottom:3rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 550;
    padding-bottom: 1.5rem;
    margin-left: 2rem;
  }
`
const WrapperBox = styled.div`
  width: 70vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Box = styled.div`
  width: 18vw;
  height: 20vh;
  border:4px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
  h1{
    letter-spacing:1px;
    display:flex;
    justify-content:center;
     
  }
  p{
    margin-top:-1rem;
    margin-left:0.5rem;
  }
`
const Close = styled.div`
  width: 98%;
  height: 25px;
  display:flex;
  justify-content:flex-end;
  padding-top:0.3rem;
`

function Content () {
  const [close, setClose] = useState(false)
  const handleClose = () => setClose(true)
  console.log(close)
  return (
    <>
      <Container>
        <h1>WELCOME</h1>
        <AddDevice>
          <h2>Device Name 1</h2>
          <WrapperBox>
            {close === (true)
              ? null
              : (
                <Box>
                  <Close>
                    <button onClick={handleClose} type='button'>
                      x
                    </button>
                  </Close>
                  <p>Temperature</p>
                  <h1>28 °C</h1>
                </Box>
                )}
            <AddInfo />
          </WrapperBox>
        </AddDevice>
        <ButtonAddDevice />
      </Container>
    </>
  )
}

export default Content
