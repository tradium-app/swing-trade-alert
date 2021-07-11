import { render } from '@redwoodjs/testing'

import HomePage from '../HomePage/HomePage'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
