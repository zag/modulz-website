import React from 'react';
import { Flexbox, Box, Heading, Text, ToggleButton } from 'radix-ds';

function PropertiesFlexbox() {
  return (
    <Box padding_2>
      <Heading size1 color_gray600 mb_2>
        Flexbox
      </Heading>
      <Flexbox mt_2 jc_spacebetween>
        <ToggleButton
          group="flex-direction"
          size2
          left
          defaultChecked
          tabIndex="-1"
        >
          Row
        </ToggleButton>
        <ToggleButton group="flex-direction" size2 right tabIndex="-1">
          Column
        </ToggleButton>
      </Flexbox>
      <Flexbox mt_2>
        <ToggleButton group="flex-align" size2 left tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 4.5H4.5" strokeLinecap="round" />
            <rect x="8.5" y="4.5" width="8" height="4" />
            <rect x="8.5" y="8.5" width="8" height="4" />
          </svg>
        </ToggleButton>
        <ToggleButton
          group="flex-align"
          size2
          middle
          tabIndex="-1"
          defaultChecked
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 12.5H4.5" strokeLinecap="round" />
            <rect x="8.5" y="8.5" width="8" height="4" />
            <rect x="8.5" y="12.5" width="8" height="4" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-align" size2 middle tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 20.5H4.5" strokeLinecap="round" />
            <rect x="8.5" y="12.5" width="8" height="4" />
            <rect x="8.5" y="16.5" width="8" height="4" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-align" size2 middle tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 4.5H4.5" strokeLinecap="round" />
            <path d="M20.5 20.5H4.5" strokeLinecap="round" />
            <rect x="10.5" y="4.5" width="4" height="16" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-align" size2 right tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 20.5H4.5" strokeLinecap="round" />
            <path
              d="M20.5 13.5L17.5 17.5L14.5 13.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M17.5 7.5V17.5" strokeLinecap="round" />
            <path d="M5.5 14.5H10.5" />
            <path
              d="M4.5 17.5L8 7.5L11.5 17.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ToggleButton>
      </Flexbox>
      <Flexbox mt_2>
        <ToggleButton group="flex-justify" size2 left tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 4.5V20.5" strokeLinecap="round" />
            <rect x="4.5" y="8.5" width="4" height="8" />
            <rect x="8.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton
          group="flex-justify"
          size2
          middle
          defaultChecked
          tabIndex="-1"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 4.5V20.5" strokeLinecap="round" />
            <rect x="8.5" y="8.5" width="4" height="8" />
            <rect x="12.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-justify" size2 middle tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 4.5V20.5" strokeLinecap="round" />
            <rect x="12.5" y="8.5" width="4" height="8" />
            <rect x="16.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-justify" size2 middle tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 4.5V20.5" strokeLinecap="round" />
            <rect x="4.5" y="8.5" width="4" height="8" />
            <rect x="16.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton group="flex-justify" size2 right tabIndex="-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.5 4.5V20.5" strokeLinecap="round" />
            <path d="M4.5 4.5V20.5" strokeLinecap="round" />
            <rect x="4.5" y="8.5" width="4" height="8" />
            <rect x="16.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
      </Flexbox>
      <Flexbox mt_2 ai_center jc_spacebetween>
        <Box pr_2>
          <Text size1 gray600>
            Wrapping
          </Text>
        </Box>
        <Flexbox fg_1>
          <ToggleButton group="flex-wrap" size2 left tabIndex="-1">
            Allow
          </ToggleButton>
          <ToggleButton
            group="flex-wrap"
            size2
            right
            defaultChecked
            tabIndex="-1"
          >
            Prevent
          </ToggleButton>
        </Flexbox>
      </Flexbox>
    </Box>
  );
}

export default PropertiesFlexbox;
