import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Theme } from 'radix-ds';
import PropertiesFlexbox from './PropertiesFlexbox';
import PropertiesPadding from './PropertiesPadding';
import PropertiesShadow from './PropertiesShadow';
import PropertiesDimensions from './PropertiesDimensions';
import PropertiesFill from './PropertiesFill';
import PropertiesOpacity from './PropertiesOpacity';
import PropertiesText from './PropertiesText';
import PropertiesPin from './PropertiesPin';
import PropertiesTransform from './PropertiesTransform';
import PropertiesTransition from './PropertiesTransition';

const PropertiesAnimation = keyframes`
  100% {
    transform: translateY(-900px);
  }
`;

const AnimatedProperties = styled.div`
  transform: translateY(0);
  @media screen and (min-width: ${Theme.BREAKPOINT_100}) {
    animation: ${PropertiesAnimation} 9s cubic-bezier(0.445, 0.05, 0.55, 0.95)
      infinite;
    animation-direction: alternate;
  }
`;

function ComposerProperties() {
  return (
    <Box overflow_hidden>
      <AnimatedProperties>
        <PropertiesFlexbox />
        <PropertiesDimensions />
        <PropertiesPadding />
        <PropertiesFill />
        <PropertiesOpacity />
        <PropertiesText />
        <PropertiesShadow />
        <PropertiesPin />
        <PropertiesTransform />
        <PropertiesTransition />
      </AnimatedProperties>
    </Box>
  );
}

export default ComposerProperties;
