import React from 'react';
import { Box, Flex, Text, Avatar, IconButton } from '@modulz/radix';
import { ExternalLinkIcon } from '@modulz/radix-icons';

export const LegacyTestimonial = (props) => (
  <Box sx={{ textAlign: 'center' }}>
    <Flex sx={{ justifyContent: 'center' }} mb={4}>
      <QuoteIcon />
    </Flex>
    <Box as="blockquote">
      <Text as="p" sx={{ lineHeight: [3, props.large ? 4 : 3], fontSize: [5, props.large ? 8 : 6] }}>
        {props.quote}
      </Text>
      <Flex mt={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Box mr={3}>
          <Avatar size={1} src={props.avatar} children={props.initial} alt={`Photo of ${props.author}`} />
        </Box>
        <Text size={3} sx={{ color: 'gray700' }}>
          {props.author}
        </Text>
        <Box ml={2}>
          {props.url && (
            <a href={props.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${props.author}'s tweet`}>
              <IconButton as="span" sx={{ color: 'gray700' }}>
                <ExternalLinkIcon />
              </IconButton>
            </a>
          )}
        </Box>
      </Flex>
    </Box>
  </Box>
);

const QuoteIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="hsl(208, 12%, 46%)"
  >
    <path
      d="M0.5 25V7C0.5 6.72386 0.723857 6.5 1 6.5H20C20.2761 6.5 20.5 6.72386 20.5 7V25.5L15.5 38.5H4.5L9.5 25.5H1C0.723858 25.5 0.5 25.2761 0.5 25Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 25V7C24.5 6.72386 24.7239 6.5 25 6.5H44C44.2761 6.5 44.5 6.72386 44.5 7V25.5L39.5 38.5H28.5L33.5 25.5H25C24.7239 25.5 24.5 25.2761 24.5 25Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
