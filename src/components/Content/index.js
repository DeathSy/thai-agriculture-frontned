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
  background-color: blue;

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    padding-bottom: 3rem;
  }
`
const AddDevice = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: yellowgreen;
  border-radius: 10px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;

  h2 {
    font-size: 1rem;
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
  background-color: blue;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
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
        <h1>WELLCOME</h1>
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
