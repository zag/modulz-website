import React from 'react';
import { Flexbox, Box, Heading, Select, GhostButton } from 'radix-ds';

function States() {
  return (
    <Box padding_2 bc_gray200 bb bcgray400>
      <Flexbox ai_center nmt_1 nmr_1>
        <Heading size1 color_gray600 mr_2>
          State
        </Heading>
        <Box fg_1 mr_1>
          <Select defaultValue="Normal" tabIndex="-1">
            <option>Normal</option>
            <option>Hover</option>
            <option>Focused</option>
            <option>Pressed</option>
          </Select>
        </Box>
        <GhostButton size1 tabIndex="-1">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="2.5" r="1.5" />
            <circle cx="7.5" cy="7.5" r="1.5" />
            <circle cx="7.5" cy="12.5" r="1.5" />
          </svg>
        </GhostButton>
      </Flexbox>
    </Box>
  );
}

export default States;
