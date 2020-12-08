import { render } from '@testing-library/react';
import { Route } from './App';

it('render routes', () => {
  const {queryByTestId} = render(<Route/>)

  expect(queryByTestId('routes')).toBeTruthy()
});
