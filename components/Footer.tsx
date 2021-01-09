import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Heading, Text, Link, Flex, Separator } from '@modulz/design-system';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Box>
      <Separator size="1" />
      <Container size="2" css={{ maxWidth: '1090px' }}>
        <Box>
          <Flex css={{ flexDirection: 'column', alignItems: 'center' }}>
            <NextLink href="/" passHref>
              <Link variant="subtle" css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
                <Box>Modulz homepage</Box>
                <Logo aria-hidden />
              </Link>
            </NextLink>

            <Text
              as="span"
              size="2"
              css={{ color: 'gray700', lineHeight: '0', userSelect: 'none' }}
            >
              &copy; Modulz, Inc
            </Text>
          </Flex>
          <Box>
            <Heading>
              Product
            </Heading>
            <ul>
              <li>
                <Text as="p" size="3" css={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Design
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Prototyping
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Handoff
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ color: 'gray500', lineHeight: '1', userSelect: 'none' }}>
                  Design systems
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://radix.modulz.app">
                    Radix
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://stitches.dev">
                    Stitches
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://modulz.typeform.com/to/fp4gBW">
                    Beta
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading>
              Community
            </Heading>
            <ul>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://twitter.com/modulz">
                    Twitter
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://github.com/modulz">
                    Github
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://discord.gg/p8PwAPFNHc">
                    Discord
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <Link variant="subtle" href="https://www.youtube.com/channel/UCEU5U-sfF6fmGvTmelBRePQ">
                    Youtube
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading>
              Company
            </Heading>
            <ul>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <NextLink href="/about" passHref>
                    <Link variant="subtle">About</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="subtle">Blog</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ lineHeight: '1' }}>
                  <NextLink href="/careers" passHref>
                    <Link variant="subtle">Careers</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
