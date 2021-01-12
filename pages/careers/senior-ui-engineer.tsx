import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Grid, Link, Card, CardLink } from '@modulz/radix';
import { BetaAccess } from '../../components/BetaAccess';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import { MarketingButton } from '../../components/MarketingButtton';

const Careers = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Careers"
        description="Help us build the future of visual coding by bringing design closer to engineering."
      />

      <Container size={1} mt={6} sx={{ maxWidth: 715 }}>
        <Text as="h1" size={9} mb={[3, 3]} sx={{ lineHeight: 5, fontWeight: 500 }}>
          Senior UI Engineer (Radix)
        </Text>
        <Text as="p" size={6} mb={[5, 6]} sx={{ color: 'gray700', lineHeight: 2 }}>
          Help us build an accessible UI component library as part of the Radix core team.
        </Text>

        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Modulz is a VC-backed startup, seed-stage startup working on the next generation of design/dev tooling.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          As part of our efforts to bring design closer to development, we're working on <Link href="https://radix-ui.com">Radix</Link> Primitives: an extensive library of open-source, accessible UI components.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Radix Primitives are fully integrated with Modulz, serving as a starting point for prototyping. They're also available to developers for building websites, web apps, and design systems.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          We're hiring a Senior UI Engineer to work on Radix Primitives.
        </Text>

        <Divider mx="auto" my={7} size={1} />

        <Heading as="h3" size={3} mb={4}>
          Role
        </Heading>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              This is a very technical role. You will be tasked with building high-quality UI components—with no styles—which consumers can wrap and compose to build design systems. The focus is on accessibility and functionality.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Research, design, build, and document complex UI components, with a focus on accessibility and developer experience.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Help to maintain our existing Radix Primitives. Monitor Github issues and work to resolve them. Gather feedback from the community and work to refine Radix.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Get involved in our Discord, chatting with the community to gather feedback, answer questions, and resolve issues.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Be an advocate for Radix in the developer community. Join calls with teams who are considering adopting Radix.
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={7} size={1} />

        <Heading as="h3" size={3} mb={4}>
          Requirements
        </Heading>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              7+ years work experience as an engineer.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Expert-level knowledge of semantic HTML and CSS.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Expert-level knowledge of JavaScript.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Working knowledge of React, including React Hooks.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Deep understanding of component design, architecture, composition, and accessibility.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              A passion to improve accessibility and usability across the web.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Bonus: experience with TypeScript.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Bonus: deep experience with a11y and screenreader testing.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Bonus: experience with server-side rendered components.
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={7} size={1} />

        <Heading as="h3" size={3} mb={6}>
          Compensation
        </Heading>

        <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
          <Box>
            <Heading size={1} mb={1}>
              Salary
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              We pay above market rate and are upfront about compensation.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Skin in the game
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              Everyone is offered stock options and we're upfront about the amount.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Time off
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              30 days paid time off for vacation, holidays & sick days.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Work remotely
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              Work from anywhere in the world. Choose your own hours.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Health insurance stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              $400 monthly stipend toward healthcare for yourself and your family.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Remote stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              $200 monthly stipend for hotdesking and hipster coffee.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Wellness stipend
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              $50 monthly stipend for gym, therapy or whatever you need to stay healthy.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Conference pass
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              One free ticket to a conference of your choice, annually.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Office goodies
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              $1k upfront to help you kit out your home office or workstation.
            </Text>
          </Box>
          <Box>
            <Heading size={1} mb={1}>
              Free books
            </Heading>
            <Text as="p" size={4} sx={{ lineHeight: 2, color: 'gray700' }}>
              Unlimited free books whenever you want.
            </Text>
          </Box>
        </Grid>

        <Divider mx="auto" my={7} size={1} />

        <Heading as="h3" size={3} mb={2}>
          Process
        </Heading>
        <Text as="p" size={4} mb={5} sx={{ lineHeight: '27px' }}>
          We aim to complete the entire process by February 12th 2021. All applicants will be notified of their application status at each step.
        </Text>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Application: </span>
              Submit your application via Typeform.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Screen: </span>
              We will screen applicants based on fit.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Challenge: </span>
              Potential candidates will be asked to complete a 1 hour React/JS challenge with a focus on component architecure and JavaScript knowledge.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Interviews: </span>
              Potential candidates will be invited to up to 3 interviews. One with Colm (co-founder and CEO), one with a Radix team member, and one with the whole Radix team.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Offer: </span>
              Successful candidates will receive an offer :)
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={7} size={1} />

        <MarketingButton as="a" href="https://modulz.typeform.com/to/J0el4BwN">Apply via Typeform</MarketingButton>

      </Container>
    </Box>
  );
};

export default Careers;
