import { AppProps } from 'next/app';

import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../styles/theme/light';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> GoBlog </title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
