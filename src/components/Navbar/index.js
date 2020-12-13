import React from 'react'
import { Action, Wrapper, ActionContainer } from './styled'
import Logo from './Logo'
import Imglogo from '../../assets/field.png'
import useScroll from '../../util/useScroll'
import { Link } from 'react-router-dom'

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
          <Action>Logout</Action>
        </ActionContainer>
      </Wrapper>
    )
  }
}

export default Navbar
