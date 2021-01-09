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
import { LegacyComposerHero } from '../components/LegacyHeroIllustration/LegacyComposerHero';
import { LegacyUseCases } from '../components/LegacyHeroIllustration/LegacyUseCases';
import { LegacyWallOfLove } from '../components/LegacyHeroIllustration/LegacyWallOfLove';
import { HideInProd } from '../components/HideInProd';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container size={2} mt={6} sx={{ textAlign: 'center' }}>
        <Heading size={5} mb={3}>
          The user interface design tool
        </Heading>
      </Container>

      <Container size={2} sx={{ textAlign: 'center', px: [6, '120px'] }}>
        <Heading as="h2" size={2} mb={6} sx={{ color: 'gray700', lineHeight: '3', fontWeight: 400 }}>
          Design and prototype visually in the target medium, then handoff production code.
        </Heading>
        <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank" rel="noopener">
          Apply for beta access
          <Box as="span" ml={2} aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>

        <Box mt={3}>
          <Text as="p" size={2} sx={{ color: 'gray700', lineHeight: '1' }}>
            We're currently in private alpha.
          </Text>
        </Box>
      </Container>

      <LegacyComposerHero />
      <LegacyUseCases />
      <Divider size={2} my={8} mx="auto" />
      <LegacyWallOfLove />

      <HideInProd>
        <Divider size={2} my={8} mx="auto" />
        <Box my={8}>
          <Container size={2} sx={{ textAlign: 'center' }}>
            <Heading as="h3" size={4} mb={4}>
              Learn
            </Heading>

            <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
              Learn how to make the most out of Modulz.
            </Text>
          </Container>

          <Container size={2} sx={{ maxWidth: '1090px' }}>
            <BlogCardGrid>
              {(learnPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
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
      </HideInProd>

      <Box py={9}>
        <Container size={2} sx={{ textAlign: 'center' }}>
          <Heading as="h3" size={4} mb={4}>
            Blog
          </Heading>

          <Text as="p" size={5} mb={7} sx={{ color: 'gray700', lineHeight: 3 }}>
            More about what we're doing.
          </Text>
        </Container>

        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <BlogCardGrid>
            {(blogPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
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
