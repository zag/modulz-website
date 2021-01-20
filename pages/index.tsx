import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Section,
  Paragraph,
  Text,
  Separator,
  Title,
  Subtitle,
  Flex,
  Link,
} from '@modulz/design-system';
import { learnPosts } from '../utils/learnPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';
import { LegacyComposerHero } from '../components/LegacyHeroIllustration/LegacyComposerHero';
// import { LegacyUseCases } from '../components/LegacyHeroIllustration/LegacyUseCases';
import { LegacyWallOfLove } from '../components/LegacyHeroIllustration/LegacyWallOfLove';
import { HideInProd } from '../components/HideInProd';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Container size="2" css={{ textAlign: 'center' }}>
        <Title>The user interface design tool</Title>
      </Container>

      <Container size="2" css={{ textAlign: 'center', px: [6, '120px'] }}>
        <Subtitle as="h2" css={{ mb: '$6' }}>
          Design in the target medium. Prototype with real components. Handoff production code.
        </Subtitle>
        <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank" rel="noopener">
          Apply for beta access
          <Box as="span" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 3.5L11.5 3.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </MarketingButton>

        <Box>
          <Text size="2" color="gray">
            We're currently in private alpha.
          </Text>
        </Box>
      </Container>

      <LegacyComposerHero />

      <Section size="3">
        <Container size="2">
          <Paragraph>
            Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it
            comes to websites, apps, and user interfaces, we need something more powerful.
          </Paragraph>
          <Paragraph>Modulz is optimised for designing digital products and design systems.</Paragraph>
        </Container>
      </Section>

      <Separator size="2" />

      <LegacyWallOfLove />

      <HideInProd>
        <Separator size="2" />
        <Box>
          <Container size="2" css={{ textAlign: 'center' }}>
            <Heading>Learn</Heading>

            <Text as="p" size="5" css={{ color: 'gray700', lineHeight: 3 }}>
              Learn how to make the most out of Modulz.
            </Text>
          </Container>

          <Container size="2" css={{ maxWidth: '1090px' }}>
            <BlogCardGrid>
              {(learnPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
                <Box key={frontMatter.title} css={{ flex: 1 }}>
                  <BlogCard frontMatter={frontMatter} />
                </Box>
              ))}
            </BlogCardGrid>

            <Box>
              <NextLink href="/learn" passHref>
                <Link>Browse all</Link>
              </NextLink>
            </Box>
          </Container>
        </Box>

        <Separator size="2" />
      </HideInProd>

      <Box>
        <Container size="2" css={{ textAlign: 'center' }}>
          <Heading>Blog</Heading>

          <Text as="p" size="5" css={{ color: 'gray700', lineHeight: 3 }}>
            More about what we're doing.
          </Text>
        </Container>

        <Container size="2" css={{ maxWidth: '1090px' }}>
          <BlogCardGrid>
            {(blogPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
              <Box key={frontMatter.title} css={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
          </BlogCardGrid>

          <Box>
            <NextLink href="/blog" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>
      <Separator size="2" />
      <BetaAccess />
    </Box>
  );
};

export default Home;
