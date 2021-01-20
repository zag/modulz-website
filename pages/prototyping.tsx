import React from 'react';
import { Container, Box, Grid, Heading, Badge, Section, Button, Paragraph, Input, IconButton, Text, Separator, Flex } from '@modulz/design-system';
import { BetaAccess } from '../components/BetaAccess';
import { LintingPopover } from '../components/LintingPopover';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const DesignPage = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size="2">
          <Heading size="5" mb={4} css={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            The most advanced code generation in the world.
          </Heading>

          <Heading as="h2" size="2" weight="normal" css={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Style your component library, from color to shadows to animations—without writing code.
          </Heading>
        </Container>
      </Box>

      <Container size="2" css={{ maxWidth: '1280px' }}>
        <Flex mb={7} css={{ justifyContent: 'space-around' }}>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" mb={1} css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Panes
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" mb={1} css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Variants
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '1' }}>
            <Text as="p" size="2" mb={1} css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Parts
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" mb={1} css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Properties
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
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

      <Separator mx="auto" size="2" css={{ my: 9 }} />

      <Box py={9}>
        <Container size="1">
        <Text
          as="h3"
          size="2"
          mb={4}
          css={{
            textAlign: 'center',
            color: '$blue700',
            letterSpacing: '.115em',
            textTransform: 'uppercase',
            fontFamily: 'Söhne Mono'
          }}
        >
        <Text css={{ color: 'gray500' }}>&lt;</Text> Components <Text css={{ color: 'gray500' }}>/&gt;</Text></Text>
          <Heading as="h3" size="4" mb={3} css={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            The most advanced component library ever built.
          </Heading>
          <Text
            as="p"
            size="5"
            css={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Text>
        </Container>
      </Box>

      <Box css={{ py: 9 }}>
        <Box>
          <Flex css={{ alignItems: 'center', userSelect: 'none', pb: 7 }}>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'gray200',
                px: '3',
                height: '6',
                fontSize: '3',
                fontWeight: '500',
                mr: '8',
              }}
            >
              Button
            </Box>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(0deg, hsl(270,85%,50%) 0%, hsl(270,85%,65%) 100%)',
                px: '3',
                height: '6',
                fontSize: '3',
                fontWeight: '500',
                borderRadius: '9999px',
                mr: '8',
              }}
            >
              Button
            </Box>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(0deg, hsl(270,85%,50%) 0%, hsl(270,85%,65%) 100%)',
                px: '3',
                height: '6',
                fontSize: '3',
                fontWeight: '500',
                borderRadius: '9999px',
                mr: '8',
                color: 'white'
              }}
            >
              Button
            </Box>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                px: '2',
                height: '4',
                fontSize: '1',
                border: '1px solid',
                borderColor: 'gray300',
                color: 'gray700',
                fontWeight: '500',
                borderRadius: '9999px',
                mr: '8',
              }}
            >
              Badge
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: 'gray200',
                height: '3px',
                width: '100px',
                borderRadius: '9999px',
                position: 'relative',
                mr: '8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'gray500',
                  height: '100%',
                  width: '50%',
                  borderRadius: '9999px',
                }}
              ></Box>
              <Box
                css={{
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: 'gray300',
                  boxShadow: '0 1px 3px rgba(0,0,0,.05)',
                  height: '15px',
                  width: '15px',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '50%',
                  marginLeft: '-7px',
                  top: '-5px',
                }}
              ></Box>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: 'gray200',
                height: '2',
                width: '150px',
                borderRadius: '9999px',
                position: 'relative',
                mr: '8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'gray500',
                  backgroundImage:
                    'linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)',
                  height: '100%',
                  width: '50%',
                  borderRadius: '9999px 0 0 9999px',
                }}
              ></Box>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: 'white',
                borderRadius: '2',
                position: 'relative',
                py: '2',
                mr: '8',
                boxShadow:
                  '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '6',
                  height: '6',
                  fontSize: '2',
                }}
              >
                This is a menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '6',
                  height: '6',
                  fontSize: '2',
                }}
              >
                Second menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '6',
                  height: '6',
                  fontSize: '2',
                }}
              >
                Menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '6',
                  height: '6',
                  fontSize: '2',
                }}
              >
                Another menu item
              </Box>
            </Box>
            <Box
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: 'conic-gradient(hsl(208,10%,75%) 68%, hsl(210,15%,90%) 0)',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                mr: '8',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  width: '138px',
                  height: '138px',
                  borderRadius: '50%',
                }}
              >
                <Box
                  css={{
                    fontSize: '8',
                    color: 'gray900',
                  }}
                >
                  68%
                </Box>
              </Box>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: 'gray400',
                height: '3',
                width: '6',
                borderRadius: '9999px',
                mr: '8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'white',
                  height: '11px',
                  width: '11px',
                  margin: '2px',
                  borderRadius: '50%',
                }}
              ></Box>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '5',
                width: '5',
                border: '1px solid',
                borderColor: 'gray400',
                borderRadius: '50%',
                mr: '8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'gray600',
                  height: '9px',
                  width: '9px',
                  borderRadius: '50%',
                }}
              ></Box>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '5',
                width: '5',
                border: '1px solid',
                borderColor: 'gray400',
                borderRadius: '1',
                mr: '8',
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box
              css={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '6',
                width: '6',
                border: '1px solid',
                borderColor: 'gray300',
                borderRadius: '50%',
                fontSize: '3',
                color: 'gray700',
                mr: '8',
              }}
            >
              A
            </Box>
            <Box
              css={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '5',
                px: 1,
                border: '1px solid',
                borderColor: 'gray400',
                borderRadius: '1',
                mr: '8',
              }}
            >
              Alert
            </Box>
          </Flex>
        </Box>
      </Box>

      <BetaAccess />
    </Box>
  );
};

export default DesignPage;
