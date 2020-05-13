import React from 'react';
import { Flexbox, Box, Heading, GhostButton, Input } from 'radix-ds';

function PropertiesFill() {
  return (
    <Box padding_2 bt bcgray300>
      <Flexbox ai_center jc_spacebetween nmt_1 nmr_1>
        <Heading size1 color_gray600>
          Fill
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
      <Flexbox mt_2 ai_center style={{ marginRight: '-5px' }}>
        <Box pr_2>
          <Box
            size1
            gray600
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '3px',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.05)',
              backgroundColor: 'hsl(208,99%,99%)',
            }}
          />
        </Box>
        <Box fg_1 pr_2>
          <Input defaultValue="Blue 100" readOnly tabIndex="-1" />
        </Box>
        <Flexbox ai_center>
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
        </Flexbox>
      </Flexbox>
    </Box>
  );
}

export default PropertiesFill;
