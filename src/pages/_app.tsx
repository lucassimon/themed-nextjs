import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global.styles'

import { ManageThemeContext } from 'contexts/ThemeContext'
const defaultMode = 'dark'

function App({ Component, pageProps }: AppProps) {
  const [themeState, setThemeState] = useState({
    mode: defaultMode
  })

  const toggle = (): void =>
    setThemeState({ mode: themeState.mode === 'light' ? `dark` : `light` })

  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <ManageThemeContext.Provider
        value={{
          mode: themeState.mode,
          toggle: toggle
        }}
      >
        <ThemeProvider theme={{ mode: themeState.mode }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ManageThemeContext.Provider>
    </>
  )
}

export default App
