import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
