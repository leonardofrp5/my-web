import { render } from '@testing-library/react'

import Footer from './index'

describe('#Footer', () => {
  test('Check component Footer', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
