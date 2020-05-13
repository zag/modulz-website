import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';

export const LegacyUseCases = () => (
  <Box>
    <Container size={2} pt={[0, 8]} mt={[5, 7]}>
      <Heading as="h2" size={4} weight="normal">
        The visual code editor for creating design systems&mdash;without writing code.
      </Heading>
    </Container>

    <Container size={1} px={9}>
      <Text as="p" size={5} mb={5} sx={{ lineHeight: 4 }}>
        Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it
        comes to handing off interactive components, we need something more powerful.
      </Text>
      <Text as="p" size={5} sx={{ lineHeight: 4 }}>
        Modulz is designed to produce accessible, performant, production-ready design systems.
      </Text>
    </Container>
  </Box>
);
