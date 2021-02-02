import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Grid, Card, CardLink } from '@modulz/radix';
import { BetaAccess } from '../../components/BetaAccess';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Careers = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Careers"
        description="Help us build the future of visual coding by bringing design closer to engineering."
      />

      <Container size={1} mt={6} sx={{ maxWidth: 715 }}>
        <Text as="h1" size={9} mb={[5, 6]} sx={{ lineHeight: 5, fontWeight: 500 }}>
          Build the future of design and developer tools.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Modulz is a VC-backed startup, seed-stage startup working on the next generation of design/dev tooling.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          We're improving collaboration across product teams by visualising code so designers can contribute directly to the product.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Our goal is to improve cross-team collaboration by getting everyone working on the same product, together.
        </Text>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Our values
        </Heading>
      </Container>

      <Container size={2} mt={8}>
        <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
          <Box>
            <Heading size={1} mb={1}>
              Freedom
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Work from anywhere in the world. Choose your own hours and get ample time off. Meetings are kept to a
              minimum.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Diversity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              We're committed to building an inclusive company. We're serious about creating an environment where
              everyone feels welcome and appreciated.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Autonomy
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Your ideas and opinions will be heard. You will have the freedom to lead projects. We want you to feel
              invested in your work and proud of it.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Curiosity
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3 }}>
              Ask questions. Experiment with new ideas and tech. Reach out to customers and learn about their workflows.
              Be curious.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Perks & benefits
        </Heading>
      </Container>

      <Container size={2} mt={8}>
        <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
          <Box>
            <Heading size={1} mb={1}>
              Salary
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              We pay above market rate and are upfront about compensation.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Skin in the game
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              Everyone is offered stock options and we're upfront about the amount.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Time off
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              30 days paid time off for vacation, holidays & sick days.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Work remotely
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              Work from anywhere in the world. Choose your own hours.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Health insurance stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              $400 monthly stipend toward healthcare for yourself and your family.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Remote stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              $200 monthly stipend for hotdesking and hipster coffee.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Wellness stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              $50 monthly stipend for gym, therapy or whatever you need to stay healthy.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Conference pass
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              One free ticket to a conference of your choice, annually.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Office goodies
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              $1k upfront to help you kit out your home office or workstation.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Free books
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 3, color: 'gray700' }}>
              Unlimited free books whenever you want.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Divider mx="auto" my={8} size={2} />

      <Container size={2}>
        <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center' }}>
          Open roles
        </Heading>
        <Text as="p" size={4} mt={6} sx={{ lineHeight: 2, textAlign: 'center' }}>
          We have 0 roles open currently.
        </Text>
        {/* <Grid mx={-4} mt={7} sx={{ gridTemplateColumns: '1fr 1fr', gap: '6' }}>
          <NextLink href="/careers/senior-ui-engineer" passHref>
            <CardLink variant="ghost">
              <Text as="p" size={5} mb={1} sx={{ fontWeight: 500, lineHeight: 2 }}>
                Senior UI Engineer (Radix)
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 2 }}>
                Build an accessible UI component library as part of the Radix core team.
              </Text>
            </CardLink>
          </NextLink>
          <NextLink href="/careers/designer-engineer-hybrid" passHref>
            <CardLink variant="ghost">
              <Text as="p" size={5} mb={1} sx={{ fontWeight: 500, lineHeight: 2 }}>
                Designer/Engineer Hybrid (Radix)
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 2 }}>
                Own our design system and create a massive library of open-source UI assets and resources.
              </Text>
            </CardLink>
          </NextLink>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Careers;
