import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Container, Box, Heading, Text, CardLink } from '@modulz/radix';
import { frontMatter as blogPosts } from './learn/*.mdx';

const Home = () => {
  return (
    <Container size={1}>
      <Head>
        <title>Modulz Learn</title>
      </Head>

      <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
        Learn
      </Heading>

      <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
        Find the tutorials you need.
      </Text>
      <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
        And the ones you didn't think you did.
      </Text>

      <Container size={0} my={8}>
        {blogPosts.map(post => (
          <Box my={4} key={post.title}>
            <NextLink href={post.__resourcePath.replace('.mdx', '')}>
              <CardLink variant="ghost" sx={{ bg: 'transparent', userSelect: 'none' }}>
                <Heading size={0} sx={{ fontWeight: 500 }}>
                  {post.title}
                </Heading>
                <Text as="p" size={1} sx={{ color: 'gray700' }}>
                  {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                </Text>
                <Text as="p" size={2} mt={3}>
                  {post.title}
                </Text>
              </CardLink>
            </NextLink>
          </Box>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
