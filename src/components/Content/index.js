import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonAddDevice from '../ButtonModal/ButtonDevice'
import AddInfo from '../ButtonModal/ButtonInfo'
import { fetchDataById } from '../../services/fetchData'
import Editbutton from './Editbutton'
import Img from '../../assets/edit.png'

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    padding: 0 0 3rem 0;
    font-family: 'Cabin', sans-serif;
    letter-spacing: 10px;
  }
`
const AddDevice = styled.div`
  width: 70vw;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  background-color: #fff;
  margin-bottom: 3rem;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.5rem;
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
  display: inline-block;
`
const Box = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
  h1 {
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
  }
  p {
    margin-top: -1rem;
    margin-left: 0.5rem;
  }
`
const Edit = styled.div`
  width: 98%;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  padding-top: 0.3rem;
`
const ButtonWrapper = styled.div`
  margin-bottom: 5rem;
`

function Content () {
  const dogetoken = 'd3e0ba358160b45d3344cfffa1b014542Yd1NyQr5vwJQ6bHRNyVyvttYr0fib+qmNUSmNr/xzQ/wJJsvDAUzdUotmCZQZPA'
  const [dataDevice, setDataDevice] = useState()
  React.useEffect(() => {
    fetchDataById(dogetoken).then(response => setDataDevice(response))
  }, [])
  console.log(dataDevice)
  return (
    <>
      <Container>
        <h1>WELCOME</h1>
        <AddDevice>
          <h2>Device Name 1</h2>
          <WrapperBox>
            <Box>
              <Edit>
                <Link to='/'>
                  <Editbutton src={Img} />
                </Link>
              </Edit>
              <p>Temperature</p>
              <h1>28 °C</h1>
            </Box>
            <Box>
              <Edit>
                <Link to='/'>
                  <Editbutton src={Img} />
                </Link>
              </Edit>
              <p>Temperature</p>
              <h1>28 °C</h1>
            </Box>
            <Box>
              <Edit>
                <Link to='/'>
                  <Editbutton src={Img} />
                </Link>
              </Edit>
              <p>Temperature</p>
              <h1>28 °C</h1>
            </Box>
            <Box>
              <Edit>
                <Link to='/'>
                  <Editbutton src={Img} />
                </Link>
              </Edit>
              <p>Temperature</p>
              <h1>28 °C</h1>
            </Box>
            <AddInfo />
          </WrapperBox>
        </AddDevice>
        <ButtonWrapper>
          <ButtonAddDevice />
        </ButtonWrapper>
      </Container>
    </>)
}
export default Content