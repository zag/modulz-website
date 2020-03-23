import React from 'react';
import { Container, Box, Grid, Heading, Button, Text, Divider, Flex } from '@modulz/radix';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Editor = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={1}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            The visual code editor
          </Heading>

          <Heading as="h2" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Style your component library, from color to shadows to animations—without writing code.
          </Heading>
        </Container>
      </Box>

      <Container size={2} sx={{ maxWidth: '1280px' }}>
        <Flex mb={7} sx={{ justifyContent: 'space-around' }}>
          <Box sx={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size={2} mb={1} sx={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Panes
            </Text>
            <Text as="p" size={2} sx={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box sx={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size={2} mb={1} sx={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Variants
            </Text>
            <Text as="p" size={2} sx={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box sx={{ position: 'relative', width: '175px', opacity: '1' }}>
            <Text as="p" size={2} mb={1} sx={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Parts
            </Text>
            <Text as="p" size={2} sx={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box sx={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size={2} mb={1} sx={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Properties
            </Text>
            <Text as="p" size={2} sx={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
        </Flex>
        <img
          src="/home/editor.png"
          style={{
            display: 'block',
            maxWidth: '100%',
            boxShadow: 'hsla(208, 28%, 12%, 0.42) 0px 60px 123px -25px, hsla(208, 25%, 10%, 0.08) 0px 35px 75px -35px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'hsl(208, 18%, 86%) hsl(208, 18%, 86%) hsl(210, 16%, 76%)',
            borderRadius: '10px',
          }}
        />
      </Container>

      <Divider mx="auto" size={2} />

      <Box py={9}>
        <Container size={1}>
          <Text
            as="h3"
            size={2}
            mb={3}
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              color: 'gray700',
              letterSpacing: '.125em',
              textTransform: 'uppercase',
            }}
          >
            Components
          </Text>
          <Heading as="h3" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            The most advanced component library ever built.
          </Heading>
          <Text
            as="p"
            size={5}
            sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Text>
        </Container>
        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
              gap: 5,
            }}
          >
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Accessible
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Customisable
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Theme UI
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <Box py={9}>
        <Container size={1}>
          <Text
            as="h3"
            size={2}
            mb={3}
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              color: 'gray700',
              letterSpacing: '.125em',
              textTransform: 'uppercase',
            }}
          >
            Code export
          </Text>
          <Heading as="h3" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            The most advanced code generation in the world. Hands down.
          </Heading>
          <Text
            as="p"
            size={5}
            sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Text>
        </Container>
        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
              gap: 5,
            }}
          >
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Theme UI
              </Heading>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Theme UI
              </Heading>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                Theme UI
              </Heading>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Editor;
