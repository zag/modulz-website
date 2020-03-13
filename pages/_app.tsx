import { AppProps } from 'next/app';
import Head from 'next/head';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Radix from '@modulz/radix';
import { Logo } from '../components/Logo';
import { prismTheme } from '../prismTheme';

// Create global CSS for syntax highlighting
export const PrismTheme = createGlobalStyle`
  ${prismTheme}
`;

const { RadixProvider, Box, Link } = Radix;

function App({ Component, pageProps }: AppProps) {
  return (
    <RadixProvider>
      <MDXProvider
        components={{
          ...Radix,
          h1: props => <Radix.Heading size={4} sx={{ fontWeight: 500 }} {...props} />,
          h2: props => <Radix.Heading size={4} sx={{ fontWeight: 500 }} {...props} />,
          h3: props => <Radix.Heading size={3} sx={{ fontWeight: 500 }} {...props} />,
          p: props => <Radix.Text size={3} {...props} />,
          inlineCode: props => <Radix.Code {...props} />,
        }}
      >
        <Head>
          <title>Modulz Learn</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://cdn.modulz.app/fonts/fonts.css" />
        </Head>

        <PrismTheme />

        <Box p={4}>
          <NextLink href="/">
            <Link sx={{ color: 'inherit' }}>
              <Logo />
            </Link>
          </NextLink>
        </Box>

        <Component {...pageProps} />
      </MDXProvider>
    </RadixProvider>
  );
}

export default App;
