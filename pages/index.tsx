import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Container, Box, Heading, Text, CardLink, Divider, Link, Flex } from '@modulz/radix';
// @ts-ignore
import { frontMatter as blogPosts } from './learn/*.mdx';
import { FrontMatter } from '../types';

const Home = () => {
  return (
    <Box py={8}>
      <Head>
        <title>Modulz</title>
      </Head>

      <Container size={1}>
        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          The visual code editor
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          Design, develop, document and deploy your design system—without writing code.
        </Text>
      </Container>

      <Container size={2}>
        <Divider my={8} mx="auto" size={2} />

        <Heading as="h2" size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Learn
        </Heading>
        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          Learn how to make the most out of Modulz.
        </Text>

        <Flex mt={6} mb={6} mx={-3}>
          {(blogPosts as FrontMatter[])
            .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
            .map(frontMatter => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <NextLink href={frontMatter.__resourcePath.replace('.mdx', '')}>
                  <CardLink mx={3} sx={{ bg: 'transparent', userSelect: 'none' }}>
                    <Heading size={0} sx={{ fontWeight: 500 }}>
                      {frontMatter.title}
                    </Heading>
                    <Text as="p" size={1} sx={{ color: 'gray700' }}>
                      {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                    </Text>
                    <Text as="p" size={2} mt={3}>
                      {frontMatter.summary}
                    </Text>
                  </CardLink>
                </NextLink>
              </Box>
            ))}
        </Flex>

        <Box>
          <NextLink href="/learn" passHref>
            <Link>View all tutorials</Link>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
