import { render } from '@testing-library/react'

import Home from './index'

describe('#Home', () => {
  test('Check component Home', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
