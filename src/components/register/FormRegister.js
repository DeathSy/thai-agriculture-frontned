import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 600px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    a {
        margin-top: 5px;
        font-size: 16px;
    }
`

const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 2rem;
    color: #1E3859;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 5px 10px;
    height: 30px;
    border-radius: 5px;
    border: none;
    border:solid 1px gray;
    outline: none;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Button = styled.button`
    height: 45px;
    width: 110px;
    background-color: #10c18b ;
    margin-top: 10px;
    border: 0;
    color: white;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: #00a472;
    }
`

const Submit = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    a {
    width: 100%;
    font-size: 16px;
    margin: 20px 0;
    }
`

const Register = styled.button`
    border: none;
    background-color: unset;
    font-size: 16px;
    color: #10c18b ;
    cursor: pointer;
    outline: none;
`

const Wrapper = styled.div`
    margin-bottom: 20px;
`

function FormRegister (callback) {
  return (
    <Container>
      <Form>
        <Title>Register</Title>
        <p>Username</p>
        <Input
          type='text'
          name='username'
          id='username'
          placeholder='e.g.JohnDoe'
        />

        <p>Email</p>
        <Input
          type='text'
          name='email'
          id='email'
          placeholder='e.g. JohnDoe@example.com'
        />

        <p>Phone Number</p>
        <Input
          type='text'
          name='phone_number'
          id='phone_number'
          placeholder='e.g. 1234567890'
        />

        <p>Password</p>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        {/* requires at least 8 digits */}

        <p>Confirm Password</p>
        <Input
          type='password'
          name='comfirmPassword'
          id='comfirmPassword'
          placeholder='Type your password again'
        />
        <Submit>
          <Button type='submit'>Submit</Button>
          <Wrapper>Already have an account? | <Register><Link to='/Login'>Login</Link></Register></Wrapper>
        </Submit>
      </Form>
    </Container>
  )
}

export default FormRegister
