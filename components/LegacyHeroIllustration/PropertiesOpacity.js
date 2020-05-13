import React from 'react';
import { Flexbox, Box, Heading, Input, Slider, Select } from 'radix-ds';

function PropertiesOpacity() {
  return (
    <Box padding_2 bt bcgray300>
      <Heading size1 color_gray600 mb_2>
        Opacity
      </Heading>
      <Flexbox mt_2 ai_center>
        <Box fg_1 fs_0 pr_4>
          <Select tabIndex="-1">
            <option>Normal</option>
            <option>Multiply</option>
            <option>Screen</option>
            <option>Overlay</option>
            <option>Darken</option>
            <option>Lighten</option>
            <option>Color dodge</option>
            <option>Color burn</option>
            <option>Hard light</option>
            <option>Soft light</option>
            <option>Difference</option>
            <option>Exclusion</option>
            <option>Hue</option>
            <option>Saturation</option>
            <option>Color</option>
            <option>Luminosity</option>
          </Select>
        </Box>
        <Box fg_1 pr_4>
          <Slider defaultValue="100" tabIndex="-1" />
        </Box>
        <Box>
          <Input
            tnum
            defaultValue="100"
            tabIndex="-1"
            style={{ width: '3ch' }}
          />
        </Box>
      </Flexbox>
    </Box>
  );
}

export default PropertiesOpacity;
