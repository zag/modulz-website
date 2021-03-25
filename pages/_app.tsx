import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import * as Radix from '@modulz/design-system';
import * as RadixIcons from '@modulz/radix-icons';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAnalytics } from '../utils/analytics';
import { VideoPlayer } from '../components/VideoPlayer';
import { useRouter } from 'next/router';

const { global } = Radix;

const globalStyles = global({
  '* *::before *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    backgroundColor: '$loContrast',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    lineHeight: 1,
    fontFamily: '$untitled',
  },

  'h1, h2, h3, h4, h5, strong': {
    fontWeight: 500,
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  img: {
    verticalAlign: 'middle',
    maxWidth: '100%',
  },

  pre: {
    margin: 0,
    fontFamily: '$mono',
    all: 'unset',
  },

  '&::selection': {
    backgroundColor: '$blue500',
  },

  'code[class*="language-"], pre[class*="language-"]': {
    color: '$quartz1000',
    background: 'none',
    fontFamily: '$quartz1000',
    fontSize: '$quartz1000',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '$quartz1000',

    tabSize: 4,

    hyphens: 'none',
  },

  /* Code blocks */
  'pre[class*="language-"]': {
    paddingTop: '$quartz1000',
    paddingBottom: '$quartz1000',
    paddingLeft: '$quartz1000',
    paddingRight: '$quartz1000',
    margin: '$2 0',
    overflow: 'auto',
    minWidth: '100%',
  },

  ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
    background: '$quartz1000',
    border: '1px solid $quartz1000',
    borderRadius: '$2',
  },

  /* Inline code */
  ":not(pre) > code[class*='language-']": {
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: 'slategray',
  },

  '.token.punctuation': {
    color: '#999',
  },

  '.token.namespace': {
    opacity: 0.7,
  },

  '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
    color: '#905',
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#690',
  },

  '.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string': {
    color: '#9a6e3a',
    /* background: hsla(0, 0%, 100%, 0.5); */
  },

  '.token.atrule, .token.attr-value, .token.keyword': {
    color: '#07a',
  },

  '.token.function, .token.class-name': {
    color: '#dd4a68',
  },

  '.token.regex, .token.important, .token.variable': {
    color: '#e90',
  },

  '.token.important, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.entity': {
    cursor: 'help',
  },

  /* Line highlighting via https://github.com/j0lv3r4/mdx-prism */
  '.mdx-marker': {
    display: 'block',

    /* Reset padding originally set in "pre[class*='language-']" */
    marginLeft: '-$2',
    marginRight: '-$2',
    paddingLeft: '$2',
    paddingRight: '$2',

    backgroundColor: '$quartz1000',
    boxShadow: 'inset 2px 0px 0 0px $colors$quartz1000',

    minWidth: 'fit-content',
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useAnalytics();

  const router = useRouter();

  const isDemoPage = router.pathname.includes('/demo/');
  const isDarkMode =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <Radix.Box>
      <MDXProvider
        components={{
          ...Radix,
          ...RadixIcons,
          h1: (props) => <Radix.Heading size={5} mb={8} css={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: (props) => <Radix.Heading {...props} />,
          h3: (props) => <Radix.Subheading {...props} />,
          h4: (props) => <Radix.Heading size={0} mt={3} mb={1} {...props} as="h4" />,
          p: (props) => <Radix.Paragraph {...props} css={{ mb: '$3', ...props.css }} />,
          a: ({ href = '', ...props }) => {
            if (href.startsWith('/')) {
              return (
                <NextLink href={href} passHref>
                  <Radix.Link variant="subtle" {...props} />
                </NextLink>
              );
            }
            return <Radix.Link href={href} {...props} variant="blue" target="_blank" rel="noopener" />;
          },
          hr: (props) => <Radix.Separator {...props} size={2} css={{ my: '$6', mx: 'auto', ...props.css }} />,
          inlineCode: (props) => <Radix.Code variant="fade" {...props} />,
          ul: (props) => <Radix.Box {...props} as="ul" />,
          ol: (props) => <Radix.Box {...props} as="ol" />,
          li: (props) => (
            <li>
              <Radix.Paragraph {...props} css={{ ...props.css }} />
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
          strong: (props) => (
            <Radix.Text {...props} css={{ ...props.css, display: 'inline', fontSize: 'inherit', fontWeight: 500 }} />
          ),
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
              <Radix.Text as="figcaption" size="3" css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}>
                {children}
              </Radix.Text>
            </Radix.Box>
          ),
          blockquote: (props) => <Radix.Box css={{ borderLeft: `2px solid gray`, color: 'gray300' }} {...props} />,
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
              <Radix.Text as="figcaption" size="3" css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}>
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
              <Radix.Text as="figcaption" size="3" css={{ lineHeight: 2, letterSpacing: 0, color: 'gray700' }}>
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
      >
        <Head>
          <title>Modulz</title>
          <link rel="icon" href={isDarkMode ? '/favicon-light.png' : '/favicon-dark.png'} />

          <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {!isDemoPage && <Header />}

        <Component {...pageProps} />

        {!isDemoPage && <Footer />}
      </MDXProvider>
    </Radix.Box>
  );
}

export default App;
