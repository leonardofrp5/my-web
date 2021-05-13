import { render } from '@testing-library/react'

import App from './App'

describe('#App', () => {
  test('Check component App', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
