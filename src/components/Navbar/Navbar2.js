import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Imglogo from '../../assets/logo.png'

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
  background-color: #ffffff;
  z-index: 1000;
`
export const ActionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 2rem;
`

function Navbar2 () {
  return (
    <>
      <Wrapper>
        <Logo src={Imglogo} />
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
