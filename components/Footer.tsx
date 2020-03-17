import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Heading, Text, Link, Flex, Divider } from '@modulz/radix';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Box pb={9}>
      <Divider size={2} mx="auto" mb={9} />
      <Container size={2} sx={{ maxWidth: '1090px' }}>
        <Grid
          sx={{
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(4, 1fr)'],
            gap: [6, 3],
            '& ul': { listStyle: 'none', margin: 0, padding: 0 },
          }}
        >
          <Flex sx={{ flexDirection: [null, 'column'], alignItems: ['center', 'start'] }}>
            <Logo />
            <Text as="span" size={2} ml={['auto', 0]} mt={[0, 'auto']} sx={{ color: 'gray500', lineHeight: '0', userSelect: 'none' }}>
              &copy; Modulz, Inc
            </Text>
          </Flex>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Product
            </Heading>
            <ul>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Theme
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Editor
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Composer
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/styleguide" passHref>
                    <Link>Styleguide</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link href="https://radix.modulz.app">Radix</Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link href="https://modulz.typeform.com/to/fp4gBW">Beta</Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Community
            </Heading>
            <ul>
              <li>
                <Text as="p" mt={3} sx={{ lineHeight: '1' }}>
                  <Link href="https://twitter.com/modulz">Twitter</Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link href="https://github.com/modulz">Github</Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link href="https://spectrum.chat/modulz">Spectrum</Link>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <Link href="https://www.youtube.com/channel/UCEU5U-sfF6fmGvTmelBRePQ">Youtube</Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading as="h6" size={0} sx={{ fontWeight: 500 }}>
              Company
            </Heading>
            <ul>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link>About</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/blog" passHref>
                    <Link>Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size={3} mt={2} sx={{ lineHeight: '1' }}>
                  <NextLink href="/careers" passHref>
                    <Link>Careers</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
