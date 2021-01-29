import React from 'react';
import { Container, Box, Flex } from '@modulz/radix';
import { LegacyTestimonial } from './LegacyTestimonial';
const willAvatar = require('../../public/testimonials/will-avatar.jpg');
const desAvatar = require('../../public/testimonials/des-avatar.jpg');
const jackAvatar = require('../../public/testimonials/jack-avatar.jpg');
const felipeAvatar = require('../../public/testimonials/felipe-avatar.jpg');
const jinaAvatar = require('../../public/testimonials/jina-avatar.jpg');

export const LegacyWallOfLove = () => (
  <Box my={8}>
    <Container size={3}>
      <Flex
        mt={6}
        sx={{ flexDirection: ['column', 'row'], flexGrow: 1, flexBasis: 0, justifyContent: 'space-between' }}
      >
        <Box mb={6} px={[0, 5]} mr={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"It is exceptionally hard to have a great design tool that outputs useful code. Many have tried but in the end the trade offs were too great.  That was until Modulz made it their mission."'
            author="Will Prendergast"
            initial="W"
            url="https://twitter.com/wilp/status/1341389418599489536"
            avatar={willAvatar}
          />
        </Box>

        <Box mb={6} px={[0, 5]} ml={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"I cant wait to check out Modulz, it looks so cool!"'
            author="Jina Anne"
            initial="J"
            avatar={jinaAvatar}
          />
        </Box>
      </Flex>
    </Container>

    {/* <Container size={1} mb={6} px={[null, null, 0]}>
      <LegacyTestimonial
        large
        quote='"It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."'
        author="Tony Ennis"
        initial="T"
        url="https://twitter.com/tonyennis/status/960067570987556864"
        avatar={tonyAvatar}
      />
    </Container> */}

    <Container size={1} mb={6} px={[null, null, 0]}>
      <LegacyTestimonial
        large
        quote='"Of all the startups I’ve invested in, I struggle to remember one producing quality product as fast as Modulz. Inspirational."'
        author="Des Traynor"
        initial="D"
        url="https://twitter.com/destraynor/status/1121745686146494464"
        avatar={desAvatar}
      />
    </Container>

    <Container size={3}>
      <Flex
        mb={6}
        sx={{ flexDirection: ['column', 'row'], flexGrow: 1, flexBasis: 0, justifyContent: 'space-between' }}
      >
        <Box px={[0, 5]} mb={[6, 0]} mr={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"Modulz is—with no doubt—my bet for the next big thing in tools that close the gap between design and code. Really impressive."'
            author="Felipe Pires"
            initial="F"
            url="https://twitter.com/felipeapiress/status/1341376952528154624"
            avatar={felipeAvatar}
          />
        </Box>

        <Box px={[0, 5]} mb={6} ml={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"If you’ve been stoked with everything Modulz has been putting out but are worried it’s not going to all come together into the web design tool of your dreams, don’t stress. It’s sick."'
            author="Jack Lo Russo"
            initial="J"
            url="https://twitter.com/lol_russo/status/1341303403155111936"
            avatar={jackAvatar}
          />
        </Box>
      </Flex>
    </Container>
  </Box>
);

// "It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."
// This is going to be pretty sweet I think 👍🏻 a design tool that fully embraces the fact that it's helping you work with HTML and CSS. - Adam Wathan
// Any tool that reduces friction in getting prototypes in front of customers and stakeholders is a winner, but Modulz promises even more. Empowering designers to iterate on the *actual* product they're working on, not just pictures of it — this is the future of our industry. - Jack Lo Russo
// Our workflows as digital designers don't quite fit with traditional tooling. Terribly excited to see how Modulz redefines how we think about designing for screens. - Adam Morse
// "Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry."'
// "This is one of those things, that upon first viewing, makes one question why it hasn't existed before."'

// Modulz is full of interesting ideas. Can't wait to try it out. - Koen Bok
