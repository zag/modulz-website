import React from 'react';
import { Container, Box, Flex } from '@modulz/radix';
import { LegacyTestimonial } from './LegacyTestimonial';
const MikeAvatar = require('../../public/legacy/mike-avatar.png');
const TonyAvatar = require('../../public/legacy/tony-avatar.jpg');
const JackAvatar = require('../../public/legacy/jack-avatar.jpg');
const JinaAvatar = require('../../public/legacy/jina-avatar.png');
const SteveAvatar = require('../../public/legacy/steve-avatar.jpg');

export const LegacyWallOfLove = () => (
  <Box py={5}>
    <Container size={3}>
      <Flex
        mt={6}
        sx={{ flexDirection: ['column', 'row'], flexGrow: 1, flexBasis: 0, justifyContent: 'space-between' }}
      >
        <Box mb={6} mr={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"Modulz is one of the most exciting design tools I’ve seen. This could revolutionize design workflows."'
            author="Michael Dick"
            initial="M"
            avatar={MikeAvatar}
          />
        </Box>

        <Box mb={6} ml={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"Of all these new UI design tools coming out, I think Modulz looks the most promising. Excited to give it a try."'
            author="Steve Schoger"
            initial="S"
            url="https://twitter.com/steveschoger/status/965589237109264385"
            avatar={SteveAvatar}
          />
        </Box>
      </Flex>
    </Container>

    <Container size={2} px={6} mb={6}>
      <LegacyTestimonial
        large
        quote='"It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."'
        author="Tony Ennis"
        initial="T"
        url="https://twitter.com/tonyennis/status/960067570987556864"
        avatar={TonyAvatar}
      />
    </Container>

    <Container size={3}>
      <Flex
        mb={6}
        sx={{ flexDirection: ['column', 'row'], flexGrow: 1, flexBasis: 0, justifyContent: 'space-between' }}
      >
        <Box mb={[6, 0]} mr={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote="I can’t wait to try Modulz. It looks so cool!"
            author="Jina Anne"
            initial="J"
            avatar={JinaAvatar}
          />
        </Box>

        <Box mb={6} ml={[0, 4, 8]} sx={{ flexGrow: 1, flexBasis: 0 }}>
          <LegacyTestimonial
            quote='"Empowering designers to iterate on the *actual* product they are working on—this is the future of our industry"'
            author="Jack Lo Russo"
            initial="J"
            url="https://twitter.com/lol_russo/status/1047907911945654275"
            avatar={JackAvatar}
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
