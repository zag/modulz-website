import React from 'react';
import { Container, Flex, Box } from '@modulz/design-system';
const HomepageHero = require('../../public/home/homepage-hero-min.png');

export const LegacyComposerHero = () => (
  <Box role="presentation" css={{ pt: '$9' }}>
    <Box css={{ position: 'relative', pb: '$6' }}>
      <Container size="3" css={{ px: 0 }}>
        <img
          src={HomepageHero}
          style={{
            maxWidth: '100%',
            boxShadow:
              '0px 60px 123px -25px hsla(208, 29%, 12%, 0.42), 0px 35px 75px -35px hsla(208, 24%, 10%, 0.08)',
            borderRadius: '7px',
            verticalAlign: 'middle',
          }}
        />
      </Container>

      <Flex css={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          css={{
            position: 'relative',
            boxShadow:
              '0 0 0 80px white, 0 0 0 81px hsl(208, 100%, 90%), 0 0 0 160px hsl(208, 100%, 98%), 0 0 0 161px hsl(208, 100%, 92%), 0 0 0 240px white, 0 0 0 241px hsl(208, 100%, 92%), 0 0 0 320px hsl(208, 100%, 99%), 0 0 0 321px hsl(208, 100%, 94%), 0 0 0 400px white, 0 0 0 401px hsl(208, 100%, 94%), 0 0 0 480px hsl(208, 100%, 99%), 0 0 0 481px hsl(208, 100%, 96%), 0 0 0 560px white, 0 0 0 561px hsl(208, 100%, 96%), 0 0 0 640px hsl(208, 100%, 99%), 0 0 0 641px hsl(208, 100%, 96%), 0 0 0 720px white, 0 0 0 721px hsl(208, 100%, 96%)',
            borderRadius: '50%',
            zIndex: '-1',
            width: 100,
            height: 100,
          }}
        >
        </Box>
      </Flex>
    </Box>
  </Box>
);