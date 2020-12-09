import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Imglogo from '../../assets/logo.png'
import useScroll from '../../util/useScroll'
import { Link } from 'react-router-dom'

export const Action = styled.div`
  padding: 0.7rem 4rem;
  margin: 0 0.5rem;
  :hover {
    background-color: #00a472;
    border-radius: 60px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5;
`

export const ActionContainer = styled.div`
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
        <Link to='/Home'>
          <Logo src={Imglogo} />
        </Link>
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
        <Link to='/Home'>
          <Logo src={Imglogo} />
        </Link>
        <ActionContainer>
          <Action>
            <>Add Device</>
          </Action>
          <Action>
            <>Logout</>
          </Action>
        </ActionContainer>
      </Wrapper>
    )
  }
}

export default Navbar
