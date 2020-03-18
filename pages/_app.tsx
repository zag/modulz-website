import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Radix from '@modulz/radix';
import { prismTheme } from '../prismTheme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Create global CSS for syntax highlighting
export const GlobalStyles = createGlobalStyle`
  ${prismTheme};

	::selection {
		background-color: ${Radix.theme.colors.blue600};
		color: ${Radix.theme.colors.white};
	}
`;

const { RadixProvider, Box } = Radix;

// Track client-side page views with Segment
Router.events.on('routeChangeComplete', url => {
  // @ts-ignore
  window.analytics.page(url);
});

function App({ Component, pageProps }: AppProps) {
  return (
    <RadixProvider>
      <MDXProvider
        components={{
          ...Radix,
          h1: props => <Radix.Heading size={5} mb={6} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: props => <Radix.Heading size={2} mt={3} mb={1} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: props => <Radix.Heading size={1} mt={3} mb={1} sx={{ fontWeight: 500 }} {...props} as="h3" />,
          h4: props => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: props => (
            <Radix.Text size={3} mb={3} {...props} sx={{ lineHeight: 2, letterSpacing: 0, ...props.sx }} as="p" />
          ),
          a: Radix.Link,
          hr: props => <Radix.Divider size={1} my={6} mx="auto" {...props} />,
          inlineCode: Radix.Code,
          ul: props => <Radix.Box mb={3} {...props} as="ul" />,
          ol: props => <Radix.Box mb={3} {...props} as="ol" />,
          li: props => (
            <li>
              <Radix.Text size={3} {...props} sx={{ lineHeight: 2, letterSpacing: 0, ...props.sx }} />
            </li>
          ),
          table: props => (
            <Box sx={{ overflow: 'auto' }}>
              <Radix.Table mt={0} mb={3} {...props} sx={{ minWidth: 600, ...props.sx }} />
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
            <Box display="inline-block" mx={-7} my={3}>
              <img style={{ maxWidth: '100%', verticalAlign: 'middle' }} {...props} />
            </Box>
          ),
          blockquote: props => (
            <Box
              my={5}
              pl={6}
              sx={{ borderLeft: theme => `2px solid ${theme.colors.gray300}`, color: 'gray300' }}
              {...props}
            />
          ),
        }}
      >
        <Head>
          <title>Modulz</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://cdn.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
