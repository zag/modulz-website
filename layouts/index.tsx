import React from 'react';
import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import { Container, Heading, Text, Box, Flex, Avatar } from '@modulz/radix';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    return (
      <React.Fragment>
        <Head>
          <title>{frontMatter.title} — Modulz Learn</title>
        </Head>

        <Container size={1}>
          <Heading size={5} mb={1} sx={{ fontWeight: 500 }}>
            {frontMatter.title}
          </Heading>

          <Flex mt={2} sx={{ alignItems: 'center' }}>
            <Avatar src={authors[frontMatter.by].avatar} mr={2} />
            <Text size={1} sx={{ color: 'gray700', lineHeight: 0 }}>
              By {authors[frontMatter.by].name} <br />
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>

          <Box mt={8}>{children}</Box>
        </Container>
      </React.Fragment>
    );
  };
};
