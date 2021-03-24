import React from 'react';
import { Title, Subtitle, Container, Box, Grid, Code, Heading, Badge, Section, Button, Paragraph, Input, IconButton, Text, Separator, Flex, Kbd } from '@modulz/design-system';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const WhyModulzPage = () => {
  return (
    <Section size="2">
      <TitleAndMetaTags />
      
      <Container size="3">
        <Title css={{ textAlign: 'center', mb: '$3', px: 100 }}>
          Why Modulz
        </Title>
      </Container>
      <Container size="2">
        <Subtitle css={{ textAlign: 'center' }}>
          No more clumsy overlays. No more wiring things up. <br /> Just insert a component, style it, done.
        </Subtitle>
      </Container>
    </Section>
  );
};

export default WhyModulzPage;
