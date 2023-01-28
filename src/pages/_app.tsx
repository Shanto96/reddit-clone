import * as React from 'react'
import {  ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import {theme} from '../chakara/theme'
import Layout from '../Components/Layouts/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Layout >
    <Component {...pageProps} />
      </Layout> 
  
    </ChakraProvider>
}
