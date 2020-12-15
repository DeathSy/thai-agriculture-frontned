import React from 'react'
import ReactDom from 'react-dom'
import Login from './pages/Login'
import { MemoryRouter } from 'react-router-dom'

test('calls onSubmit with the username and password when submitted', () => {
  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDom.render(
    <MemoryRouter>
      <Login onSubmit={handleSubmit} />
    </MemoryRouter>,
    container
  )

  const form = container.querySelector('form')
  const { username, password } = form.elements
  username.value = 'mewmew'
  password.value = '12345678'
})
