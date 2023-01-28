import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import {theme} from '../chakara/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}> 
  <Component {...pageProps} />
    </ChakraProvider>
}
