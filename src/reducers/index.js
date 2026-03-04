import {
  RENAME_THEME,
  SWITCH_BASE_THEME_LIGHT,
  SWITCH_BASE_THEME_DARK,
  UPDATE_BG_COLOR,
  UPDATE_SYNTAX_COLOR
} from '../constants/ActionTypes'

import _darkThemeTemplate from '../api/darkThemeTemplate.json'
import _lightThemeTemplate from '../api/lightThemeTemplate.json'

const cloneTheme = theme => JSON.parse(JSON.stringify(theme))

const initialState = {
  themeName: '',
  baseThemeName: 'light',
  baseTheme: cloneTheme(_lightThemeTemplate),
  bgColor: '#FBFAF9'
}

const themeApp = (state = initialState, action) => {
  switch (action.type) {
    case RENAME_THEME:
      return {
        ...state,
        themeName: action.themeName
      }
    case SWITCH_BASE_THEME_LIGHT:
      return {
        ...state,
        baseThemeName: 'light',
        bgColor: '#FBFAF9',
        baseTheme: cloneTheme(_lightThemeTemplate)
      }
      
    case SWITCH_BASE_THEME_DARK:
      return {
        ...state,
        baseThemeName: 'dark',
        bgColor: '#3D2C40',
        baseTheme: cloneTheme(_darkThemeTemplate)
      }
    case UPDATE_BG_COLOR:
      return {
        ...state,
        bgColor: action.bgColor
      }
     
    case UPDATE_SYNTAX_COLOR:
      const index = state.baseTheme.themeSyntax.findIndex(i => i.label === action.label)
      if (index === -1) {
        return state
      }
      const updatedSyntaxItem = {
        ...state.baseTheme.themeSyntax[index],
        value: action.value
      }

      return {
        ...state,
        baseTheme: {
          ...state.baseTheme,
          themeSyntax: [
             ...state.baseTheme.themeSyntax.slice(0, index),
             updatedSyntaxItem,
             ...state.baseTheme.themeSyntax.slice(index + 1)
          ]
        }
      }
    default:
      return state
  }
}

export default themeApp