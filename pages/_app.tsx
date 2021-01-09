import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Radix from '@modulz/design-system';
import * as RadixIcons from '@modulz/radix-icons';
import { prismTheme } from '../prismTheme';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAnalytics } from '../utils/analytics';
import { VideoPlayer } from '../components/VideoPlayer';
import { useRouter } from 'next/router';

const GlobalStyles = createGlobalStyle`
  ${prismTheme};

	*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: var(--colors-loContrast);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  font-family: var(--fonts-untitled);
}
h1, h2, h3, h4, h5, strong {
  font-weight: 500;
}
svg {
  display: block;
  vertical-align: middle;
}
#__next {
  position: relative;
  z-index: 0;
}
img {
  vertical-align: middle;
  max-width: 100%;
}
pre {
  margin: 0;
  font-family: var(--fonts-mono);
  all: unset;
}
::selection {
  background-color: var(--colors-blue500);
}
`;

function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  const router = useRouter();

  const isDemoPage = router.pathname.includes('/demo/');
  const isDarkMode = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <Radix.Box>
      {/* <MDXProvider
        components={{
          ...Radix,
          ...RadixIcons,
          h1: (props) => <Radix.Heading size={5} mb={8} css={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: (props) => <Radix.Heading size={2} mt={6} mb={2} css={{ fontWeight: 500 }} {...props} as="h2" />,
          h3: (props) => (
            <Radix.Heading mt={6} mb={1} css={{ fontWeight: 500, fontSize: 4, lineHeight: '27px' }} {...props} as="h3" />
          ),
          h4: (props) => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: (props) => (
            <Radix.Text size={4} mb={3} {...props} css={{ lineHeight: '27px', letterSpacing: 0, ...props.css }} as="p" />
          ),
          a: ({ href = '', ...props }) => {
            if (href.startsWith('/')) {
              return (
                <NextLink href={href} passHref>
                  <Radix.Link {...props} />
                </NextLink>
              );
            }
            return <Radix.Link href={href} {...props} target="_blank" rel="noopener" />;
          },
          hr: (props) => <Radix.Separator size={2} my={6} mx="auto" {...props} />,
          inlineCode: (props) => <Radix.Code variant="fade" {...props} />,
          ul: (props) => <Radix.Box mb={3} {...props} as="ul" />,
          ol: (props) => <Radix.Box mb={3} {...props} as="ol" />,
          li: (props) => (
            <li>
              <Radix.Text size={4} {...props} css={{ lineHeight: '27px', letterSpacing: 0, ...props.css }} />
            </li>
          ),
          table: (props) => (
            <Radix.Box css={{ overflow: 'auto' }}>
              <Radix.Box mt={0} mb={3} {...props} css={{ minWidth: 600, ...props.css }} />
            </Radix.Box>
          ),
          thead: Radix.Box,
          tbody: Radix.Box,
          tfoot: Radix.Box,
          tr: Radix.Box,
          td: Radix.Box,
          th: Radix.Box,
          strong: (props) => <Radix.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />,
          img: ({ ...props }) => (
            <Radix.Box>
              <Radix.Image alt="" {...props} css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }} />
            </Radix.Box>
          ),
          Image: ({ ...props }) => (
            <Radix.Image alt="" {...props} css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }} />
          ),
          ProductImage: ({ children, ...props }) => (
            <Radix.Box as="figure">
              <Radix.Box
                css={{
                  border: `1px solid gray`,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Radix.Image
                  {...props}
                  css={{
                    maxWidth: '100%',
                    verticalAlign: 'middle',
                  }}
                  alt={children}
                />
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size="3"
                css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          blockquote: (props) => (
            <Radix.Box
              css={{ borderLeft: `2px solid gray`, color: 'gray300' }}
              {...props}
            />
          ),
          Video: ({ small, id, poster, children, ...props }) => (
            <Radix.Box as="figure">
              <Radix.Box
                {...props}
                css={{
                  border: `1px solid gray`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  ...props.css,
                }}
              >
                <VideoPlayer id={id} poster={poster} />
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size="3"
                css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          ProductVideo: ({ small, large, src, children = '', muted = true, autoPlay = true, controls, ...props }) => (
            <Radix.Box as="figure">
              <Radix.Box
                {...props}
                css={{
                  boxShadow: `0 0 0 1px gray`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  ...props.css,
                }}
              >
                <video
                  src={src}
                  autoPlay={autoPlay}
                  playsInline
                  muted={muted}
                  controls={controls}
                  loop
                  style={{ width: '100%', display: 'block' }}
                ></video>
              </Radix.Box>
              <Radix.Text
                as="figcaption"
                size="3"
                css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}
              >
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          VideoPlayer: (props) => <VideoPlayer {...props} />,
          Icon: (props) => (
            <Radix.Box
              as="span"
              {...props}
              css={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bg: 'gray100',
                size: 5,
                mx: '3px',
                border: `1px solid gray`,
                ...props.css,
              }}
            />
          ),
          Demo: (props) => (
            <Radix.Box css={{ display: 'block' }}>
              <Radix.Separator size="2" {...props} />
              <Radix.Heading css={{ fontWeight: 500, fontSize: 4, lineHeight: '27px' }} {...props} as="h3">
                One last thing
              </Radix.Heading>

              <Radix.Text size="4" {...props} css={{ lineHeight: '27px', letterSpacing: 0, ...props.css }} as="p">
                Here's a live playground. The example used here is from{' '}
                <Radix.Link href="https://radix.modulz.app" target="_blank" rel="noopener">
                  Radix
                </Radix.Link>
                , our very own design system.
              </Radix.Text>

              <Radix.Box
                css={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: `0 0 0 1px gray`,
                }}
              >
                <Radix.Box>
                  <iframe
                    src={`/demo/${props.component}`}
                    style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
                  ></iframe>
                </Radix.Box>
              </Radix.Box>
            </Radix.Box>
          ),
        }}
      > */}
        <Head>
          <title>Modulz</title>
          <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />

          <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <GlobalStyles />

        {!isDemoPage && <Header />}

        <Component {...pageProps} />

        {!isDemoPage && <Footer />}
      {/* </MDXProvider> */}
    </Radix.Box>
  );
}

export default App;
