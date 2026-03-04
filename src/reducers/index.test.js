import reducer from './index'
import {
  SWITCH_BASE_THEME_DARK,
  SWITCH_BASE_THEME_LIGHT,
  UPDATE_SYNTAX_COLOR
} from '../constants/ActionTypes'

const getSyntaxValue = (state, label) =>
  state.baseTheme.themeSyntax.find(item => item.label === label).value

describe('theme reducer', () => {
  test('switching themes restores light defaults after syntax edits', () => {
    const initialState = reducer(undefined, { type: '@@INIT' })
    const defaultKeyword = getSyntaxValue(initialState, 'Keyword')

    const editedState = reducer(initialState, {
      type: UPDATE_SYNTAX_COLOR,
      label: 'Keyword',
      value: '#111111'
    })
    expect(getSyntaxValue(editedState, 'Keyword')).toBe('#111111')

    const darkState = reducer(editedState, { type: SWITCH_BASE_THEME_DARK })
    const lightState = reducer(darkState, { type: SWITCH_BASE_THEME_LIGHT })

    expect(getSyntaxValue(lightState, 'Keyword')).toBe(defaultKeyword)
  })

  test('updating syntax color does not mutate previous state', () => {
    const initialState = reducer(undefined, { type: '@@INIT' })
    const defaultKeyword = getSyntaxValue(initialState, 'Keyword')

    const nextState = reducer(initialState, {
      type: UPDATE_SYNTAX_COLOR,
      label: 'Keyword',
      value: '#222222'
    })

    expect(getSyntaxValue(initialState, 'Keyword')).toBe(defaultKeyword)
    expect(getSyntaxValue(nextState, 'Keyword')).toBe('#222222')
  })
})
