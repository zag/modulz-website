import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Flex, Link } from '@modulz/radix';
import { learnPosts } from '../utils/learnPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            The visual code editor
          </Heading>
        </Container>

        <Container size={1}>
          <Heading as="h2" size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4', fontWeight: 400 }}>
            Design, develop, document and deploy your design system—without writing code.
          </Heading>
          <Flex mt={7} sx={{ justifyContent: 'center' }}>
            <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank">
              Apply for beta access
              <Box as="span" ml={2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.5 3.5L11.5 3.5L11.5 9.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Box>
            </MarketingButton>
          </Flex>
          <Flex mt={3} sx={{ justifyContent: 'center' }}>
            <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
              We're currently in private beta.
            </Text>
          </Flex>
        </Container>
      </Box>

      <Container size={2} my={8} pb={8} sx={{ maxWidth: '1280px' }}>
        <Box>
          <img
            src="/home/editor.png"
            style={{
              display: 'block',
              maxWidth: '100%',
              boxShadow:
                'hsla(208, 28%, 12%, 0.42) 0px 60px 123px -25px, hsla(208, 25%, 10%, 0.08) 0px 35px 75px -35px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsl(208, 18%, 86%) hsl(208, 18%, 86%) hsl(210, 16%, 76%)',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>

      <Box my={8}>
        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <Heading as="h3" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            Learn
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700', letterSpacing: '-.008em' }}>
            Learn how to make the most out of Modulz.
          </Text>

          <BlogCardGrid>
            {(learnPosts as FrontMatter[])
              .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
              .slice(0, 4)
              .map(frontMatter => (
                <Box key={frontMatter.title} sx={{ flex: 1 }}>
                  <BlogCard frontMatter={frontMatter} />
                </Box>
              ))}
          </BlogCardGrid>

          <Box mt={2}>
            <NextLink href="/learn" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />
      <Box py={9}>
        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <Heading as="h3" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            Blog
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700', letterSpacing: '-.008em' }}>
            More about what we're doing.
          </Text>

          <BlogCardGrid>
            {(blogPosts as FrontMatter[])
              .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
              .slice(0, 4)
              .map(frontMatter => (
                <Box key={frontMatter.title} sx={{ flex: 1 }}>
                  <BlogCard frontMatter={frontMatter} />
                </Box>
              ))}
          </BlogCardGrid>

          <Box mt={2}>
            <NextLink href="/blog" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Home;
