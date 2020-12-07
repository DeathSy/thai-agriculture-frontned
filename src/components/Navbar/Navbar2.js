import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Imglogo from '../../assets/logo.png'

export const Action = styled.div`
padding:.7rem 4rem;
margin:0 .5rem;
:hover {
  background-color: #00a472;
  border-radius: 60px;
};
`
export const Logo = styled.div`
padding:40px;
background-color: #e0e0e0;
margin:.5rem;
`

export const Wrapper = styled.div`
display: flex;
flex: 1;
align-items: center;
width: 100%;
position: fixed;
background-color: #ffffff;
z-index:1000;
`
export const ActionContainer = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
align-items: center;
margin:0 2rem;
`

function Navbar () {
  return (
    <>
    <Wrapper>
<<<<<<< HEAD
      <Logo src={Imglogo}/>
=======
      <Logo src={logoImage}/>
>>>>>>> ab46ee62d0f7b28802a9442f1dc967cad6373641
      <ActionContainer>
        <Action>
          <>Add Device</>
        </Action>
        <Action>
          <>Logout</>
        </Action>
      </ActionContainer>
    </Wrapper>
    </>
  )
}

export default Navbar2
