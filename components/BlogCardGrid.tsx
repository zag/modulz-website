import React from 'react';
import { Grid } from '@modulz/design-system';

export const BlogCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      css={{
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 3,
        '& ul': { listStyle: 'none', margin: 0, padding: 0 },
      }}
    >
      {children}
    </Grid>
  );
};
