import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Imglogo from '../../assets/logo.png'
import useScroll from '../../util/useScroll'
import { Link } from 'react-router-dom'
import ButtonAddDevice from '../ButtonModal/ButtonDevice'

export const Action = styled.div`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:1rem;
  :hover {
    background-color: #00a472;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  background-color:#FFFF;
  position:fixed;
  color: #fff;
  box-shadow:4px 4px 8px 5px #ccc;
`

export const ActionContainer = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 2rem;
`

function Navbar () {
  const isScroll = useScroll({ scrollRange: 20 })
  const i = 0
  if (i === 1) {
    return (
      <Wrapper isScroll={isScroll}>
        <Logo src={Imglogo} />
        <ActionContainer>
          <Action>
            <Link to='/Login'>Login</Link>
          </Action>
          <Action>
            <Link to='/Register'>Register</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper isScroll={isScroll}>
        <Logo src={Imglogo} />
        <ActionContainer>
          <ButtonAddDevice />
          <Action>Logout</Action>
        </ActionContainer>
      </Wrapper>
    )
  }
}

export default Navbar
