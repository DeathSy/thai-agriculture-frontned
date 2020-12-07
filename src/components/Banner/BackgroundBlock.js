import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: 100vw;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
 
  position: relative;
  z-index:11;
`
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function BackgroundBlock ({ src, height = 40, children }) {
  return (
    <div>
      <BackgroundImage src={src} height={height}>
        <BackgroundOverylay>{children}</BackgroundOverylay>
      </BackgroundImage>
    </div>
  )
}
export default BackgroundBlock
