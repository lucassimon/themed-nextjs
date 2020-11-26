import theme from 'styled-theming'

export const backgroundColor: theme.ThemeSet = theme('mode', {
  light: '#fafafa',
  dark: '#0e0f11'
})

export const textColor: theme.ThemeSet = theme('mode', {
  light: '#000',
  dark: '#fafafa'
})

export const buttonBackgroundColor: theme.ThemeSet = theme('mode', {
  light: '#222',
  dark: '#eee'
})

export const buttonTextColor: theme.ThemeSet = theme('mode', {
  light: '#eee',
  dark: '#222'
})
