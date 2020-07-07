import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global.styles'

import { ThemeManager, useTheme } from 'contexts/ThemeContext'

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme()
  console.log(theme)
  return (
    <ThemeManager>
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
      <ThemeProvider theme={{ mode: theme.mode }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeManager>
  )
}

export default App
