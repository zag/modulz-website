import React from 'react';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Container, Heading, Text, Box, Flex, Avatar, Link, Separator, TextProps } from '@modulz/design-system';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { blogPosts } from '../utils/blogPosts';
import { learnPosts } from '../utils/learnPosts';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';

const allPosts = [...blogPosts, ...learnPosts];

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default ({ children, frontMatter }: LayoutProps) => {
  const router = useRouter();

  const articleType = router.pathname.includes('/blog/') ? 'BLOG' : 'LEARN';

  const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @${authors[frontMatter.by].twitter} on @modulz ${
    articleType === 'BLOG' ? 'blog' : 'learning blog'
  }
		.&url=https://modulz.app${router.route}
		`;

  return (
    <React.Fragment>
      <TitleAndMetaTags title={frontMatter.title} description={frontMatter.summary} poster={frontMatter.poster} />

      <Container size="2">
        <Heading>
          {frontMatter.title}
        </Heading>

        <Flex css={{ alignItems: 'center' }}>
          <Avatar src={authors[frontMatter.by].avatar} mr={2} />
          <Text as="p" size="2" css={{ display: ['none', 'block'], color: 'gray700', lineHeight: 0 }}>
            {authors[frontMatter.by].name}
          </Text>
          <Bullet css={{ display: ['none', 'block'] }} />
          <Text as="time" size="2" css={{ color: 'gray700', lineHeight: 0 }}>
            {format(parseISO(frontMatter.publishedAt), 'MMMM yyyy')}
          </Text>
          <Bullet />
          <Text size="2" css={{ color: 'gray700', lineHeight: 0 }}>
            {frontMatter.readingTime.text}
          </Text>
        </Flex>

        <Box>{children}</Box>

        <Separator size="2" />

        <Box css={{ textAlign: 'center' }}>
          <Text as="p" size="3" css={{ lineHeight: 2 }}>
            Share this post on{' '}
            <Link href={twitterShare} variant="blue" target="_blank" title="Share this post on Twitter">
              Twitter
            </Link>
          </Text>
        </Box>
      </Container>

      {Boolean(frontMatter.relatedIds) && (
        <Container size="2" css={{ maxWidth: '1090px' }}>
          <Separator size="2" />
          <Box>
            <Text
              as="h3"
              size="2"
              css={{
                textAlign: 'center',
                color: 'gray700',
                letterSpacing: '.125em',
                textTransform: 'uppercase',
              }}
            >
              Related articles
            </Text>

            <BlogCardGrid>
              {allPosts.map((_frontMatter: FrontMatter) => {
                return frontMatter.relatedIds.includes(_frontMatter.id) ? (
                  <BlogCard key={_frontMatter.id} frontMatter={_frontMatter} />
                ) : null;
              })}
            </BlogCardGrid>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};

function Bullet({ css }: TextProps) {
  return (
    <Text css={{ color: 'gray700', lineHeight: 0, mx: '$1', ...css }} aria-hidden>
      &#xB7;
    </Text>
  );
}
