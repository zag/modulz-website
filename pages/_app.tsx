import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Radix from '@modulz/radix';
import { prismTheme } from '../prismTheme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Create global CSS for syntax highlighting
export const GlobalStyles = createGlobalStyle`
  ${prismTheme};
`;

const { RadixProvider, Box } = Radix;

function App({ Component, pageProps }: AppProps) {
  return (
    <RadixProvider>
      <MDXProvider
        components={{
          ...Radix,
          h1: props => <Radix.Heading size={5} mb={6} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: props => <Radix.Heading size={4} my={6} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: props => <Radix.Heading size={3} my={6} sx={{ fontWeight: 500 }} {...props} as="h3" />,
          h4: props => <Radix.Heading size={3} {...props} as="h4" />,
          p: props => <Radix.Text size={4} mb={6} {...props} sx={{ lineHeight: 3, ...props.sx }} as="p" />,
          a: Radix.Link,
          hr: props => <Radix.Divider size={2} my={8} mx="auto" {...props} />,
          inlineCode: Radix.Code,
          li: props => (
            <li>
              <Radix.Text size={4} {...props} sx={{ lineHeight: 3, ...props.sx }} />
            </li>
          ),
          table: props => (
            <Box sx={{ overflow: 'auto' }}>
              <Radix.Table mt={6} mb={7} {...props} sx={{ minWidth: 600, ...props.sx }} />
            </Box>
          ),
          thead: Radix.Thead,
          tbody: Radix.Tbody,
          tfoot: Radix.Tfoot,
          tr: Radix.Tr,
          td: Radix.Td,
          th: Radix.Th,
          strong: props => <Radix.Text {...props} sx={{ ...props.sx, fontWeight: 500 }} />,
          img: ({ ...props }) => (
            <Box display="inline-block" my={6}>
              <img style={{ maxWidth: '100%', verticalAlign: 'middle' }} {...props} />
            </Box>
          ),
          blockquote: props => (
            <Box my={6} pl={4} sx={{ borderLeft: theme => `2px solid ${theme.colors.blue600}` }} {...props} />
          ),
        }}
      >
        <Head>
          <title>Modulz</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://cdn.modulz.app/fonts/fonts.css" />
        </Head>

        <GlobalStyles />

        <Header />

        <Component {...pageProps} />

        <Footer />
      </MDXProvider>
    </RadixProvider>
  );
}

export default App;
