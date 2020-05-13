import React from 'react';
import { Flexbox, Box } from 'radix-ds';

import LivePreview from './LivePreview';

function ComposerPreview() {
  return (
    <Box
      p3
      fg_1
      style={{
        overflow: 'hidden',
      }}
    >
      <Flexbox height_100 ai_flexStart>
        <Box
          border
          gray400
          mr_3
          fs_0
          style={{
            width: '320px',
            height: '568px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden',
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr_3
          fs_0
          style={{
            width: '188px',
            height: '406px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden',
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr_3
          fs_0
          style={{
            width: '384px',
            minHeight: '512px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden',
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr_3
          fs_0
          style={{
            width: '640px',
            minHeight: '450px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden',
          }}
        >
          <LivePreview />
        </Box>
      </Flexbox>
    </Box>
  );
}

export default ComposerPreview;
