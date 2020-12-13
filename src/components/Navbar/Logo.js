import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: 50px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 11;
  margin-top: 0.5rem;
  margin-bottom:0.5rem;
  margin-left: 1rem;
`
function BackgroundBlock ({ src, height = 7, children }) {
  return (
    <BackgroundImage src={src} height={height}>
      {children}
    </BackgroundImage>
  )
}
export default BackgroundBlock
