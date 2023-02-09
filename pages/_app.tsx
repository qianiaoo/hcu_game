import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return ( <ChakraProvider>
      <Head>
          <title>HCU平凡な大学生の日常</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
