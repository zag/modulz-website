import React from 'react';
import { Title, Subtitle, Container, Box, Grid, Code, Heading, Badge, Section, Button, Paragraph, Input, IconButton, Text, Separator, Flex, Kbd } from '@modulz/design-system';
import { ArrowUpIcon, ArrowRightIcon, ArrowDownIcon, ArrowLeftIcon } from '@modulz/radix-icons';
import { LegacyComposerHero } from '../components/LegacyHeroIllustration/LegacyComposerHero';
import { BetaAccess } from '../components/BetaAccess';
import { LintingPopover } from '../components/LintingPopover';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const DesignPage = () => {
  return (
    <Section size="2">
      <TitleAndMetaTags />
      
      <Container size="3">
        <Title css={{ textAlign: 'center', mb: '$3', px: 100 }}>
          Prototype with real components. Out of the box.
        </Title>
      </Container>
      <Container size="2">
        <Subtitle css={{ textAlign: 'center' }}>
          No more clumsy overlays. No more wiring things up. <br /> Just insert a component, style it, done.
        </Subtitle>
      </Container>

      <LegacyComposerHero />    

      <Section size="2">
        <Box>
          <Flex css={{ alignItems: 'center', userSelect: 'none', pb: '$7' }}>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '$gray200',
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                mr: '$8',
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
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
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
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
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
                px: '$2',
                height: '$4',
                fontSize: '$1',
                border: '1px solid',
                borderColor: '$gray300',
                color: 'gray700',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
              }}
            >
              Badge
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: '$gray200',
                height: 3,
                width: 100,
                borderRadius: '$pill',
                position: 'relative',
                mr: '$8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'gray500',
                  height: '100%',
                  width: '50%',
                  borderRadius: '$pill',
                }}
              ></Box>
              <Box
                css={{
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: '$gray300',
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
                backgroundColor: '$gray200',
                height: '$2',
                width: 150,
                borderRadius: '$pill',
                position: 'relative',
                mr: '$8',
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
                borderRadius: '$2',
                position: 'relative',
                py: '$2',
                mr: '$8',
                boxShadow:
                  '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                This is a menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                Second menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                Menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
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
                mr: '$8',
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
                    fontSize: '$8',
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
                height: '$3',
                width: '$6',
                borderRadius: '$pill',
                mr: '$8',
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
                mr: '$8',
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
                mr: '$8',
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
                height: '$6',
                width: '$6',
                border: '1px solid',
                borderColor: '$gray300',
                borderRadius: '50%',
                fontSize: '$3',
                color: 'gray700',
                mr: '$8',
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
                mr: '$8',
              }}
            >
              Alert
            </Box>
          </Flex>
        </Box>
      </Section>

      <Section size="1">
        <Box>
          <Flex css={{ alignItems: 'center', userSelect: 'none', pb: '$7' }}>
            <Box
              css={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '$gray200',
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                mr: '$8',
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
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
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
                px: '$3',
                height: '$6',
                fontSize: '$3',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
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
                px: '$2',
                height: '$4',
                fontSize: '$1',
                border: '1px solid',
                borderColor: '$gray300',
                color: 'gray700',
                fontWeight: 500,
                borderRadius: '$pill',
                mr: '$8',
              }}
            >
              Badge
            </Box>
            <Box
              css={{
                flexShrink: 0,
                backgroundColor: '$gray200',
                height: 3,
                width: 100,
                borderRadius: '$pill',
                position: 'relative',
                mr: '$8',
              }}
            >
              <Box
                css={{
                  backgroundColor: 'gray500',
                  height: '100%',
                  width: '50%',
                  borderRadius: '$pill',
                }}
              ></Box>
              <Box
                css={{
                  backgroundColor: 'white',
                  border: '1px solid',
                  borderColor: '$gray300',
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
                backgroundColor: '$gray200',
                height: '$2',
                width: 150,
                borderRadius: '$pill',
                position: 'relative',
                mr: '$8',
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
                borderRadius: '$2',
                position: 'relative',
                py: '$2',
                mr: '$8',
                boxShadow:
                  '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
              }}
            >
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                This is a menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                Second menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
                }}
              >
                Menu item
              </Box>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '$6',
                  height: '$6',
                  fontSize: '$2',
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
                mr: '$8',
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
                    fontSize: '$8',
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
                height: '$3',
                width: '$6',
                borderRadius: '$pill',
                mr: '$8',
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
                mr: '$8',
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
                mr: '$8',
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
                height: '$6',
                width: '$6',
                border: '1px solid',
                borderColor: '$gray300',
                borderRadius: '50%',
                fontSize: '$3',
                color: 'gray700',
                mr: '$8',
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
                mr: '$8',
              }}
            >
              Alert
            </Box>
          </Flex>
        </Box>
      </Section>
      
      <Container size="3">
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$6' }}>
        <Box>
          <Flex css={{ ai: 'center', jc: 'center', width: '$7', height: '$7', backgroundColor: '$blue200', borderRadius: '$round', mb: '$4' }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.1" d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z" fill="var(--colors-blue900)"></path><path opacity="0.15" d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" fill="var(--colors-blue900)"></path><path d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94" stroke="var(--colors-blue900)" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Flex>
          <Text size="5" css={{ fontWeight: 500, lineHeight: '23px', mb: '$2' }}>Keyboard accessible</Text>
          <Text variant="gray" css={{ lineHeight: '25px' }}>Keyboard hotkeys like <Kbd>ESC</Kbd>, <Kbd>Tab</Kbd>, <Kbd><ArrowUpIcon /></Kbd>, <Kbd><ArrowRightIcon /></Kbd>, <Kbd><ArrowDownIcon /></Kbd> and <Kbd><ArrowLeftIcon /></Kbd> work out of the box.</Text>
        </Box>

        <Box>
          <Flex css={{ ai: 'center', jc: 'center', width: '$7', height: '$7', backgroundColor: '$blue200', borderRadius: '$round', mb: '$4' }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.1" d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z" fill="var(--colors-blue900)"></path><path opacity="0.15" d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" fill="var(--colors-blue900)"></path><path d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94" stroke="var(--colors-blue900)" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Flex>
          <Text size="5" css={{ fontWeight: 500, lineHeight: '23px', mb: '$2' }}>Collision Detection</Text>
          <Text variant="gray" css={{ lineHeight: '25px' }}>Stitches has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.</Text>
        </Box>

        <Box>
          <Flex css={{ ai: 'center', jc: 'center', width: '$7', height: '$7', backgroundColor: '$blue200', borderRadius: '$round', mb: '$4' }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.1" d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z" fill="var(--colors-blue900)"></path><path opacity="0.15" d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" fill="var(--colors-blue900)"></path><path d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94" stroke="var(--colors-blue900)" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Flex>
          <Text size="5" css={{ fontWeight: 500, lineHeight: '23px', mb: '$2' }}>Focus Trapping</Text>
          <Text variant="gray" css={{ lineHeight: '25px' }}>Stitches has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.</Text>
        </Box>

        <Box>
          <Flex css={{ ai: 'center', jc: 'center', width: '$7', height: '$7', backgroundColor: '$blue200', borderRadius: '$round', mb: '$4' }}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.1" d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z" fill="var(--colors-blue900)"></path><path opacity="0.15" d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" fill="var(--colors-blue900)"></path><path d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z" stroke="var(--colors-blue900)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94" stroke="var(--colors-blue900)" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Flex>
          <Text size="5" css={{ fontWeight: 500, lineHeight: '23px', mb: '$2' }}>Keyboard accessible</Text>
          <Text variant="gray" css={{ lineHeight: '25px' }}>Stitches has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.</Text>
        </Box>

      </Grid>
      </Container>

      <BetaAccess />
    </Section>
  );
};

export default DesignPage;
