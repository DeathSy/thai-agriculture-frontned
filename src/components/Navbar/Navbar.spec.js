import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '.'

test('should render layout correcyly', () => {
  const { Wrapper } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  expect(Wrapper).toMatchSnapshot()
})

test('should have link navigate to login', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  expect(getByText(/login/gi)).toBeInTheDocument()
  expect(getByText(/login/gi).closest('a')).toHaveAttribute('href', '/login')
})

test('should have link navigate to register', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  expect(getByText(/register/gi)).toBeInTheDocument()
  expect(getByText(/register/gi).closest('a')).toHaveAttribute('href', '/register')
})