import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;

  h1{
    font-weight:600;
    font-size:1.5rem;
    padding-bottom:3rem;
  }
`
const AddDevice = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: yellowgreen;
  border-radius: 10px;
  padding-top:1.5rem;
  padding-left:1.5rem;

  h2{
    font-size:1rem;
    font-weight:550;
    padding-bottom:1.5rem;
    margin-left:2rem;
  }
`
const Box = styled.div`
  width: 18vw;
  height: 20vh;
  background-color: blue;
  border-radius: 10px;
  margin-bottom:1.5rem;
  margin-left:2rem;
  margin-right:1.5rem;
`

const WrapperBox = styled.div`
width: 70vw;
height: auto;
display:flex;
flex-direction:row;
align-items:center;


`

function Contenst () {
  return (
    <div>
      <Container>
        <h1>WELLCOME</h1>
        <AddDevice>
          <h2>Device Name 1</h2>
          <WrapperBox>
          <Box />
          <Box />
          <Box />
          </WrapperBox>
        </AddDevice>
      </Container>
    </div>
  )
}

export default Contenst
