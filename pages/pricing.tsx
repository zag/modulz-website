import React from 'react';
import { Container, Box, Heading, Button, Text, Divider, Flex } from '@modulz/design-system';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Pricing = () => {
  return (
    <Box>
      <TitleAndMetaTags title="Pricing" />

      <Box mt={6} mb={8}>
        <Container size={1}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            Pricing
          </Heading>

          <Heading as="h2" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Design, develop, document and deploy your design system—without writing code.
          </Heading>
          <Flex mt={7} sx={{ justifyContent: 'center' }}>
            <Button size={1} variant="blue">
              Apply for beta access
            </Button>
          </Flex>
          <Flex mt={3} sx={{ justifyContent: 'center' }}>
            <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
              We're currently in private beta.
            </Text>
          </Flex>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Pricing;
