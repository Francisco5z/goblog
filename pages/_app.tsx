import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../styles/theme/light';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
