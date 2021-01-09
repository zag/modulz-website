import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Popover,
  Button,
  Badge,
  Heading,
  Separator,
} from '@modulz/design-system';
import { Logo } from './Logo';
import { HideInProd } from './HideInProd';
import { PlusIcon } from '@modulz/radix-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size="4">
      <Flex css={{ justifyContent: 'space-between' }}>
        <NextLink href="/" passHref>
          <Link css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <Box>Modulz homepage</Box>
            <Logo aria-hidden />
          </Link>
        </NextLink>

        <Flex css={{ alignItems: 'flex-start' }}>
          <Button>
            <Flex css={{ alignItems: 'center' }}>
              <Text size="3" as="span" css={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                Product
              </Text>
              <Box>
                <PlusIcon />
              </Box>
            </Flex>
          </Button>

          <Popover>
            <Box css={{ width: 300 }}>
              <Box>
                <Heading>
                  Theme <Badge>Coming soon</Badge>
                </Heading>
                <Text size="2" css={{ color: 'gray600', lineHeight: 1 }}>
                  Advanced tooling for defining scale-based design tokens.
                </Text>
              </Box>
              <Box>
                <Heading>
                  Editor <Badge>Coming soon</Badge>
                </Heading>
                <Text size="2" css={{ color: 'gray600', lineHeight: 1 }}>
                  A visual code editor for building a component library without writing code.
                </Text>
              </Box>

              <Separator />

              <a href="https://radix-ui.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box as="span" css={{ display: 'block', ':hover': { backgroundColor: 'gray200' } }}>
                  <Heading>Radix</Heading>
                  <Text size="2" css={{ color: 'gray700', lineHeight: 1 }}>
                    Our very own design system—generated by Modulz.
                  </Text>
                </Box>
              </a>
              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  css={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { backgroundColor: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Text as="h6" size="3" css={{ fontWeight: '500', mb: 1 }} style={{ lineHeight: 1 }}>
                    Design Systems
                  </Text>
                  <Text size="2" css={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                    Something about design systems.
                  </Text>
                </Box>
              </NextLink>
            </Box>
          </Popover>

          <HideInProd>
            <Text size="3" css={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
              <NextLink href="/learn" passHref>
                <Link css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
              </NextLink>
            </Text>
          </HideInProd>
          <Text size="3" css={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
            <NextLink href="/blog" passHref>
              <Link css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size="3" css={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
              <NextLink href="/pricing" passHref>
                <Link css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Pricing</Link>
              </NextLink>
            </Text>
          </HideInProd>

          <Separator orientation="vertical" />

          <Text size="3" css={{ color: 'gray700' }}>
            <Link href="https://kickstarter.modulz.app" css={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
