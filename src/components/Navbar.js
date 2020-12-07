import React from 'react'
import styled from 'styled-components'
import logoImage from '../assets/logo.png'

export const Action = styled.div`
padding:.7rem 4rem;
margin:0 .5rem;
:hover {
  background-color: #ddd;
  border-radius: 60px;
};
`
export const Logo = styled.div`
padding:40px;
background-color:red;
margin:.5rem;
`

export const Wrapper = styled.div`
display: flex;
flex: 1;
align-items: center;
width: 100%;
position: fixed;
background-color:green;
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
      <Logo src={logoImage}/>
      <ActionContainer>
        <Action>
          <>Login</>
        </Action>
        <Action>
          <>Register</>
        </Action>
      </ActionContainer>
    </Wrapper>
    </>
  )
}

export default Navbar
