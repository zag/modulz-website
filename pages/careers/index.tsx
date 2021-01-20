import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Section, Title, Subheading, Paragraph, Text, Separator, Grid, Card } from '@modulz/design-system';
import { BetaAccess } from '../../components/BetaAccess';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Careers = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Careers"
        description="Help us build the future of visual coding by bringing design closer to engineering."
      />

      <Container size="1" mt={6} css={{ maxWidth: 715 }}>
        <Title>
          Build the future of design and developer tools.
        </Title>
        <Paragraph>
          Modulz is a VC-backed startup, seed-stage startup working on the next generation of design/dev tooling.
        </Paragraph>
        <Paragraph>
          We're improving collaboration across product teams by visualising code so designers can contribute directly to the product.
        </Paragraph>
        <Paragraph>
          Our goal is to improve cross-team collaboration by getting everyone working on the same product, together.
        </Paragraph>
      </Container>

      <Separator mx="auto" my={8} size="2" />

      <Section size="3">
        <Container size="2">
          <Heading>
            Our values
          </Heading>
          <Grid css={{ gap: '$6', gridTemplateColumns: '1fr 1fr' }}>
            <Box>
              <Subheading>
                Freedom
              </Subheading>
              <Paragraph>
                Work from anywhere in the world. Choose your own hours and get ample time off. Meetings are kept to a
                minimum.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Diversity
              </Subheading>
              <Paragraph>
                We're committed to building an inclusive company. We're serious about creating an environment where
                everyone feels welcome and appreciated.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Autonomy
              </Subheading>
              <Paragraph>
                Your ideas and opinions will be heard. You will have the freedom to lead projects. We want you to feel
                invested in your work and proud of it.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Curiosity
              </Subheading>
              <Paragraph>
                Ask questions. Experiment with new ideas and tech. Reach out to customers and learn about their workflows.
                Be curious.
              </Paragraph>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Separator mx="auto" my={8} size="2" />

      <Section size="3">
        <Container size="2">
          <Heading>
            Perks & benefits
          </Heading>
          <Grid css={{ gap: '$6', gridTemplateColumns: '1fr 1fr' }}>
            <Box>
              <Subheading>
                Salary
              </Subheading>
              <Paragraph>
                We pay above market rate and are upfront about compensation.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Skin in the game
              </Subheading>
              <Paragraph>
                Everyone is offered stock options and we're upfront about the amount.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Time off
              </Subheading>
              <Paragraph>
                30 days paid time off for vacation, holidays & sick days.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Work remotely
              </Subheading>
              <Paragraph>
                Work from anywhere in the world. Choose your own hours.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Health insurance stipend
              </Subheading>
              <Paragraph>
                $400 monthly stipend toward healthcare for yourself and your family.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Remote stipend
              </Subheading>
              <Paragraph>
                $200 monthly stipend for hotdesking and hipster coffee.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Wellness stipend
              </Subheading>
              <Paragraph>
                $50 monthly stipend for gym, therapy or whatever you need to stay healthy.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Conference pass
              </Subheading>
              <Paragraph>
                One free ticket to a conference of your choice, annually.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Office goodies
              </Subheading>
              <Paragraph>
                $1k upfront to help you kit out your home office or workstation.
              </Paragraph>
            </Box>
            <Box>
              <Subheading>
                Free books
              </Subheading>
              <Paragraph>
                Unlimited free books whenever you want.
              </Paragraph>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Separator mx="auto" my={8} size="2" />

      <Section size="3">
        <Container size="2">
          <Heading>
            Open roles
          </Heading>
          
          <Grid css={{ gridTemplateColumns: '1fr 1fr', gap: '$6', mx: '-$4' }}>
            <NextLink href="/careers/senior-ui-engineer" passHref>
              <Card variant="ghost" as="a" css={{ p: '$4' }}>
                <Text as="p" size="5" mb={1} css={{ fontWeight: 500, lineHeight: '20px' }}>
                  Senior UI Engineer (Radix)
                </Text>
                <Text as="p" size="3" css={{ color: '$gray900', lineHeight: '20px' }}>
                  Build an accessible UI component library as part of the Radix core team.
                </Text>
              </Card>
            </NextLink>
            <NextLink href="/careers/engineering-manager" passHref>
              <Card variant="ghost" as="a" css={{ p: '$4' }}>
                <Text as="p" size="5" mb={1} css={{ fontWeight: 500, lineHeight: '20px' }}>
                  Engineering Manager (Radix)
                </Text>
                <Text as="p" size="3" css={{ color: '$gray900', lineHeight: '20px' }}>
                  Project manage all of our open-source efforts including Radix and Stitches.
                </Text>
              </Card>
            </NextLink>
            <NextLink href="/careers/engineering-manager" passHref>
              <Card variant="ghost" as="a" css={{ p: '$4' }}>
                <Text as="p" size="5" mb={1} css={{ fontWeight: 500, lineHeight: '20px' }}>
                  Product Engineer
                </Text>
                <Text as="p" size="3" css={{ color: '$gray900', lineHeight: '20px' }}>
                  Project manage all of our open-source efforts including Radix and Stitches.
                </Text>
              </Card>
            </NextLink>
            <NextLink href="/careers/designer-engineer-hybrid" passHref>
              <Card variant="ghost" as="a" css={{ p: '$4' }}>
                <Text as="p" size="5" mb={1} css={{ fontWeight: 500, lineHeight: '20px' }}>
                  Designer/Engineer Hybrid (Radix)
                </Text>
                <Text as="p" size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
                  Own our design system and create a massive library of open-source UI assets and resources.
                </Text>
              </Card>
            </NextLink>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};

export default Careers;
