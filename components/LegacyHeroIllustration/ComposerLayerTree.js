import React from 'react';
import { Box, List } from 'radix-ds';
import Layer from './ComposerLayerNode';

function ComposerLayerTree() {
  return (
    <Box
      style={{
        overflowY: 'hidden',
      }}
    >
      <List size1>
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
        <Layer label="Button" />
      </List>
    </Box>
  );
}

export default ComposerLayerTree;
