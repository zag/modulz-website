import React from 'react';
import Head from 'next/head';
import { Container, Box, Heading, Text } from '@modulz/radix';
// @ts-ignore
import { frontMatter as blogPosts } from './blog/*.mdx';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';

const Blog = () => {
  return (
    <React.Fragment>
      <Container size={1}>
        <Head>
          <title>Modulz Blog</title>
        </Head>

        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Blog
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          More about what we're doing.
        </Text>
      </Container>

      <Container size={2} my={8}>
        <BlogCardGrid>
          {blogPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <BlogCard frontMatter={frontMatter} />
            </Box>
          ))}
        </BlogCardGrid>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
