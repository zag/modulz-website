import React from 'react';
import { Container, Text, Box, Flex, Heading } from '@modulz/design-system';
import { MarketingButton } from '../components/MarketingButtton';

export const BetaAccess = () => {
  return (
    <Box>
      <Container size="1" css={{ textAlign: 'center' }}>
        <Heading>
          Get early access
        </Heading>

        <Text as="p" size="4" color="gray">
          We're currently in private alpha. Applications will be screened based on fit.
        </Text>

        <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank" rel="noopener">
          Apply for early access
          <Box as="span" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>
      </Container>
    </Box>
  );
};
