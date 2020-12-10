import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
left: 0;
bottom: 0;
width: 100%;
height: 20%;
background-color: #e0e0e0;
text-align:center;
color:black;
`
function Footer () {
  return (
    <Wrapper>
      Copyrights © AgroGreen 2020. All rights reserved.
    </Wrapper>
  )
}

export default Footer
