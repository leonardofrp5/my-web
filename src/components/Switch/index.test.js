import { render } from '@testing-library/react'

import Switch from './index'

describe('#Switch', () => {
  test('Check component Switch', () => {
    const { container } = render(<Switch onChange={() => jest.fn()} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
