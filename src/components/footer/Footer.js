import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: #e0e0e0;
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
function Footer () {
  return <Wrapper>Copyrights © AgroGreen 2020. All rights reserved.</Wrapper>
}

export default Footer
