import React from 'react';
import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import { Container, Heading, Text, Box } from '@modulz/radix';

export default frontMatter => {
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
          {
            <Text size={1} sx={{ color: 'gray700' }}>
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          }

          <Box mt={8}>{children}</Box>
        </Container>
      </React.Fragment>
    );
  };
};
