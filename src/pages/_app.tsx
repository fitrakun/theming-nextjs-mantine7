// pages/_app.tsx
import '@mantine/core/styles.layer.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import LayoutDefault from '@/layout/LayoutDefault';
import mantineTheme from '@/mantine.theme';

const theme = createTheme(mantineTheme);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="noindex, nofollow" />
        <ColorSchemeScript />
      </Head>
      <MantineProvider theme={theme} defaultColorScheme="light" forceColorScheme="light">
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </MantineProvider>
    </>
  );
};

export default App;
