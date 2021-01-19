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
        <Text as="h1" size={9} mb={[3, 2]} sx={{ lineHeight: 5, fontWeight: 500 }}>
          Designer/Engineer Hybrid (Radix)
        </Text>
        <Text as="p" size={6} mb={[5, 6]} sx={{ color: 'gray700', lineHeight: 3 }}>
          Own our design system, which services all of our products. Create a massive library of open-source assets and resources for the design and dev communities.
        </Text>

        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Modulz is a VC-backed startup, seed-stage startup working on the next generation of design/dev tooling.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          As part of our efforts to bring design closer to development, we're working on <Link href="https://twitter.com/radix_ui">Radix</Link>: an open-source library of assets and resources to help make it easier to design and build user interfaces.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          Radix includes <Link href="https://radix-ui.com">Primitives</Link>, a color system, an icon set, a CSS reset, an extensive design system, and a massive library of templates for marketing sites and UIs.
        </Text>
        <Text as="p" size={4} mb={4} sx={{ lineHeight: '27px' }}>
          We're hiring a designer/developer hybrid to lead some of these projects.
        </Text>

        <Divider mx="auto" my={6} size={1} />

        <Heading as="h3" size={3} mb={4}>
          Role
        </Heading>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              This role is focused on design system work, and requires a broad and deep skill set. You will need expert knowledge of both UI design and development including JSX, HTML, CSS, a11y, layout, type-setting, color theory, iconography, and more. You will also need working knowledge of CSS-in-JS. You will not need deep JavaScript experience.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Maintain <Link href="https://github.com/radix-ui/design-system">Radix DS</Link>—our design system—which is used by all of our products. Manage GH issues, collaborate with product teams to gather requirements, build new components, refine component APIs.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Maintain our multiple documentation sites.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Maintain and contribute to our <Link href="https://icons.modulz.app">open-source icon set</Link>.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Build hundreds of marketing and UI templates, using our design system. These templates will be open-source, and available within Modulz.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Get involved in our Discord, chatting with the community to gather feedback, answer questions, and resolve issues.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Be an advocate for Radix in the design and dev communities. Join calls with teams who are considering adopting Radix.
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={6} size={1} />

        <Heading as="h3" size={3} mb={4}>
          Requirements
        </Heading>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              7+ years work experience as a designer/developer.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Expert-level knowledge of semantic HTML and CSS.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Expert-level knowledge of design including layout, type-setting, color theory, and iconography.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Working knowledge of CSS-in-JS libraries.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Deep understanding of UI design, architecture, and composition.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              An extremely keen eye for detail. We need someone who cares deeply about quality, someone who cares about kerning, decimal color values etc.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Obviously, a broad and deep skill set like this is rare. So you don't necessarily need to check all of these boxes, but a strong foundation in both UI design and development is a minimum requirement.
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={6} size={1} />

        <Heading as="h3" size={3} mb={4}>
          Compensation
        </Heading>

        <ul>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              $130k–$160k USD salary depending on skill set, experience-level, and ability to push the team and project forward.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Custom stock option package.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              30 days paid time off for vacation, holidays & sick days.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Work from anywhere in the world. Choose your own hours.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              $400 monthly stipend toward healthcare for yourself and your family.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              $200 monthly stipend for hotdesking and hipster coffee.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              $50 monthly stipend for gym, therapy or whatever you need to stay healthy.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              One free ticket to a conference of your choice, annually.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              A Modulz/Radix swag pack worth ~$1000.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              Unlimited free books whenever you want.
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={6} size={1} />

        <Heading as="h3" size={3} mb={2}>
          Process
        </Heading>
        <Text as="p" size={4} mb={5} sx={{ lineHeight: '27px' }}>
          The deadline for applications is January 29th 2021 We aim to complete the entire process by February 19th 2021. All applicants will be notified of their application status at each step.
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
              Potential candidates will be asked to complete two short technical challenges with a focus on UI design and development.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Interviews: </span>
              Potential candidates will be invited to 3–4 interviews.
            </Text>
          </li>
          <li>
            <Text as="p" size={4} sx={{ lineHeight: '27px' }}>
              <span style={{ fontWeight: 500 }}>Offer: </span>
              Successful candidates will receive an offer :)
            </Text>
          </li>
        </ul>

        <Divider mx="auto" my={6} size={1} />

        <MarketingButton as="a" href="https://modulz.typeform.com/to/vSXbOPgL">Apply via Typeform</MarketingButton>

      </Container>
    </Box>
  );
};

export default Careers;
