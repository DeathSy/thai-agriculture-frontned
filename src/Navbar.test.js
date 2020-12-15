import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from './components/Navbar'

test('should render layout correcyly', () => {
  const { Wrapper } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  expect(Wrapper).toMatchSnapshot()
})
