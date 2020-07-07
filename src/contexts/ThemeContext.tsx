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

export const ThemeManager: React.FC = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: defaultMode
  })
  console.log(themeState)

  const toggle = (): void => {
    console.log('change theme')
    setThemeState({ mode: themeState.mode === 'light' ? `dark` : `light` })
  }

  return (
    <ManageThemeContext.Provider
      value={{
        mode: themeState.mode,
        toggle: toggle
      }}
    >
      {children}
    </ManageThemeContext.Provider>
  )
}
