import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
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
    <Box as="header" css={{ py: '$4' }}>
      <Container size="4">
        <Flex css={{ jc: 'space-between' }}>
          <NextLink href="/" passHref>
            <Box as="a" css={{ color: 'inherit' }}>
              <Logo aria-hidden />
            </Box>
          </NextLink>

          <Flex css={{ ai: 'center', gap: '$6', mt: '-$2' }}>
            <Popover>
              <PopoverTrigger as={Button} size="2" variant="ghost" css={{ color: '$gray900', fontSize: '$3', mr: '-$3' }}>
                Product
                <Box css={{ ml: '$1' }}>
                  <PlusIcon />
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <Box css={{ py: '$1' }}>
                  <NextLink href="/design" passHref>
                    <Box as="a" css={{ display: 'block', textDecoration: 'none', py: '$2', px: '$4', '&:hover': { backgroundColor: '$blue200' } }}>
                      <Text size="3" css={{ fontWeight: 500, lineHeight: '17px', mb: '$1' }}>
                        Design
                      </Text>
                      <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                        Advanced tooling for defining scale-based design tokens.
                      </Text>
                    </Box>
                  </NextLink>
                  <NextLink href="/prototyping" passHref>
                    <Box as="a" css={{ display: 'block', textDecoration: 'none', py: '$2', px: '$4', '&:hover': { backgroundColor: '$blue200' } }}>
                      <Text size="3" css={{ fontWeight: 500, lineHeight: '17px', mb: '$1' }}>
                        Prototyping
                      </Text>
                      <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                        A visual code editor for building a component library without.
                      </Text>
                    </Box>
                  </NextLink>
                  <NextLink href="/design" passHref>
                    <Box as="a" css={{ display: 'block', textDecoration: 'none', py: '$2', px: '$4', '&:hover': { backgroundColor: '$blue200' } }}>
                      <Text size="3" css={{ fontWeight: 500, lineHeight: '17px', mb: '$1' }}>
                        Handoff
                      </Text>
                      <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                        A visual code editor for building a component library without.
                      </Text>
                    </Box>
                  </NextLink>
                  <NextLink href="/design" passHref>
                    <Box as="a" css={{ display: 'block', textDecoration: 'none', py: '$2', px: '$4', '&:hover': { backgroundColor: '$blue200' } }}>
                      <Text size="3" css={{ fontWeight: 500, lineHeight: '17px', mb: '$1' }}>
                        Design Systems
                      </Text>
                      <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                        A visual code editor for building a component library without.
                      </Text>
                    </Box>
                  </NextLink>
                </Box>
              </PopoverContent>
            </Popover>

            <NextLink href="/about" passHref>
              <Link variant="subtle">
                <Text size="3">
                  About
                </Text>
              </Link>
            </NextLink>

            <NextLink href="/blog" passHref>
              <Link variant="subtle">
                <Text size="3">
                  Blog
                </Text>
              </Link>
            </NextLink>

            <Separator size="1" orientation="vertical" />

            <Link variant="subtle" href="https://kickstarter.modulz.app">
              <Text size="3">
                Log in
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
