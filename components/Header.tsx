import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Pipe,
  Popover,
  ChromelessButton,
  Badge,
  Heading,
  Divider,
  VisuallyHidden,
} from '@modulz/radix';
import { Logo } from './Logo';
import { HideInProd } from './HideInProd';
import { PlusIcon } from '@modulz/radix-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size={2} sx={{ maxWidth: 'none' }}>
      <Flex py={4} sx={{ justifyContent: 'space-between' }}>
        <NextLink href="/" passHref>
          <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <VisuallyHidden>Modulz homepage</VisuallyHidden>
            <Logo aria-hidden />
          </Link>
        </NextLink>

        <Flex sx={{ alignItems: 'flex-start' }}>
          <ChromelessButton
            ref={buttonRef}
            onClick={() => setIsOpen(true)}
            sx={{
              mt: -1,
              p: 1,
              borderRadius: 1,
              bg: isOpen ? 'gray200' : undefined,
              ':hover': { bg: 'gray200' },
            }}
          >
            <Flex sx={{ alignItems: 'center' }}>
              <Text size={3} as="span" sx={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                Product
              </Text>
              <Box ml={1}>
                <PlusIcon />
              </Box>
            </Flex>
          </ChromelessButton>

          <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Box py={1} sx={{ width: 300 }}>
              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Text as="h6" size={3} sx={{ fontWeight: '500', mb: 1 }} style={{ lineHeight: 1 }}>
                    Design
                  </Text>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Something about design.
                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Text as="h6" size={3} sx={{ fontWeight: '500', mb: 1 }} style={{ lineHeight: 1 }}>
                    Prototype
                  </Text>
                  <Text size={2} sx={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                    Something about prototyping.
                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Text as="h6" size={3} sx={{ fontWeight: '500', mb: 1 }} style={{ lineHeight: 1 }}>
                    Handoff
                  </Text>
                  <Text size={2} sx={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                    Something about handoff.
                  </Text>
                </Box>
              </NextLink>
              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Text as="h6" size={3} sx={{ fontWeight: '500', mb: 1 }} style={{ lineHeight: 1 }}>
                    Design Systems
                  </Text>
                  <Text size={2} sx={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
                    Something about design systems.
                  </Text>
                </Box>
              </NextLink>
            </Box>
          </Popover>

          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={[4, 6]} style={{ lineHeight: 1 }}>
              <NextLink href="/learn" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
              </NextLink>
            </Text>
          </HideInProd>
          <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]} style={{ lineHeight: 1 }}>
            <NextLink href="/blog" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]} style={{ lineHeight: 1 }}>
              <NextLink href="/pricing" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Pricing</Link>
              </NextLink>
            </Text>
          </HideInProd>

          <Pipe mx={[2, 5]} />

          <Text size={3} sx={{ color: 'gray700' }} style={{ lineHeight: 1 }}>
            <Link href="https://core.modulz.app" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
