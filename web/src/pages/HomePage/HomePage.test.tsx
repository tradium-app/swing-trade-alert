import { render } from '@redwoodjs/testing'

import HomePage from '../HomePage2/HomePage'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
