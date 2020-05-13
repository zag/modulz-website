import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';

const UseCases = () => (
  <Box>
    <Container size={2}>
      <Box pt={[0, 8]}>
        <Heading as="h2" size={4} weight="normal">
          The visual code editor for creating design systems&mdash;without writing code.
        </Heading>
      </Box>
    </Container>
    <Container size={1}>
      <Box mt={[5, 7]}>
        <Text as="p" size={5} mb={5} sx={{ lineHeight: 4 }}>
          Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it
          comes to handing off interactive components, we need something more powerful.
        </Text>
        <Text as="p" size={5} sx={{ lineHeight: 4 }}>
          Modulz is designed to produce accessible, performant, production-ready design systems.
        </Text>
      </Box>
    </Container>
  </Box>
);

export default UseCases;
