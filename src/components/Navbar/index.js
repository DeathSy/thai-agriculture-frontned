import React from 'react'
import { Action, Wrapper, ActionContainer } from './styled'
import Logo from './Logo'
import Imglogo from '../../assets/field.png'
import useScroll from '../../util/useScroll'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../services/userAPI'

function Navbar () {
  const history = useHistory()
  const handleClickOut = () => {
    logout(localStorage.getItem('token')).then(() => localStorage.removeItem('token')).then(() => history.push('/'))
  }
  const isScroll = useScroll({ scrollRange: 20 })
  if (!localStorage.getItem('token')) {
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
          <Action onClick={handleClickOut}>Logout</Action>
        </ActionContainer>
      </Wrapper>
    )
  }
}

export default Navbar
