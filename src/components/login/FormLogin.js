import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import { login } from '../../services/userAPI'
const Container = styled.div`
    height: 500px;
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
    height: 100px;
    font-size: 2rem;
    color: #1E3859;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 0 10px;
    height: 30px;
    border-radius: 5px;
    border: none;
    border:solid 1px gray;
    outline: none;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Login = styled.button`
    height: 45px;
    width: 110px;
    background-color: #10c18b;
    margin: 30px;
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
    height: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    a {
    width: 100%;
    font-size: 16px;
    margin: 50px 0;
    }
`

const Register = styled.button`
    border-radius: 20px;
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

const TextError = styled.h2`
    color: red;
`

function FormLogin () {
  const history = useHistory()
  const { LoginState, Online } = React.useContext(UserContext)
  const [userLogin, setUserLogin] = LoginState
  const [setUserOnline] = Online
  React.useEffect(() => {
    localStorage.removeItem('error')
  }, [])
  const handleSubmit = () => {
    login(userLogin)
      .then(response => setUserOnline({ userId: response.user.id, token: response.access_token.token }))
      .then(() => history.push('/home'))
      .catch(() => localStorage.setItem('error', 'invalid username or password'))
  }
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <p>Username</p>
        <Input
          type='text'
          name='username'
          id='username'
          placeholder='e.g. JohnDoe'
          onChange={(e) => setUserLogin(userLogin, { username: e.target.value })}
        />
        <p>Password</p>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          onChange={(e) => setUserLogin(userLogin, { password: e.target.value })}
        />
        <TextError>{localStorage.getItem('error')}</TextError>
        <Submit>
          <Login type='submit' onClick={handleSubmit}>Login</Login>
          <Wrapper>Doesn't have an account? | <Register><Link to='/Register'>Register</Link></Register></Wrapper>
        </Submit>
      </Form>
    </Container>
  )
}

export default FormLogin
