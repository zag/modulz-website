import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
// @ts-ignore
import { frontMatter as learnPosts } from './**/*.mdx';
import { FrontMatter } from '../../types';
import { BlogCard } from '../../components/BlogCard';
import { BlogCardGrid } from '../../components/BlogCardGrid';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Learn = () => {
  return (
    <React.Fragment>
      <Container size={1}>
        <TitleAndMetaTags title="Modulz Learn" description="Find the tutorials you need." />

        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Learn
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          Find the tutorials you need.
        </Text>
        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          And the ones you didn't think you did.
        </Text>
      </Container>

      <Container size={2} my={8}>
        <BlogCardGrid>
          {learnPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <BlogCard frontMatter={frontMatter} />
            </Box>
          ))}
        </BlogCardGrid>
      </Container>
    </React.Fragment>
  );
};

export default Learn;
