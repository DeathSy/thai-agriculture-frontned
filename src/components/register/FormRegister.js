import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Container = styled.div`
  height: 600px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
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
  span {
    font-size: 12px;
    color: #f44336;
    margin-top: 0.25rem;
    margin-left: 0.5rem;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  font-size: 2rem;
  color: #1e3859;
`

const Input = styled.input`
  margin: 10px 0;
  padding: 5px 10px;
  height: 30px;
  border-radius: 5px;
  border: none;
  border: solid 1px gray;
  outline: none;
  border-radius: 50px;
  &:focus {
    border: 1px solid #0c1737;
  }
`

const Button = styled.button`
  height: 45px;
  width: 110px;
  background-color: #10c18b;
  margin-top: 10px;
  border: 0;
  color: white;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 50px;
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
  color: #10c18b;
  cursor: pointer;
  outline: none;
`

const Wrapper = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  display: flex;
`

function FormRegister () {
  const { register, handleSubmit, watch, errors } = useForm()
  // const password = useRef()
  // password.current = watch('password', '')
  const onSubmit = data => console.log(data)
  // console.log(watch('password'))

  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()}>
        <Title>Register</Title>
        <Label>
          <p>Username</p>
          {errors.username && <span>⚠ Username is required</span>}
        </Label>
        <Input
          type='text'
          name='username'
          id='username'
          placeholder='e.g.JohnDoe'
          ref={register({ required: true })}
        />

        <Label>
          <p>Email</p>
          {errors.email && errors.email?.type === 'required' && (
            <span>⚠ Email is required</span>
          )}
          {errors.email && errors.email?.type === 'pattern' && (
            <span>⚠ Not a valid Email</span>
          )}
        </Label>
        <Input
          type='text'
          name='email'
          id='email'
          placeholder='e.g. JohnDoe@example.com'
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />

        <Label>
          <p>Phone Number</p>
          {errors.email && errors.phoneNumber?.type === 'required' && (
            <span>⚠ Phone number is required</span>
          )}
          {errors.email && errors.phoneNumber?.type === 'pattern' && (
            <span>⚠ Phone number is not valid</span>
          )}
        </Label>
        <Input
          type='text'
          name='phoneNumber'
          id='phoneNumber'
          placeholder='e.g. 1234567890'
          ref={register({
            required: true,
            pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          })}
        />

        <Label>
          <p>Password</p>
          {errors.password && <span>⚠ Password is required</span>}
        </Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          ref={register({ required: true })}
        />

        <Label><p>Confirm Password</p>{errors.confirmPassword && <span>⚠ Passwords do not match</span>}</Label>
        <Input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          placeholder='Type your password again'
          ref={register({
            validate: value => {
              return value === watch('password')
            }
          })}
        />

        <Submit>
          <Button type='submit' onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
          <Wrapper>
            Already have an account? |{' '}
            <Register>
              <Link to='/Login'>Login</Link>
            </Register>
          </Wrapper>
        </Submit>
      </Form>
    </Container>
  )
}

export default FormRegister
