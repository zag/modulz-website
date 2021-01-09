import React from 'react';
import { Container, Box, Text } from '@modulz/design-system';

export const LegacyUseCases = () => (
  <Box>
    <Container size={2} mt={8} mb={[5, 7]}>
      <Text as="h3" size={8} mb={[5, 7]} px={[0, 8]} sx={{ lineHeight: 4 }}>
        The visual code editor for creating design systems&mdash;without writing code.
      </Text>
    </Container>

    <Container size={1}>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it
        comes to handing off interactive components, we need something more powerful.
      </Text>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Modulz is designed to produce accessible, performant, production-ready design systems.
      </Text>
    </Container>
  </Box>
);
