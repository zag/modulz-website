import React from 'react';
import { Flex, Text, Button, Box } from '@modulz/radix';

export const LintingPopover = () => {
  return (
    <Flex>
      <Box>
        <Box
          sx={{
            flexShrink: 0,
            backgroundColor: 'white',
            borderRadius: '2',
            position: 'relative',
            boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
          }}
        >
          <Box
            sx={{
              padding: '4',
            }}
          >
            <Text size={2} weight="medium" mb={1} sx={{ display: 'block' }} style={{ lineHeight: '1' }}>
              Font size too small
            </Text>
            <Text as="p" size={1} mb={2} sx={{ lineHeight: '1' }}>
              Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
            </Text>
            <Flex>
              <Button mr={2}>Ignore</Button>
              <Button variant="blue">Fix</Button>
            </Flex>
          </Box>
          <Box
            sx={{
              padding: '4',
              pt: '1',
            }}
          >
            <Text size={2} weight="medium" mb={1} sx={{ display: 'block' }} style={{ lineHeight: '1' }}>
              Font size too small
            </Text>
            <Text as="p" size={1} mb={2} sx={{ lineHeight: '1' }}>
              Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
            </Text>
            <Flex>
              <Button mr={2}>Ignore</Button>
              <Button variant="blue">Fix</Button>
            </Flex>
          </Box>
          <Box
            sx={{
              padding: '4',
              pt: '1',
            }}
          >
            <Text size={2} weight="medium" mb={1} sx={{ display: 'block' }} style={{ lineHeight: '1' }}>
              Font size too small
            </Text>
            <Text as="p" size={1} mb={2} sx={{ lineHeight: '1' }}>
              Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
            </Text>
            <Flex>
              <Button mr={2}>Ignore</Button>
              <Button variant="blue">Fix</Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box>
        <Flex
          ml={4}
          sx={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4',
            width: '6',
            height: '6',
            backgroundColor: 'yellow600',
            borderRadius: '50%',
            color: 'black',
          }}
        >
          3
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6',
              height: '6',
              border: '1px solid',
              borderColor: 'yellow300',
              borderRadius: '50%',
              transform: 'scale(1.4)',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6',
              height: '6',
              border: '1px solid',
              borderColor: 'yellow200',
              borderRadius: '50%',
              transform: 'scale(1.8)',
            }}
          ></Box>
        </Flex>
      </Box>
    </Flex>
  );
};
