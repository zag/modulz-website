import React from 'react';
import { Container, Box, Grid, Heading, Button, Input, IconButton, Text, Divider, Flex } from '@modulz/radix';
import { BetaAccess } from '../components/BetaAccess';
import { LintingPopover } from '../components/LintingPopover';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const DesignPage = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            The most advanced code generation in the world.
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

      <Divider mx="auto" size={2} sx={{ my: 9 }} />

      <Box py={9}>
        <Container size={1}>
        <Text
          as="h3"
          size={2}
          mb={4}
          sx={{
            textAlign: 'center',
            color: 'blue700',
            letterSpacing: '.115em',
            textTransform: 'uppercase',
            fontFamily: 'Söhne Mono'
          }}
        >
        <Text sx={{ color: 'gray500' }}>&lt;</Text> Components <Text sx={{ color: 'gray500' }}>/&gt;</Text></Text>
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
      </Box>

      <Box sx={{ py: 9 }}>
        <Box>
          <Flex sx={{ alignItems: 'center', userSelect: 'none', pb: 7 }}>
            <Box
              sx={{
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
              sx={{
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
              sx={{
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
              sx={{
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
              sx={{
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
                sx={{
                  backgroundColor: 'gray500',
                  height: '100%',
                  width: '50%',
                  borderRadius: '9999px',
                }}
              ></Box>
              <Box
                sx={{
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
              sx={{
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
                sx={{
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
              sx={{
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
                sx={{
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
                sx={{
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
                sx={{
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
                sx={{
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
              sx={{
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
                sx={{
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
                  sx={{
                    fontSize: '8',
                    color: 'gray900',
                  }}
                >
                  68%
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                flexShrink: 0,
                backgroundColor: 'gray400',
                height: '3',
                width: '6',
                borderRadius: '9999px',
                mr: '8',
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  height: '11px',
                  width: '11px',
                  margin: '2px',
                  borderRadius: '50%',
                }}
              ></Box>
            </Box>
            <Box
              sx={{
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
                sx={{
                  backgroundColor: 'gray600',
                  height: '9px',
                  width: '9px',
                  borderRadius: '50%',
                }}
              ></Box>
            </Box>
            <Box
              sx={{
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
              sx={{
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
              sx={{
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

      <Box py={9}>
        <Container size={2}>
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
            Smart Layout
          </Text>
          <Heading as="h3" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            Accelerate your design workflow with a suite of powerful layout components.
          </Heading>
          <Text
            as="p"
            size={5}
            sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Text>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <Box sx={{ position: 'relative', p: 9 }}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Box sx={{ alignSelf: 'stretch' }}>
              <Flex sx={{ height: '100%', my: -9 }}>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>

              </Flex>
            </Box>
            <Box>
              <Text
                as="h3"
                size={2}
                mb={4}
                sx={{
                  color: 'blue700',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Söhne Mono'
                }}
              >
                &lt;Design tokens/&gt;
              </Text>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500 }}>
                Maintain consistency with reusable styles
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <Box sx={{ position: 'relative', p: 9 }}>
        <Container size={3}>
          <Flex>
            <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
              <Text size={1} sx={{ fontWeight: '500' }}>Variants</Text>
            </Box>
            <Box sx={{ width: '250px', flexShrink: 0, mx: 8 }}>
                <Box sx={{ boxShadow: '0 15px 35px -10px rgba(0,0,0,.35)', borderRadius: 2 }}>
                <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', pt: 1, px: 3 }}>
                  <Text size={1} sx={{ fontWeight: '500' }}>Variants</Text>
                  <Box sx={{ mr: -2 }}>
                    <IconButton>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="currentColor"/>
                      </svg>
                    </IconButton>
                  </Box>
                </Flex>
                <Box sx={{ py: 1 }}>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3, backgroundColor: 'blue600' }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:base</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'white' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:hover</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:focus</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active:hover</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Box>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:disabled</Text>
                    </Box>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                    <Flex>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono', mr: 1 }} style={{ lineHeight: 1 }}>:hover</Text>
                      <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:icon</Text>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', mr: -2 }}>
                      <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                </Box>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', pt: 1, px: 3 }}>
                    <Text size={1} sx={{ fontWeight: '500' }}>Selector</Text>
                    <Box sx={{ mr: -2 }}>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Box>
                  </Flex>
                  <Box sx={{ py: 1 }}>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3, backgroundColor: 'blue600' }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:base</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'white' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:hover</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:focus</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active:hover</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:disabled</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Flex>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono', mr: 1 }} style={{ lineHeight: 1 }}>:hover</Text>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:icon</Text>
                      </Flex>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>

            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500 }}>
                States
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box sx={{ position: 'relative', p: 9 }}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Box sx={{ alignSelf: 'stretch' }}>
              <Flex sx={{ justifyContent: 'space-between' }}>
                <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(270,10%,45%) 0%, hsl(270,10%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(205,75%,45%) 0%, hsl(205,75%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(270,75%,45%) 0%, hsl(270,75%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(5,75%,45%) 0%, hsl(5,75%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(145,75%,45%) 0%, hsl(145,75%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                  <Box sx={{ backgroundImage: 'linear-gradient(0deg, hsl(270,75%,45%) 0%, hsl(270,75%,60%) 100%)', border: '1px solid hsl(270,75%,40%)', boxShadow: '0 3px 10px rgba(0,0,0,.25)', color: 'white', fontSize: 3, height: '35px', borderRadius: '9999px', px: 4, fontWeight: '500', display: 'inline-flex', alignItems: 'center', mb: 4 }} style={{ lineHeight: '1' }}>Button</Box>
                </Flex>
                <Box sx={{ width: '250px', flexShrink: 0, boxShadow: '0 15px 35px -10px rgba(0,0,0,.35)', borderRadius: 2 }}>
                  <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', pt: 1, px: 3 }}>
                    <Text size={1} sx={{ fontWeight: '500' }}>Variants</Text>
                    <Box sx={{ mr: -2 }}>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Box>
                  </Flex>
                  <Box sx={{ py: 1 }}>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3, backgroundColor: 'blue600' }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:base</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'white' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:hover</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:focus</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:active:hover</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Box>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:disabled</Text>
                      </Box>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1, px: 3 }}>
                      <Flex>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono', mr: 1 }} style={{ lineHeight: 1 }}>:hover</Text>
                        <Text size={1} sx={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: 'blue200', color: 'blue700', fontFamily: 'Söhne Mono' }} style={{ lineHeight: 1 }}>:icon</Text>
                      </Flex>
                      <Flex sx={{ alignItems: 'center', mr: -2 }}>
                        <Text size={1} sx={{ mr: 1, color: 'gray700' }} style={{ lineHeight: 1 }}>(27)</Text>
                        <IconButton>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </IconButton>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>

              </Flex>
            </Box>
            <Box>
              <Text
                as="h3"
                size={2}
                mb={4}
                sx={{
                  color: 'blue700',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Söhne Mono'
                }}
              >
                &lt;Variants/&gt;
              </Text>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500 }}>
                Variants
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Compound states
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Child selectors
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <Box sx={{ position: 'relative', p: 9 }}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Box sx={{ alignSelf: 'stretch' }}>
              <Flex sx={{ height: '100%', my: -9 }}>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box sx={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box sx={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>

              </Flex>
            </Box>
            <Box>
              <Text
                as="h3"
                size={2}
                mb={4}
                sx={{
                  color: 'blue700',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Söhne Mono'
                }}
              >
                &lt;Design tokens/&gt;
              </Text>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500 }}>
                Maintain consistency with reusable styles
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex sx={{ pt: 3 }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size={3} sx={{ fontWeight: '500', lineHeight: '2', mt: 2, ml: 2 }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box sx={{ pl: 7 }}>
                <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: '2', ml: 2 }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
        <Box sx={{ width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'hsl(52, 100%, 50%)', position: 'absolute', left: '-200px', top: '0' }}></Box>
        <Box sx={{ width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'hsl(185, 100%, 18%)', position: 'absolute', right: '-200px', top: '200px' }}></Box>
      </Box>

      <Divider mx="auto" size={2} />

      <Box py={9}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Box>
              <LintingPopover />
            </Box>
            <Box>
              <Heading as="h3" size={2} mb={3} sx={{ fontWeight: 500 }}>
                Design Linting
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3' }}>
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

export default DesignPage;
