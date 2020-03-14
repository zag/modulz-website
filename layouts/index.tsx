import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { parseISO, format } from 'date-fns';
import { Container, Heading, Text, Box, Flex, Avatar, Link } from '@modulz/radix';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const articleType = router.pathname.includes('/blog/') ? 'Blog' : 'Learn';

    return (
      <React.Fragment>
        <Head>
          <title>
            {frontMatter.title} — Modulz {articleType}
          </title>
        </Head>

        <Container size={1} my={8}>
          <Heading size={4} mb={1} sx={{ fontWeight: 500 }}>
            {frontMatter.title}
          </Heading>

          <Flex mt={4} sx={{ alignItems: 'center' }}>
            <Avatar src={authors[frontMatter.by].avatar} mr={2} />
            <Text as="p" size={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {authors[frontMatter.by].name}
            </Text>
            <Separator />
            <Text as="time" size={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
            <Separator />
            <Text size={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>

          <Box my={8}>{children}</Box>
        </Container>
      </React.Fragment>
    );
  };
};

function Separator() {
  return (
    <Text mx={2} sx={{ color: 'gray700', lineHeight: 0 }}>
      &#xB7;
    </Text>
  );
}
