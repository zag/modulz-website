import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Grid,
  Heading,
  Button,
  Text,
  Divider,
  Flex,
  Link,
  Subheading,
  AspectRatio,
  Card,
  Badge,
} from '@modulz/radix';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { LegacyTestimonial } from '../components/LegacyHeroIllustration/LegacyTestimonial';
import { PlusIcon, MinusIcon } from '@modulz/radix-icons';
const styleguideImg = require('../public/styleguide/styleguide.png');
const desAvatar = require('../public/testimonials/des-avatar.jpg');

const Styleguide = () => {
  return (
    <Box>
      <TitleAndMetaTags title="Style guide" />

      <Container size={3} mt={6} sx={{ textAlign: 'center' }}>
        <Heading size={5} mb={4}>
          The fastest way to create a styleguide
        </Heading>
      </Container>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h2" size={2} mb={0} sx={{ color: 'gray700', lineHeight: '4', fontWeight: 400 }}>
          Keep your team in sync with a styleguide automatically generated from your design system.
        </Heading>
      </Container>

      <Box sx={{ overflow: 'hidden' }}>
        <Container size={3} pb={9} style={{ maxWidth: '1200px' }}>
          <Box mb={3}>
            <img
              src={styleguideImg}
              style={{
                maxWidth: '100%',
                boxShadow:
                  '0px 60px 123px -25px hsla(208, 29%, 12%, 0.42), 0px 35px 75px -35px hsla(208, 24%, 10%, 0.08)',
                borderRadius: '10px',
                verticalAlign: 'middle',
                border: '1px solid',
                borderColor: 'hsl(206, 19%, 86%) hsl(206, 19%, 86%) hsl(210, 16%, 76%)',
                transform: 'perspective(75em) rotateX(18deg) rotateY(0) rotateZ(0) translateX(0)',
              }}
            />
          </Box>
        </Container>

        <Container size={2} sx={{ textAlign: 'center' }}>
          <Text as="h2" size={8} px={[0, 8]} sx={{ lineHeight: 5, color: 'gray500' }}>
            <s>Developer Handoff</s>
          </Text>
          <Text as="h2" size={8} mb={5} px={[0, 8]} sx={{ lineHeight: 5 }}>
            Goodbye handoff. Hello Style guide.
          </Text>
        </Container>

        <Container size={1} sx={{ textAlign: 'center' }}>
          <Text as="p" size={5} mb={5} px={[0, 6]} sx={{ lineHeight: 4 }}>
            No more static components. No more useless code. Styleguide replaces "developer handoff" with a
            production-ready design system.
          </Text>
        </Container>

        <Container size={3} mt={8}>
          <Grid sx={{ gap: [6, 8], gridTemplateColumns: ['1fr', '1fr 1fr 1fr'] }}>
            <Box sx={{ textAlign: 'center' }}>
              <Flex mb={4} sx={{ justifyContent: 'center' }}>
                <StopwatchIcon />
              </Flex>
              <Heading size={1} mb={3} sx={{ lineHeight: 2 }}>
                Zero set-up
              </Heading>
              <Text as="p" size={4} mx={[0, 0, 3]} sx={{ color: 'gray700', lineHeight: 3 }}>
                Styleguides are automatically generated from your Modulz design system. No set-up required.
              </Text>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Flex mb={4} sx={{ justifyContent: 'center' }}>
                <LightningIcon />
              </Flex>
              <Heading size={1} mb={3} sx={{ lineHeight: 2 }}>
                Blazing fast
              </Heading>
              <Text as="p" size={4} mx={[0, 0, 3]} sx={{ color: 'gray700', lineHeight: 3 }}>
                Styleguides are built on Gatsby and for optimised for blazing fast performance.
              </Text>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Flex mb={4} sx={{ justifyContent: 'center' }}>
                <ArrowsIcon />
              </Flex>
              <Heading size={1} mb={3} sx={{ lineHeight: 2 }}>
                Always in sync
              </Heading>
              <Text as="p" size={4} mx={[0, 0, 3]} sx={{ color: 'gray700', lineHeight: 3 }}>
                Styleguide keeps your design and engineering teams in sync with a single source of truth.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider size={2} my={8} mx="auto" />

      <Container size={2} sx={{ textAlign: 'center' }}>
        <Subheading as="h3" size={1} mb={4} sx={{ color: 'gray700' }}>
          Features
        </Subheading>
        <Heading as="h4" size={4} mb={4}>
          A fully-featured styleguide. Out of the box.
        </Heading>

        <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
          Zero set-up. Just hit "publish", we'll handle the rest.
        </Text>
      </Container>

      <Container size={3} px={[null, 5, 9]}>
        <Grid sx={{ gap: [5, 8], gridTemplateColumns: ['1fr ', '1fr 1fr'] }}>
          <Box>
            <AspectRatio ratio="16:9" sx={{ maxWidth: 463, mx: 'auto' }}>
              <Card
                variant="border"
                sx={{
                  height: '100%',
                  backgroundImage: `url(${require('../public/styleguide/sg-1.png')})`,
                  backgroundSize: '463px 260px',
                  backgroundPosition: 'top left',
                }}
              />
            </AspectRatio>
            <Box px={[8, 6, 8]} pt={6}>
              <Heading size={2} mb={4}>
                Props table
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: 3 }}>
                Automatically generated component API docs, so developers can implement your design system.
              </Text>
            </Box>
          </Box>

          <Box>
            <AspectRatio ratio="16:9" sx={{ maxWidth: 463, mx: 'auto' }}>
              <Card
                variant="border"
                sx={{
                  height: '100%',
                  backgroundImage: `url(${require('../public/styleguide/sg-2.png')})`,
                  backgroundSize: '463px 260px',
                  backgroundPosition: 'top left',
                }}
              />
            </AspectRatio>
            <Box px={[8, 6, 8]} pt={6}>
              <Heading size={2} mb={4}>
                Live code editor
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: 3 }}>
                A live playground for testing and experimenting with your components. Out of the box.
              </Text>
            </Box>
          </Box>

          <Box>
            <AspectRatio ratio="16:9" sx={{ maxWidth: 463, mx: 'auto' }}>
              <Card
                variant="border"
                sx={{
                  height: '100%',
                  backgroundImage: `url(${require('../public/styleguide/sg-3.png')})`,
                  backgroundSize: '463px 260px',
                  backgroundPosition: 'top left',
                }}
              />
            </AspectRatio>
            <Box px={[8, 6, 8]} pt={6}>
              <Heading size={2} mb={4}>
                WYSIWYG editor
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: 3 }}>
                Predefined templates to flesh out your styleguide content with usage docs, brand guidelines and more.
              </Text>
            </Box>
          </Box>

          <Box>
            <AspectRatio ratio="16:9" sx={{ maxWidth: 463, mx: 'auto' }}>
              <Card
                variant="border"
                sx={{
                  height: '100%',
                  backgroundImage: `url(${require('../public/styleguide/sg-4.png')})`,
                  backgroundSize: '463px 260px',
                  backgroundPosition: 'top left',
                }}
              />
            </AspectRatio>
            <Box px={[8, 6, 8]} pt={6}>
              <Heading size={2} mb={4}>
                NPM Publishing
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: 3 }}>
                Publish your design system directly to NPM, so your engineers can hit the ground running.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>

      <Divider size={2} my={8} mx="auto" />

      <Container size={1} mb={6} px={[null, null, 0]}>
        <LegacyTestimonial
          quote='"Of all the startups I&rsquo;ve invested in, I struggle to remember one producing quality product as fast as Modulz."'
          author="Des Traynor"
          initial="D"
          url="https://twitter.com/destraynor/status/1121745686146494464"
          avatar={desAvatar}
        />
      </Container>

      <Box mt={8} mb={[8, 8, 0]} sx={{ position: 'relative', overflow: 'hidden' }}>
        <Gradient />
        <Box sx={{ bg: 'gray200' }}>
          <Container size={3}>
            <Grid sx={{ gap: [5, 8], gridTemplateColumns: ['1fr ', null, '1fr 1fr'] }}>
              <Box mt={-320} ml={-8} sx={{ position: 'relative', display: ['none', null, 'block'] }}>
                <Box sx={{ position: 'absolute' }}>
                  <VersionCard
                    date="20 Aug 2019"
                    version="2.3.6"
                    versionType="minor"
                    description="Lots of breaking changes. Removed a bunch of components which are used commonly throughout the product."
                  />
                  <VersionCard
                    date="19 Aug 2019"
                    version="2.3.5"
                    versionType="major"
                    description="Lots of breaking changes. Removed a bunch of components which are used commonly throughout the product."
                    insertions={['Button', 'Textarea', 'Progress Bar']}
                    deletions={['Slider', 'Meter', 'Date Picker']}
                    showCursor
                  />
                  <VersionCard
                    date="18 Aug 2019"
                    version="2.3.4"
                    versionType="minor"
                    description="Lots of breaking changes. Removed a bunch of components which are used commonly throughout the product."
                  />
                  <VersionCard
                    date="17 Aug 2019"
                    version="2.3.3"
                    versionType="minor"
                    description="Lots of breaking changes. Removed a bunch of components which are used commonly throughout the product."
                  />
                </Box>
              </Box>

              <Box py={8}>
                <Subheading as="h3" size={1} mb={4} sx={{ color: 'gray700' }}>
                  Versioning
                </Subheading>

                <Heading as="h3" size={4} mb={4}>
                  Advanced versioning so you stay in control
                </Heading>

                <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
                  Keep your whole team synced on your design system's progress.
                </Text>

                <Flex mt={5} sx={{ alignItems: 'center' }}>
                  <Box mr={4}>
                    <ReleaseNotesIcon />
                  </Box>
                  <Box>
                    <Heading size={1}>Release notes</Heading>
                  </Box>
                </Flex>
                <Text as="p" size={3} ml={8} sx={{ color: 'gray700', lineHeight: 2 }}>
                  Leave detailed release notes to inform teammates about insertions, deletions and updates.
                </Text>

                <Flex mt={5} sx={{ alignItems: 'center' }}>
                  <Box mr={4}>
                    <RollbacksIcon />
                  </Box>
                  <Box>
                    <Heading size={1}>Rollbacks</Heading>
                  </Box>
                </Flex>
                <Text as="p" size={3} ml={8} sx={{ color: 'gray700', lineHeight: 2 }}>
                  In case of an emergency, you can restore your design system to a previous version.
                </Text>

                <Flex mt={5} sx={{ alignItems: 'center' }}>
                  <Box mr={4}>
                    <ChangelogIcon />
                  </Box>
                  <Box>
                    <Heading size={1}>Change log</Heading>
                  </Box>
                </Flex>
                <Text as="p" size={3} ml={8} sx={{ color: 'gray700', lineHeight: 2 }}>
                  Track changes to your design system. See who is working on which components and when.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Box>
        <Gradient side="bottom" />
      </Box>

      <Container size={1} sx={{ textAlign: 'center' }}>
        <Heading as="h3" size={4} mb={4}>
          Feature overview
        </Heading>

        <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
          Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
        </Text>
      </Container>

      <Container size={2} px={[null, 6, 8]}>
        <Grid sx={{ gap: [5, 8], gridTemplateColumns: ['1fr ', '1fr 1fr'] }}>
          <Box>
            <Flex>
              <Box mr={4}>
                <PasswordIcon />
              </Box>
              <Box>
                <Heading size={1}>Password protection</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              Set a password to keep your styleguide private.
            </Text>
          </Box>

          <Box>
            <Flex>
              <Box mr={4}>
                <DomainIcon />
              </Box>
              <Box>
                <Heading size={1}>Custom domain</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              Add a professional touch to your styleguide with a custom domain.
            </Text>
          </Box>

          <Box>
            <Flex>
              <Box mr={4}>
                <VersioningIcon />
              </Box>
              <Box>
                <Heading size={1}>Versioning</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              Track every version of your design system.
            </Text>
          </Box>

          <Box>
            <Flex>
              <Box mr={4}>
                <SelfHostingIcon />
              </Box>
              <Box>
                <Heading size={1}>Self-hosting</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              We provide cloud-hosted and self-hosted options.
            </Text>
          </Box>

          <Box>
            <Flex>
              <Box mr={4}>
                <AssetManagerIcon />
              </Box>
              <Box>
                <Heading size={1}>Asset manager</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              A centralised hub to store your logo, icons and brand assets.
            </Text>
          </Box>

          <Box>
            <Flex>
              <Box mr={4}>
                <ContentBlockIcon />
              </Box>
              <Box>
                <Heading size={1}>Content blocks</Heading>
              </Box>
            </Flex>
            <Text as="p" size={4} ml={8} sx={{ color: 'gray700', lineHeight: 3 }}>
              Use predefined templates to design a flexible structure for your styleguide content.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Divider size={2} my={8} mx="auto" />

      <BetaAccess />
    </Box>
  );
};

export default Styleguide;

const Gradient = ({ side = 'top' }) => (
  <Box
    sx={{
      display: ['none', null, 'block'],
      position: 'relative',
      zIndex: 2,
      height: 200,
      backgroundImage:
        side === 'top'
          ? 'linear-gradient(to top, rgba(255, 255, 255, 0), white)'
          : 'linear-gradient(rgba(255, 255, 255, 0), white)',
    }}
  />
);

const VersionCard = ({ date, version, versionType, description, insertions, deletions, showCursor }: any) => (
  <Flex sx={{ pointerEvents: 'none', userSelect: 'none' }}>
    <Flex sx={{ flexDirection: 'column', alignItems: 'center', width: 8, position: 'relative' }}>
      <Box sx={{ width: '1px', bg: 'gray400', height: 8 }} />
      <Box sx={{ width: 3, height: 3, bg: 'gray400', borderRadius: 3, my: 1 }} />
      <Box sx={{ width: '1px', bg: 'gray400', flex: 1 }} />
    </Flex>
    <Card variant="shadow" p={3} my={5} sx={{ flex: 1, position: 'relative' }}>
      <Text as="p" size={1} mb={1} sx={{ color: 'gray700' }}>
        {date}
      </Text>
      <Heading mb={1} size={1}>
        Verion {version}{' '}
        <Badge ml={2} variant={versionType === 'major' ? 'red' : undefined} sx={{ textTransform: 'capitalize' }}>
          {versionType}
        </Badge>
      </Heading>
      <Text as="p" mb={1} sx={{ color: 'gray700', lineHeight: 1 }}>
        {description}
      </Text>
      <Text as="p" mb={1} sx={{ display: 'inline-flex', alignItems: 'center', color: 'blue600' }}>
        <Box as="span" mr={2}>
          <PlusIcon />
        </Box>{' '}
        Show release notes
      </Text>
      {insertions && deletions && (
        <Flex>
          <Box sx={{ flex: 1 }}>
            <Heading size={0} mb={1}>
              Insertions
            </Heading>
            {insertions.map((insertion) => (
              <Text key={insertion} ml={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box as="span" mr={2} sx={{ color: 'green600' }}>
                  <PlusIcon />
                </Box>{' '}
                {insertion}
              </Text>
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Heading size={0} mb={1}>
              Deletions
            </Heading>
            {deletions.map((deletion) => (
              <Text key={deletion} ml={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box as="span" mr={2} sx={{ color: 'red600' }}>
                  <MinusIcon />
                </Box>{' '}
                {deletion}
              </Text>
            ))}
          </Box>
        </Flex>
      )}
      <Divider mx={-3} my={3} />
      <Button>
        <Box as="span" mr={2}>
          <RestoreIcon />
        </Box>
        Restore
      </Button>
      {showCursor && (
        <Box sx={{ position: 'absolute', right: 120, bottom: -20 }}>
          <CursorIcon />
        </Box>
      )}
    </Card>
  </Flex>
);

const StopwatchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M26.5 29.5L22.5 25.5V17.5" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 4V10.5" stroke="#0057FF" />
    <path
      d="M17.5 4C17.2239 4 17 4.22386 17 4.5C17 4.77614 17.2239 5 17.5 5V4ZM27.5 5C27.7761 5 28 4.77614 28 4.5C28 4.22386 27.7761 4 27.5 4V5ZM17.5 5H27.5V4H17.5V5Z"
      fill="#0057FF"
    />
    <path d="M22.5 10.5V13.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 37.5V40.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 25.5H7.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14.3536 34.3536C14.5488 34.1583 14.5488 33.8417 14.3536 33.6464C14.1583 33.4512 13.8417 33.4512 13.6464 33.6464L14.3536 34.3536ZM13.6464 33.6464L11.6464 35.6464L12.3536 36.3536L14.3536 34.3536L13.6464 33.6464Z"
      fill="#66B8FF"
    />
    <path d="M37.5 25.5H34.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M30.6464 16.6464C30.4512 16.8417 30.4512 17.1583 30.6464 17.3536C30.8417 17.5488 31.1583 17.5488 31.3536 17.3536L30.6464 16.6464ZM32.6464 14.6464L30.6464 16.6464L31.3536 17.3536L33.3536 15.3536L32.6464 14.6464Z"
      fill="#66B8FF"
    />
    <path
      d="M13.6464 17.3536C13.8417 17.5488 14.1583 17.5488 14.3536 17.3536C14.5488 17.1583 14.5488 16.8417 14.3536 16.6464L13.6464 17.3536ZM11.6464 15.3536L13.6464 17.3536L14.3536 16.6464L12.3536 14.6464L11.6464 15.3536Z"
      fill="#66B8FF"
    />
    <path
      d="M31.3536 33.6464C31.1583 33.4512 30.8417 33.4512 30.6464 33.6464C30.4512 33.8417 30.4512 34.1583 30.6464 34.3536L31.3536 33.6464ZM33.3536 35.6464L31.3536 33.6464L30.6464 34.3536L32.6464 36.3536L33.3536 35.6464Z"
      fill="#66B8FF"
    />
    <path
      d="M37.5 25.5C37.5 33.7843 30.7843 40.5 22.5 40.5C14.2157 40.5 7.5 33.7843 7.5 25.5C7.5 17.2157 14.2157 10.5 22.5 10.5C30.7843 10.5 37.5 17.2157 37.5 25.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    />
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M20.5 25.5H12.5L24.5 4.5V19.5H32.5L20.5 40.5V25.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M13.5 6.5L4.5 14.5L13.5 22.5V17.5H26.5V11.5H13.5V6.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.5 30.5L31.5 22.5V27.5H18.5V33.5H31.5V38.5L40.5 30.5Z"
      stroke="#66B8FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RestoreIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 2.5C3 2.22386 2.77614 2 2.5 2C2.22386 2 2 2.22386 2 2.5H3ZM2.5 5.5H2C2 5.77614 2.22386 6 2.5 6V5.5ZM5.5 6C5.77614 6 6 5.77614 6 5.5C6 5.22386 5.77614 5 5.5 5V6ZM2 2.5V5.5H3V2.5H2ZM2.5 6H5.5V5H2.5V6Z"
      fill="currentColor"
    />
    <path
      d="M7.5 12.5C10.55 12.5 12.5 10 12.5 7.5C12.5 5 10.55 2.5 7.5 2.5C5 2.5 4 4 2.5 5.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReleaseNotesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M9.5 39.5V5.5C9.5 4.94772 9.94772 4.5 10.5 4.5H26.0546C26.3381 4.5 26.6083 4.62032 26.7979 4.83104L35.2433 14.2148C35.4086 14.3984 35.5 14.6367 35.5 14.8837V39.5C35.5 40.0523 35.0523 40.5 34.5 40.5H10.5C9.94772 40.5 9.5 40.0523 9.5 39.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.5 19.5H30.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M14.5 24.5H23.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M14.5 29.5H30.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M14.5 34.5H23.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M14.5 9.5H21.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M14.5 14.5H18.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M26.5 5V14.5H35" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RollbacksIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M26.5 29.5L22.5 25.5V17.5" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M22.5 4V10.5" stroke="#0057FF"></path>
    <path
      d="M17.5 4C17.2239 4 17 4.22386 17 4.5C17 4.77614 17.2239 5 17.5 5V4ZM27.5 5C27.7761 5 28 4.77614 28 4.5C28 4.22386 27.7761 4 27.5 4V5ZM17.5 5H27.5V4H17.5V5Z"
      fill="#0057FF"
    ></path>
    <path d="M22.5 10.5V13.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M37.5 25.5H34.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round"></path>
    <path
      d="M30.6464 16.6464C30.4512 16.8417 30.4512 17.1583 30.6464 17.3536C30.8417 17.5488 31.1583 17.5488 31.3536 17.3536L30.6464 16.6464ZM32.6464 14.6464L30.6464 16.6464L31.3536 17.3536L33.3536 15.3536L32.6464 14.6464Z"
      fill="#66B8FF"
    ></path>
    <path
      d="M13.6464 17.3536C13.8417 17.5488 14.1583 17.5488 14.3536 17.3536C14.5488 17.1583 14.5488 16.8417 14.3536 16.6464L13.6464 17.3536ZM11.6464 15.3536L13.6464 17.3536L14.3536 16.6464L12.3536 14.6464L11.6464 15.3536Z"
      fill="#66B8FF"
    ></path>
    <path d="M22.5 37.5V40.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round"></path>
    <path
      d="M31.3536 33.6464C31.1583 33.4512 30.8417 33.4512 30.6464 33.6464C30.4512 33.8417 30.4512 34.1583 30.6464 34.3536L31.3536 33.6464ZM33.3536 35.6464L31.3536 33.6464L30.6464 34.3536L32.6464 36.3536L33.3536 35.6464Z"
      fill="#66B8FF"
    ></path>
    <path
      d="M37.5 25.5C37.5 33.7843 30.7843 40.5 22.5 40.5C14.2157 40.5 7.5 33.7843 7.5 25.5C7.5 17.2157 14.2157 10.5 22.5 10.5C30.7843 10.5 37.5 17.2157 37.5 25.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    ></path>
    <path d="M7 26H22V41H7V26Z" fill="hsl(208,28%,97%)"></path>
    <path
      d="M10.0892 23H4.91084C4.51629 23 4.27718 23.4356 4.48901 23.7684L7.07817 27.8371C7.27465 28.1459 7.72535 28.1459 7.92183 27.8371L10.511 23.7684C10.7228 23.4356 10.4837 23 10.0892 23Z"
      fill="#0057FF"
    ></path>
  </svg>
);

const ChangelogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M18.5 12.5H34.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M18.5 22.5H34.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M18.5 32.5H34.5" stroke="#66B8FF" strokeLinecap="round" />
    <path
      d="M14.5 12.5C14.5 13.6046 13.6046 14.5 12.5 14.5C11.3954 14.5 10.5 13.6046 10.5 12.5C10.5 11.3954 11.3954 10.5 12.5 10.5C13.6046 10.5 14.5 11.3954 14.5 12.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    />
    <path
      d="M14.5 22.5C14.5 23.6046 13.6046 24.5 12.5 24.5C11.3954 24.5 10.5 23.6046 10.5 22.5C10.5 21.3954 11.3954 20.5 12.5 20.5C13.6046 20.5 14.5 21.3954 14.5 22.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    />
    <path
      d="M14.5 32.5C14.5 33.6046 13.6046 34.5 12.5 34.5C11.3954 34.5 10.5 33.6046 10.5 32.5C10.5 31.3954 11.3954 30.5 12.5 30.5C13.6046 30.5 14.5 31.3954 14.5 32.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    />
    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF" />
  </svg>
);

const CursorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34" fill="none">
    <g filter="url(#filter0_d)">
      <path d="M5.35289 3.12083L23.6471 16.8074L14.7189 17.3433L9.79071 24.8074L5.35289 3.12083Z" fill="black" />
      <path
        d="M23.6771 17.3065L25.0396 17.2247L23.9466 16.407L5.65241 2.72048L4.59939 1.93267L4.86304 3.22107L9.30086 24.9076L9.54286 26.0902L10.208 25.0829L14.9984 17.8274L23.6771 17.3065Z"
        stroke="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.845886"
        y="0.744514"
        width="28.5862"
        height="32.6285"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M27.5 9.5V18.5H17.5V9.5C17.5 6.73858 19.7386 4.5 22.5 4.5C25.2614 4.5 27.5 6.73858 27.5 9.5Z"
      stroke="#0057FF"
    />
    <circle cx="22.5" cy="28.5" r="12" fill="white" stroke="#0057FF" />
    <path
      d="M21.5 27.5C21.5 27.5 21.5 27.3 21.5 26.5C21.5 25.7 22.1667 25.5 22.5 25.5C22.8333 25.5 23.5 25.7 23.5 26.5V27.5"
      stroke="#0057FF"
    />
    <path d="M22.5 20.5V22.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 34.5V36.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 28.5H14.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M18.8536 32.8536C19.0488 32.6583 19.0488 32.3417 18.8536 32.1464C18.6583 31.9512 18.3417 31.9512 18.1464 32.1464L18.8536 32.8536ZM18.1464 32.1464L16.6464 33.6464L17.3536 34.3536L18.8536 32.8536L18.1464 32.1464Z"
      fill="#66B8FF"
    />
    <path d="M30.5 28.5H28.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M26.1464 24.1464C25.9512 24.3417 25.9512 24.6583 26.1464 24.8536C26.3417 25.0488 26.6583 25.0488 26.8536 24.8536L26.1464 24.1464ZM27.6464 22.6464L26.1464 24.1464L26.8536 24.8536L28.3536 23.3536L27.6464 22.6464Z"
      fill="#66B8FF"
    />
    <path
      d="M18.1464 24.8536C18.3417 25.0488 18.6583 25.0488 18.8536 24.8536C19.0488 24.6583 19.0488 24.3417 18.8536 24.1464L18.1464 24.8536ZM16.6464 23.3536L18.1464 24.8536L18.8536 24.1464L17.3536 22.6464L16.6464 23.3536Z"
      fill="#66B8FF"
    />
    <path
      d="M26.8536 32.1464C26.6583 31.9512 26.3417 31.9512 26.1464 32.1464C25.9512 32.3417 25.9512 32.6583 26.1464 32.8536L26.8536 32.1464ZM28.3536 33.6464L26.8536 32.1464L26.1464 32.8536L27.6464 34.3536L28.3536 33.6464Z"
      fill="#66B8FF"
    />
    <circle cx="22.5" cy="28.5" r="8" stroke="#66B8FF" />
    <circle cx="22.5" cy="29.5" r="2" stroke="#0057FF" />
    <rect x="22" y="27" width="1" height="2" fill="white" />
  </svg>
);

const DomainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M4.5 22.5H40.5" stroke="#0057FF" />
    <path d="M22.5 4.5V40.5" stroke="#0057FF" />
    <path d="M6 29.5C15.375 33.5 29.625 33.5 39 29.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 15.5C15.6429 11.5 29.3571 11.5 39 15.5" stroke="#66B8FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M22.5 40.5C9.16669 35.0312 9.16666 9.96875 22.5 4.5"
      stroke="#66B8FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 40.5C35.8333 35.1875 35.8332 9.8125 22.5 4.5"
      stroke="#66B8FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="22.5" cy="22.5" r="18" stroke="#0057FF" />
  </svg>
);

const VersioningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M30.5 17.5V14.8837C30.5 14.6367 30.4086 14.3984 30.2433 14.2148L21.7979 4.83104C21.6083 4.62032 21.3381 4.5 21.0546 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V39.5C4.5 40.0523 4.94772 40.5 5.5 40.5H22.5"
      stroke="#0057FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 19.5H21.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M9.5 24.5H14.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M9.5 29.5H16.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M9.5 34.5H17.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M9.5 9.5H16.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M9.5 14.5H13.5" stroke="#66B8FF" strokeLinecap="round" />
    <path d="M21.5 5V14.5H30" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33.5 33.5L30.5 30.5V25.5" stroke="#0057FF" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M40.5 30.5C40.5 36.0229 36.0229 40.5 30.5 40.5C24.9771 40.5 20.5 36.0229 20.5 30.5C20.5 24.9771 24.9771 20.5 30.5 20.5C36.0229 20.5 40.5 24.9771 40.5 30.5Z"
      stroke="#0057FF"
      strokeLinecap="round"
    />
  </svg>
);

const SelfHostingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M22.5 34V41" stroke="#0029FF" />
    <rect x="9.5" y="4.5" width="26" height="8" rx="1.5" stroke="#0029FF" />
    <rect x="12.5" y="7.5" width="7" height="2" rx="0.5" stroke="#66B8FF" />
    <rect x="9.5" y="15.5" width="26" height="8" rx="1.5" stroke="#0029FF" />
    <rect x="9.5" y="26.5" width="26" height="8" rx="1.5" stroke="#0029FF" />
    <circle cx="31.5" cy="8.5" r="1" stroke="#66B8FF" />
    <rect x="12.5" y="18.5" width="7" height="2" rx="0.5" stroke="#66B8FF" />
    <circle cx="31.5" cy="19.5" r="1" stroke="#66B8FF" />
    <rect x="12.5" y="29.5" width="7" height="2" rx="0.5" stroke="#66B8FF" />
    <circle cx="31.5" cy="30.5" r="1" stroke="#66B8FF" />
    <circle cx="26.5" cy="8.5" r="1" stroke="#66B8FF" />
    <circle cx="26.5" cy="19.5" r="1" stroke="#66B8FF" />
    <circle cx="26.5" cy="30.5" r="1" stroke="#66B8FF" />
    <path d="M9 40.5H36" stroke="#0029FF" />
  </svg>
);

const AssetManagerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path
      d="M12.474 4.5H34.526C35.481 4.5 36.1928 5.38053 35.9927 6.31429L35.0958 10.5H11.9042L11.0073 6.3143C10.8072 5.38053 11.519 4.5 12.474 4.5Z"
      stroke="#66B8FF"
    />
    <path
      d="M9.47397 10.5H37.526C38.481 10.5 39.1928 11.3805 38.9927 12.3143L38.0958 16.5H8.90421L8.00727 12.3143C7.80718 11.3805 8.51901 10.5 9.47397 10.5Z"
      stroke="#66B8FF"
    />
    <path
      d="M7.43961 16.5H39.5604C40.507 16.5 41.2169 17.366 41.0313 18.2942L36.8313 39.2942C36.691 39.9953 36.0754 40.5 35.3604 40.5H11.6396C10.9246 40.5 10.309 39.9953 10.1687 39.2942L5.96874 18.2942C5.7831 17.366 6.49304 16.5 7.43961 16.5Z"
      stroke="#0057FF"
    />
  </svg>
);

const ContentBlockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <path d="M12.5 12.5V38.5" stroke="#0029FF" />
    <path d="M28 9.5H36" stroke="#66B8FF" />
    <path d="M9 9.5H12" stroke="#66B8FF" />
    <path d="M14 9.5H17" stroke="#66B8FF" />
    <path d="M18 17.5H33" stroke="#66B8FF" />
    <path d="M18 21.5H26" stroke="#66B8FF" />
    <path d="M18 25.5H33" stroke="#66B8FF" />
    <path d="M18 29.5H26" stroke="#66B8FF" />
    <path d="M18 33.5H33" stroke="#66B8FF" />
    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF" />
    <path d="M6.5 12.5H38.5" stroke="#0029FF" />
  </svg>
);
