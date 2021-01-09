import React from 'react';
import { Container, Box, Heading, Link, Text, Separator, Paragraph, Flex, Grid } from '@modulz/design-system';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { authors } from '../data/authors';

const About = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="About"
        description="Our mission is to fix the disconnect between digital product teams."
      />

      <Container size="2">
        <Text as="h2" size="8">
          Our mission is to fix the disconnect between digital product teams.
        </Text>
      </Container>

      <Container size="1">
        <Paragraph>
          To reduce bottlenecks by building modern design tools which empower whole teams to collaborate.
        </Paragraph>
        <Paragraph>
          To encourage inclusive digital products by automating accessibility and performance.
        </Paragraph>
        <Paragraph>
          To save companies time and money by minimizing duplicate work.
        </Paragraph>
        <Paragraph>
          To get everyone collaborating on their products. Together.
        </Paragraph>
      </Container>

      <Separator size="2" />

      <Container size="2">
        <Heading>
          Our journey so far
        </Heading>

        <Flex>
          <Box css={{ flexGrow: 1, flexBasis: 0 }}>
            <Box>
              <Text as="p" size="4" css={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                November '18
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                January '19
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                August '19
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                December '20
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ color: 'gray700', lineHeight: 2, textAlign: 'right' }}>
                April '21
              </Text>
            </Box>
          </Box>
          <Box px={6} aria-hidden>
            <Box css={{ width: '1px', bg: 'gray300' }}>
              <Flex
              
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
              
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
              
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
              
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'gray200',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              >
                <TickIcon />
              </Flex>
              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'gray300',
                  bg: 'white',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-12px',
                }}
              />
            </Box>
          </Box>
          <Box css={{ flexGrow: 1, flexBasis: 0 }}>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                $36k on Kickstarter
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                Founded Modulz
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                Raised $5M funding
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                Private alpha release
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: 2 }}>
                Private beta release
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>

      <Separator my={8} size="2" />

      <Container size="2" css={{ textAlign: 'center' }}>
        <Heading as="h3" size="4" mb={4}>
          Team
        </Heading>

        <Text as="p" size="5" mb={7} css={{ color: 'gray700', lineHeight: 3 }}>
          Who we are and what we do.
        </Text>
      </Container>

      <Container size="3">
        <Grid css={{ gap: [5, 7], gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'] }}>
          {Object.entries(authors).map(([key, author]) => (
            <Box>
              <Box>
                <Box
                  css={{
                    height: '100%',
                    backgroundImage: `url(${author.mug})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1)',
                  }}
                />
              </Box>
              <Box mt={4} px={[0, 2]}>
                <Text as="p" size="4" weight="medium" mb={1}>
                  {author.name}
                </Text>
                <Flex css={{ alignItems: 'center' }} mt={2}>
                  <Link
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${author.name}'s twitter account`}
                  >
                    <Text size="2">Twitter</Text>
                    <Box as="span" ml={1} css={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M5.5 3.5L11.5 3.5L11.5 9.5"
                          stroke="hsl(208,12%,46%)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.5 11.5L11.5 3.5"
                          stroke="hsl(208,12%,46%)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Link>
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>

      <Separator my={8} size="2" />

      <BetaAccess />
    </Box>
  );
};

export default About;

const TickIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
    <path d="M12.5 3.5L6.5 11.5L2.5 8.5" stroke="hsl(208,12%,46%)" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
