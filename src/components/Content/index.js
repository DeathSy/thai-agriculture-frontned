import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonAddDevice from '../ButtonModal/ButtonDevice'
import AddInfo from '../ButtonModal/ButtonInfo'
import { fetchDataById } from '../../services/fetchData'

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
    font-size: 1.5rem;
    padding-bottom: 3rem;
  }
`
const AddDevice = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  border:2px solid black;
  margin-bottom:3rem;
  h2 {
    font-size: 1rem;
    font-weight: 550;
    padding-bottom: 1.5rem;
    margin-left: 2rem;
  }
`
const WrapperBox = styled.div`
  display: flex;
  width: 70vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Box = styled.div`
  flex : 1;
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
  const dogetoken = 'd3e0ba358160b45d3344cfffa1b014542Yd1NyQr5vwJQ6bHRNyVyvttYr0fib+qmNUSmNr/xzQ/wJJsvDAUzdUotmCZQZPA'
  const dogeID = '4fbe826e-1b5e-4367-b2f8-4b0b33e3eb18'
  const [dataDevice, setDataDevice] = useState()
  React.useEffect(() => {
    fetchDataById(dogetoken, dogeID).then(response => setDataDevice(response))
  }, [])
  console.log(dataDevice)
  return (
    <>
      <Container>
        <h1>WELLCOME</h1>
        <AddDevice>
          <h2>Device Name 1</h2>
          <WrapperBox>
            {dataDevice?.status}
            {dataDevice?.result.sensors.map((item) => <Box key={item._id}>vaule = {item.raw.value}</Box>)}
            <Close>
              <button type='button'>
                x
              </button>
            </Close>
            <AddInfo />
          </WrapperBox>
        </AddDevice>
        <ButtonAddDevice />
      </Container>
    </>
  )
}

export default Content
