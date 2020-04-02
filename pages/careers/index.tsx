import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Careers = () => {
  return (
    <Box py={8}>
      <TitleAndMetaTags />

      <Container size={1}>
        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Careers
        </Heading>

        <Text as="p" size={7} weight="normal" sx={{ textAlign: 'center', color: 'gray700' }}>
          Help us build the future of visual coding by bringing design closer to engineering.
        </Text>
      </Container>
    </Box>
  );
};

export default Careers;
