import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: 3vw;
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
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function BackgroundBlock ({ src, height = 7, children }) {
  return (
    <div>
      <BackgroundImage src={src} height={height}>
        <BackgroundOverylay>{children}</BackgroundOverylay>
      </BackgroundImage>
    </div>
  )
}
export default BackgroundBlock
