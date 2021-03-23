import React from 'react';
import NextLink from 'next/link';
import { Box, Section, Container, Grid, Subheading, Heading, Text, Link, Flex, Separator } from '@modulz/design-system';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Section>
      <Separator size="1" />
      <Container size="3">
        <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$7' }}>
          <Flex css={{ fd: 'column', jc: 'space-between' }}>
            <NextLink href="/" passHref>
              <Box as="a" css={{ color: 'inherit' }}>
                <Logo aria-hidden />
              </Box>
            </NextLink>
            <Text
              size="2"
              css={{ color: '$gray800', }}
            >
              &copy; Modulz, Inc
            </Text>
          </Flex>
          <Box>
            <Subheading>
              Product
            </Subheading>
            <Box as="ul" css={{ listStyle: 'none', m: 0, p: 0 }}>
              <Box as="li" css={{ my: '$3' }}>
                <NextLink href="/design" passHref>
                  <Link variant="subtle">
                    <Text size="3">
                      Design
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <NextLink href="/prototyping" passHref>
                  <Link variant="subtle">
                    <Text size="3">
                      Prototyping
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <NextLink href="/design" passHref>
                  <Link variant="subtle">
                    <Text size="3">
                      Handoff
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <NextLink href="/design" passHref>
                  <Link variant="subtle">
                    <Text size="3">
                      Design Systems
                    </Text>
                  </Link>
                </NextLink>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{ }}>
                  <Link variant="subtle" href="https://radix.modulz.app">
                    Radix
                  </Link>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{ }}>
                  <Link variant="subtle" href="https://stitches.dev">
                    Stitches
                  </Link>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <Link variant="subtle" href="https://modulz.typeform.com/to/fp4gBW">
                    Beta
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Subheading>
              Community
            </Subheading>
            <Box as="ul" css={{ listStyle: 'none', m: 0, p: 0 }}>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <Link variant="subtle" href="https://twitter.com/modulz">
                    Twitter
                  </Link>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <Link variant="subtle" href="https://github.com/modulz">
                    Github
                  </Link>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <Link variant="subtle" href="https://discord.gg/p8PwAPFNHc">
                    Discord
                  </Link>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <Link variant="subtle" href="https://www.youtube.com/channel/UCEU5U-sfF6fmGvTmelBRePQ">
                    Youtube
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Subheading>
              Company
            </Subheading>
            <Box as="ul" css={{ listStyle: 'none', m: 0, p: 0 }}>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <NextLink href="/about" passHref>
                    <Link variant="subtle">About</Link>
                  </NextLink>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="subtle">Blog</Link>
                  </NextLink>
                </Text>
              </Box>
              <Box as="li" css={{ my: '$3' }}>
                <Text as="p" size="3" css={{  }}>
                  <NextLink href="/careers" passHref>
                    <Link variant="subtle">Careers</Link>
                  </NextLink>
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
