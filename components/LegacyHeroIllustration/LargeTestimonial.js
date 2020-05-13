import React from 'react';
import { Box, Avatar, Flexbox, Text, GhostButton } from 'radix-ds';

const LargeTestimonial = props => (
  <Box ta_center bp2_pl_6 bp2_pr_6>
    <Flexbox jc_center mb_6>
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
    </Flexbox>
    <blockquote cite="">
      <Text size4 bp1_size8 lh_3 bp1_lh_5 as="p">
        {props.quote}
      </Text>
      <Flexbox ai_center jc_center mt_5 bp1_pt_7 bp1_nmt_1 relative>
        <Box mr_3>
          <Avatar
            size3
            url={props.avatar}
            caption={props.author}
            initial={props.initial}
          />
        </Box>
        <Text size3 color_gray600>
          {props.author}
        </Text>
        <Box ml_2>
          <GhostButton
            as="a"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit tweet"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="hsl(208, 12%, 50%)"
            >
              <path
                d="M9.5 2.5H12.5V5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round" />
              <path
                d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857"
                strokeLinecap="round"
              />
            </svg>
          </GhostButton>
        </Box>
      </Flexbox>
    </blockquote>
  </Box>
);

export default LargeTestimonial;
