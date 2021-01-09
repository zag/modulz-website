import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Card, Heading, Text, Flex, Avatar, Box } from '@modulz/design-system';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';

export const BlogCard = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <NextLink href={`/${frontMatter.id}`} passHref>
      <Card
        css={{
          backgroundColor: 'transparent',
          userSelect: 'none',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading css={{ fontWeight: 500 }}>
          {frontMatter.title}
        </Heading>

        <Text as="p" size="3" css={{ color: 'gray700' }}>
          {frontMatter.summary}
        </Text>

        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Flex css={{ alignItems: 'center' }}>
            <Avatar src={authors[frontMatter.by].avatar} alt={`Photo of ${authors[frontMatter.by].name}`} />
            <Text as="p" size="2" css={{ color: 'gray700', lineHeight: 0 }}>
              {authors[frontMatter.by].name}
            </Text>
          </Flex>
          <Box>
            <Text as="p" size="2" css={{ color: 'gray700' }}>
              {format(parseISO(frontMatter.publishedAt), 'MMMM ‘yy')}
            </Text>
          </Box>
        </Flex>
      </Card>
    </NextLink>
  );
};
