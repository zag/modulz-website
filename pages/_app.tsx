import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Radix from '@modulz/radix';
import * as RadixIcons from '@modulz/radix-icons';
import { prismTheme } from '../prismTheme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAnalytics } from '../utils/analytics';
import { VideoPlayer } from '../components/VideoPlayer';

const GlobalStyles = createGlobalStyle`
  ${prismTheme};

	::selection {
		background-color: ${Radix.theme.colors.blue600};
		color: ${Radix.theme.colors.white};
	}
`;

function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <Radix.RadixProvider>
      <MDXProvider
        components={{
          ...Radix,
          ...RadixIcons,
          h1: props => <Radix.Heading size={5} mb={6} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: props => <Radix.Heading size={2} mt={6} mb={1} sx={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: props => <Radix.Heading size={1} mt={3} mb={1} sx={{ fontWeight: 500 }} {...props} as="h3" />,
          h4: props => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: props => (
            <Radix.Text size={3} mb={3} {...props} sx={{ lineHeight: 2, letterSpacing: 0, ...props.sx }} as="p" />
          ),
          a: ({ href = '', ...props }) => {
            if (href.startsWith('/')) {
              return (
                <NextLink href={href} passHref>
                  <Radix.Link {...props} />
                </NextLink>
              );
            }
            return <Radix.Link href={href} {...props} />;
          },
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
            <Radix.Box sx={{ overflow: 'auto' }}>
              <Radix.Table mt={0} mb={3} {...props} sx={{ minWidth: 600, ...props.sx }} />
            </Radix.Box>
          ),
          thead: Radix.Thead,
          tbody: Radix.Tbody,
          tfoot: Radix.Tfoot,
          tr: Radix.Tr,
          td: Radix.Td,
          th: Radix.Th,
          strong: props => <Radix.Text {...props} sx={{ ...props.sx, fontWeight: 500 }} />,
          img: ({ ...props }) => (
            <Radix.Box mx={[-5, -5, -7]} my={4}>
              <Radix.Image {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
            </Radix.Box>
          ),
          Image: ({ ...props }) => (
            <Radix.Box mx={[-5, -5, -7]} my={4}>
              <Radix.Image {...props} sx={{ maxWidth: '100%', verticalAlign: 'middle', ...props.sx }} />
            </Radix.Box>
          ),
          ProductImage: ({ ...props }) => (
            <Radix.Box mx={[-5, -5, -9]} my={4} p={[2, 5]} sx={{ bg: 'blue600' }}>
              <Radix.Image
                {...props}
                sx={{
                  maxWidth: '100%',
                  verticalAlign: 'middle',
                }}
              />
            </Radix.Box>
          ),
          blockquote: props => (
            <Radix.Box
              my={5}
              pl={6}
              sx={{ borderLeft: theme => `2px solid ${theme.colors.gray300}`, color: 'gray300' }}
              {...props}
            />
          ),
          Video: props => (
            <Radix.Box mx={[-5, -5, -7]} my={8}>
              <VideoPlayer {...props} />
            </Radix.Box>
          ),
          Icon: props => (
            <Radix.Box
              as="span"
              {...props}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bg: 'gray100',
                size: 5,
                mx: '3px',
                border: theme => `1px solid ${theme.colors.gray200}`,
                ...props.sx,
              }}
            />
          ),
        }}
      >
        <Head>
          <title>Modulz</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <GlobalStyles />

        <Header />

        <Component {...pageProps} />

        <Footer />
      </MDXProvider>
    </Radix.RadixProvider>
  );
}

export default App;
