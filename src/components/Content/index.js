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
const Close = styled.div``
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
// const Edit = styled.div`
//   width: 98%;
//   height: 25px;
//   display: flex;
//   justify-content: flex-end;
//   padding-top: 0.3rem;
// `
// const ButtonWrapper = styled.div`
//   margin-bottom: 5rem;
// `

function Content () {
  const [dataDevice, setDataDevice] = useState()
  const [setCount] = useState(0)
  React.useEffect(() => {
    fetchDataById(localStorage.getItem('token'), localStorage.getItem('userId')).then(response => setDataDevice(response.device))
    setTimeout(() => {
      setCount(1)
    }, 300000)
  }, [])
  return (
    <>
      <Container>
        <h1>WELCOME</h1>
        <WrapperBox>
          {dataDevice?.map(itemDevice =>
            <AddDevice key={itemDevice.device_id}>
              {itemDevice.forEach((items, key) => (
                <Box>
                  <Close>
                    <Editbutton src={Img} />
                  </Close>
                  {key}:{items}
                </Box>
              ))}
            </AddDevice>)}
          <AddInfo />
        </WrapperBox>
        <ButtonAddDevice />
      </Container>
    </>
  )
}
export default Content
