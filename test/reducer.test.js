import deepFreeze from 'deep-freeze'
import reducer from './reducer'

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = []
    const action = {
      type: 'INIT',
    }
    deepFreeze(action)
    expect(reducer(undefined, action)).toEqual(stateAfter)
  })
})
