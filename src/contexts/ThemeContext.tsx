/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

const defaultMode = 'dark'

export interface ThemeContext {
  mode: string
  toggle(): void
}

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext(
  {
    mode: defaultMode,
    toggle: () => {}
  }
)

export const useTheme = () => React.useContext(ManageThemeContext)
