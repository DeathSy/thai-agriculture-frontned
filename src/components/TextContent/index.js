import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 45vw;
  height: 40vh;
  display: flex;
  jutify-content: center;
  align-items: center;
  margin-left: 3rem;
  flex-direction: column;
  margin-top: 8rem;
`
const Text = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 3rem;
  font-family: 'Nerko One', cursive;

  h1 {
    font-size: 5rem;
    font-weight: 550;
  }
  p {
    font-size: 1.4rem;
    margin-top: 2rem;
    color: #383838;
  }
`
export const Action = styled.div`
  width: 200px;
  height: 60px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #10c18b;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #00a472;
  }
`

function TextContent () {
  return (
    <Container>
      <Text>
        <h1>AGROGREEN</h1>
        <p>
          Let your agro green Grow more and better with less time on your farm
        </p>
      </Text>
      <Action>
        <Link to='/Register'>Register</Link>
      </Action>
    </Container>
  )
}

export default TextContent
