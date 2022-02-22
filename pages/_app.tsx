import Head from "next/head";
import type {AppProps} from "next/app";
import { ChakraProvider } from '@chakra-ui/react'


function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <html lang="en"/>
            <Head>
            <meta charSet="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="DIGITAL, DESIGN, BASEMENT"/>
            <meta property="og:description" content="A digital studio - making cool shit that performs"/>
            <meta property="og:title" content="Basement Studio" />
            <meta property="og:image" content="/images/OG.png" />
            <meta property="og:url" content="https://basement.studio/" />
                <title>Basement Supply</title>
                <link rel="icon" type="image/x-icon" href="/images/Favicon.png"></link>
            </Head>
                <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default App;