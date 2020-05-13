import React from 'react';
import { Flexbox, Box, Heading, Select, GhostButton } from 'radix-ds';

function PropertiesTransition() {
  return (
    <Box padding_2 bt bcgray300>
      <Flexbox ai_center jc_spacebetween nmt_1 nmr_1>
        <Heading size1 color_gray600>
          Transition
        </Heading>
        <GhostButton size1 tabIndex="-1">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.5 7.5H12.5" strokeLinecap="round" />
            <path d="M7.5 12.5V2.5" strokeLinecap="round" />
          </svg>
        </GhostButton>
      </Flexbox>
      <Flexbox
        mt_2
        ai_center
        jc_spacebetween
        style={{ marginLeft: '-5px', marginRight: '-5px' }}
      >
        <Box mr_1>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 7.5V2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 12.5V11.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 3.5V2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 12.5V7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="4.5" cy="9.5" r="2" />
              <circle cx="10.5" cy="5.5" r="2" />
            </svg>
          </GhostButton>
        </Box>
        <Box fg_1 fs_0 pr_2>
          <Select defaultValue="Opacity" tabIndex="-1">
            <option>Transform</option>
            <option>Opacity</option>
            <option>Background color</option>
            <option>Color</option>
          </Select>
        </Box>
        <Box>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 12.5C4.5 12.5 2 10.5 0.5 7.50002C2 4.5 4.5 2.5 7.5 2.5C10.5 2.5 13 4.5 14.5 7.50001C13 10.5 10.5 12.5 7.5 12.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7.5" cy="7.5" r="2" />
            </svg>
          </GhostButton>
        </Box>
        <Box>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.5"
                y="4.5"
                width="6"
                height="8"
                rx="0.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path d="M3.5 4.5H11.5" strokeLinecap="round" />
              <path d="M5.5 2.5H9.5" strokeLinecap="round" />
            </svg>
          </GhostButton>
        </Box>
      </Flexbox>

      <Flexbox
        mt_2
        ai_center
        jc_spacebetween
        style={{ marginLeft: '-5px', marginRight: '-5px' }}
      >
        <Box mr_1>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 7.5V2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 12.5V11.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 3.5V2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 12.5V7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="4.5" cy="9.5" r="2" />
              <circle cx="10.5" cy="5.5" r="2" />
            </svg>
          </GhostButton>
        </Box>
        <Box fg_1 fs_0 pr_2>
          <Select defaultValue="Transform" tabIndex="-1">
            <option>Transform</option>
            <option>Opacity</option>
            <option>Background color</option>
            <option>Color</option>
          </Select>
        </Box>
        <Box>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 12.5C4.5 12.5 2 10.5 0.5 7.50002C2 4.5 4.5 2.5 7.5 2.5C10.5 2.5 13 4.5 14.5 7.50001C13 10.5 10.5 12.5 7.5 12.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7.5" cy="7.5" r="2" />
            </svg>
          </GhostButton>
        </Box>
        <Box>
          <GhostButton size1 tabIndex="-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.5"
                y="4.5"
                width="6"
                height="8"
                rx="0.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
              <path d="M3.5 4.5H11.5" strokeLinecap="round" />
              <path d="M5.5 2.5H9.5" strokeLinecap="round" />
            </svg>
          </GhostButton>
        </Box>
      </Flexbox>
    </Box>
  );
}

export default PropertiesTransition;
