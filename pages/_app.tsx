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
          h1: props => <Radix.Heading size={5} mb={4} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: props => <Radix.Heading size={4} my={4} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: props => <Radix.Heading size={3} my={4} sx={{ fontWeight: 500 }} {...props} as="h3" />,
          h4: props => <Radix.Heading size={3} {...props} as="h4" />,
          p: props => <Radix.Text size={3} mb={4} {...props} as="p" />,
          li: props => (
            <li>
              <Radix.Text size={3} {...props} />
            </li>
          ),
          table: props => <Radix.Table my={4} {...props} />,
          thead: Radix.Thead,
          tbody: Radix.Tbody,
          tfoot: Radix.Tfoot,
          tr: Radix.Tr,
          td: Radix.Td,
          th: Radix.Th,
          inlineCode: props => <Radix.Code {...props} />,
          img: ({ ...props }) => (
            <Box display="inline-block" my={4}>
              <img style={{ maxWidth: '100%', verticalAlign: 'middle' }} {...props} />
            </Box>
          ),
          blockquote: props => (
            <Box my={4} pl={4} sx={{ borderLeft: theme => `2px solid ${theme.colors.blue600}` }} {...props} />
          ),
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
