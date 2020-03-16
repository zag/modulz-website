import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Link, Flex, Pipe, Popover } from '@modulz/radix';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Flex p={4} sx={{ alignItems: 'center' }}>
      <NextLink href="/" passHref>
        <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
          <Logo />
        </Link>
      </NextLink>

      <Flex ml="auto" sx={{ alignItems: 'center' }}>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          style={{ background: 'transparent', border: 0, appearance: 'none', outline: 'none' }}
        >
          <Text sx={{ color: 'gray700' }}>Product</Text>
        </button>
        <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Box px={3} py={2}>
            <Text as="p" sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
              <NextLink href="/" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Styleguide</Link>
              </NextLink>
            </Text>
            <Text as="p" sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
              <NextLink href="/" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Radix</Link>
              </NextLink>
            </Text>
          </Box>
        </Popover>

        <Text sx={{ color: 'gray700' }} mx={6}>
          <NextLink href="/blog" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
          </NextLink>
        </Text>
        <Text sx={{ color: 'gray700' }}>
          <NextLink href="/learn" passHref>
            <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
          </NextLink>
        </Text>
        <Pipe mx={3} />
        <Text sx={{ color: 'gray700' }}>
          <Link href="https://modulz.app/login" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            Login
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
