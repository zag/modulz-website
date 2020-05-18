import React from 'react';
import { Container, Box, Heading, Text, Divider, Grid } from '@modulz/radix';
import { BetaAccess } from '../../components/BetaAccess';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Careers = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Careers"
        description="Help us build the future of visual coding by bringing design closer to engineering."
      />

      <Container size={2} mt={6} mb={[5, 7]}>
        <Text as="h2" size={8} mb={[5, 7]} px={[0, 8]} sx={{ lineHeight: 5 }}>
          Help us build the future of visual coding by bringing design closer to engineering.
        </Text>
      </Container>

      <Container size={1}>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 4 }}>
          Modulz is a very early-stage, VC-backed startup.
        </Text>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 4 }}>
          Our first product is a visual code editor. We make it easy for teams to manage their design system, build a
          component library and design interfaces—all without writing code.
        </Text>
        <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 4 }}>
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

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Open roles
        </Heading>

        <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
          We're not currently hiring for any roles. Check back in a couple months.
        </Text>
      </Container>
    </Box>
  );
};

export default Careers;
