import { reducer, actions, actionTypes } from './index'

describe('ProfileSidebar', () => {
  it('should export reducer', () => {
    expect(reducer).toBeDefined()
  })

  it('should export actions', () => {
    expect(actions).toBeDefined()
  })

  it('should export actionTypes', () => {
    expect(actionTypes).toBeDefined()
  })
})
