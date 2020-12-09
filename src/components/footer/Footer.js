import React from 'react'
import styled from 'styled-components'


const Footer = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: #e0e0e0;
text-align:center;
color:black;
`
function Footer (){
  return(
    <Footer>
      Copyrights © AgroGreen 2020. All rights reserved.
    </Footer>
  )
}