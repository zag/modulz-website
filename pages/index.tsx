import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Link } from '@modulz/radix';
// @ts-ignore
import { frontMatter as learnPosts } from './learn/**/*.mdx';
// @ts-ignore
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Home = () => {
  return (
    <Box py={8}>
      <TitleAndMetaTags />

      <Container size={1}>
        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          The visual code editor
        </Heading>

        <Heading as="h2" size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
          Design, develop, document and deploy your design system—without writing code.
        </Heading>
      </Container>

      <Container
        size={2}
        mt={6}
        sx={{ transform: 'perspective(75em) rotateX(18deg) rotateY(0deg) rotateZ(0deg) translateX(0px)' }}
      >
        <Box>
          <img src="/home/modulz.png" style={{ display: 'block', width: '100%' }} />
        </Box>
      </Container>

      <Container size={2}>
        <Divider my={8} mx="auto" size={2} />

        <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Learn
        </Heading>
        <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700' }}>
          Learn how to make the most out of Modulz.
        </Text>

        <BlogCardGrid>
          {(learnPosts as FrontMatter[])
            .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
            .slice(0, 3)
            .map(frontMatter => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
        </BlogCardGrid>

        <Box>
          <NextLink href="/learn" passHref>
            <Link>View all tutorials</Link>
          </NextLink>
        </Box>
      </Container>

      <Container size={2}>
        <Divider my={8} mx="auto" size={2} />

        <Heading as="h3" size={4} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Blog
        </Heading>
        <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700' }}>
          More about what we're doing.
        </Text>

        <BlogCardGrid>
          {(blogPosts as FrontMatter[])
            .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
            .slice(0, 3)
            .map(frontMatter => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
        </BlogCardGrid>

        <Box>
          <NextLink href="/blog" passHref>
            <Link>View all articles</Link>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
