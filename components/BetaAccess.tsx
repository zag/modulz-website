import React from 'react';
import { Container, Text, Box, Flex, Heading, Link } from '@modulz/radix';

export const BetaAccess = () => {
  return (
    <Box py={9}>
      <Container size={1}>
        <Heading as="h5" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
          Join our beta program
        </Heading>
        <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}>
          We're currently in private beta. We're primarily targeting teams. Applications will be screened based on fit.
        </Text>

        <Flex mt={7} sx={{ justifyContent: 'center' }}>
          <Link>Apply for beta access</Link>
        </Flex>
      </Container>
    </Box>
  );
};
