import type { AppProps } from 'next/app'
import { TodoContextProvider } from './context/TodoContext'
 
export default function App({ Component, pageProps }: AppProps) {

  return (
    <TodoContextProvider>
        <Component {...pageProps} />
    </TodoContextProvider> 
  )

    
}