import { ThemeProvider } from 'next-themes'
import '../styles/index.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
