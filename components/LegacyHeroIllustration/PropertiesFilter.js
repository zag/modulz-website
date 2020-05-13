import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  GhostButton,
  Input,
  Text,
  Select,
} from 'radix-ds';

function PropertiesFilter() {
  return (
    <Box padding_2 bt bcgray300>
      <Heading size1 color_gray600 mb_2>
        Filter
      </Heading>
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
              <rect
                x="2"
                y="2"
                width="8"
                height="8"
                rx="1"
                fill="#0088FF"
                stroke="none"
              />
              <path
                d="M11.5 5.5H12C12.2761 5.5 12.5 5.72386 12.5 6V12C12.5 12.2761 12.2761 12.5 12 12.5H6C5.72386 12.5 5.5 12.2761 5.5 12V11.5"
                strokeLinecap="round"
              />
            </svg>
          </GhostButton>
        </Box>
        <Box fs_0 pr_2>
          <Select tabIndex="-1">
            <option>Blur</option>
            <option>Brightness</option>
            <option>Contrast</option>
            <option>Grayscale</option>
            <option>Hue</option>
            <option>Invert</option>
            <option>Saturate</option>
            <option>Sepia</option>
            <option>None</option>
          </Select>
        </Box>
        <Box pr_2>
          <Box position_relative>
            <Input defaultValue="5" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              elative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
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
              <rect x="2.5" y="2.5" width="7" height="7" rx="0.5" />
              <path
                d="M11 10.5V4H12C12.5523 4 13 4.44772 13 5V12C13 12.5523 12.5523 13 12 13H5C4.44772 13 4 12.5523 4 12V11H10.5C10.7761 11 11 10.7761 11 10.5Z"
                fill="#0088FF"
                stroke="none"
              />
            </svg>
          </GhostButton>
        </Box>
        <Box fs_0 pr_2>
          <Select tabIndex="-1">
            <option>Blur</option>
            <option>Brightness</option>
            <option>Contrast</option>
            <option>Grayscale</option>
            <option>Hue</option>
            <option>Invert</option>
            <option>Saturate</option>
            <option>Sepia</option>
            <option>None</option>
          </Select>
        </Box>
        <Box pr_2>
          <Box position_relative>
            <Input defaultValue="5" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              elative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
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

export default PropertiesFilter;
