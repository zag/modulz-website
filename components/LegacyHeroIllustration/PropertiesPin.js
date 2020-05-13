import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  GhostButton,
  Input,
  AspectRatio,
  Text,
  Tooltip,
  ToggleButton,
} from 'radix-ds';

function PropertiesFill() {
  return (
    <Box padding_2 bt bcgray300>
      <Heading size1 color_gray600 mb_2>
        Pin
      </Heading>
      <Flexbox mt_2>
        <Tooltip data-tooltip="Static" data-position="bottom">
          <ToggleButton
            group="position"
            size2
            left
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
              <path
                d="M5.5 7.5V5.5H7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 19.5H5.5V17.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 17.5V19.5H17.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M10.5 5.5H14.5" strokeLinecap="round" />
              <path d="M10.5 19.5H14.5" strokeLinecap="round" />
              <path d="M5.5 14.5V10.5" strokeLinecap="round" />
              <path d="M19.5 14.5V10.5" strokeLinecap="round" />
              <path
                d="M17.5 5.5H19.5V7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ToggleButton>
        </Tooltip>
        <Tooltip data-tooltip="Relative" data-position="bottom">
          <ToggleButton group="position" size2 middle tabIndex="-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V5C4.5 4.72386 4.72386 4.5 5 4.5H13C13.2761 4.5 13.5 4.72386 13.5 5V8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="11"
                y="11"
                width="10"
                height="10"
                rx="1"
                fill="#0088FF"
                stroke="none"
              />
            </svg>
          </ToggleButton>
        </Tooltip>
        <Tooltip data-tooltip="Absolute" data-position="bottom">
          <ToggleButton group="position" size2 middle tabIndex="-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14L5.5 15.5L12.5 19.5L19.5 15.5L17 14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 13.5L19.5 9.5L12.5 5.5L5.5 9.5L12.5 13.5Z"
                fill="#0088FF"
                stroke="#0088FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ToggleButton>
        </Tooltip>
        <Tooltip data-tooltip="Fixed" data-position="bottom">
          <ToggleButton group="position" size2 middle>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 9V5C10.5 4.72386 10.7239 4.5 11 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V9C16.5 9.8 17.3333 12.3333 17.5 13.5H7.5C7.5 11.1 9.5 9.5 10.5 9Z"
                fill="#008BFF"
                stroke="#0088FF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 20.5L12.0257 20.6581C12.0937 20.8623 12.2848 21 12.5 21C12.7152 21 12.9063 20.8623 12.9743 20.6581L12.5 20.5ZM11.5 17.5H11C11 17.5537 11.0087 17.6071 11.0257 17.6581L11.5 17.5ZM13.5 17.5L13.9743 17.6581C13.9913 17.6071 14 17.5537 14 17.5H13.5ZM12.9743 20.3419L11.9743 17.3419L11.0257 17.6581L12.0257 20.6581L12.9743 20.3419ZM12 17.5V14H11V17.5H12ZM12.9743 20.6581L13.9743 17.6581L13.0257 17.3419L12.0257 20.3419L12.9743 20.6581ZM14 17.5V14H13V17.5H14Z"
                fill="currentColor"
              />
            </svg>
          </ToggleButton>
        </Tooltip>
        <Tooltip data-tooltip="Sticky" data-position="bottom">
          <ToggleButton group="position" size2 right tabIndex="-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 16.5L12.5 20.5L5.5 16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12.5L19.5 8.5L12.5 4.5L5.5 8.5L12.5 12.5Z"
                fill="#0088FF"
                stroke="#008BFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M5.5 12.5L8 14" strokeLinecap="round" />
              <path
                d="M19.5 12.5L17 14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 15L12.5 16.5L15 15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ToggleButton>
        </Tooltip>
      </Flexbox>

      <Flexbox mt_2 ai_center>
        <Box fg_1 fb_0 pr_2>
          <Box position_relative>
            <Input defaultValue="0" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              relative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                color_gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
        </Box>
        <Box fg_1 fb_0 pr_2>
          <Box position_relative>
            <Input defaultValue="0" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              relative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                color_gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
          <Flexbox padding_3>
            <AspectRatio style={{ width: '100%' }}>
              <Flexbox
                fd_column
                height_100
                jc_spacebetween
                style={{ border: '1px dashed lightgray' }}
              >
                <Flexbox jc_spacebetween style={{ marginTop: '-6px' }}>
                  <Box
                    fs_0
                    style={{
                      width: '11px',
                      height: '11px',
                      border: '1px solid hsl(208,100%,50%)',
                      backgroundColor: 'white',
                      marginLeft: '-6px',
                      cursor: 'pointer',
                    }}
                  />
                  <Box
                    fs_0
                    style={{
                      width: '11px',
                      height: '11px',
                      border: '1px solid hsl(208,100%,50%)',
                      backgroundColor: 'white',
                      marginRight: '-6px',
                      cursor: 'pointer',
                    }}
                  />
                </Flexbox>
                <Flexbox jc_spacebetween style={{ marginBottom: '-6px' }}>
                  <Box
                    fs_0
                    style={{
                      width: '11px',
                      height: '11px',
                      border: '1px solid hsl(208,100%,50%)',
                      backgroundColor: 'white',
                      marginLeft: '-6px',
                      cursor: 'pointer',
                    }}
                  />
                  <Box
                    fs_0
                    style={{
                      width: '11px',
                      height: '11px',
                      border: '1px solid hsl(208,100%,50%)',
                      backgroundColor: 'white',
                      marginRight: '-6px',
                      cursor: 'pointer',
                    }}
                  />
                </Flexbox>
              </Flexbox>
            </AspectRatio>
          </Flexbox>
          <Box position_relative>
            <Input defaultValue="0" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              relative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                color_gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
        </Box>
        <Box fg_1 fb_0>
          <Box position_relative>
            <Input defaultValue="0" tabIndex="-1" />
            <Flexbox
              height_100
              ai_center
              relative
              style={{ position: 'absolute', right: '0', top: '0' }}
            >
              <Text
                size1
                color_gray600
                style={{ fontSize: '11px', fontFamily: 'menlo' }}
              >
                px
              </Text>
            </Flexbox>
          </Box>
        </Box>
      </Flexbox>

      <Flexbox mt_2 ai_center style={{ marginRight: '-5px' }}>
        <Box pr_2>
          <Text size1 nowrap color_gray600>
            Stacking order
          </Text>
        </Box>
        <Flexbox ai_center fg_1 fb_0>
          <GhostButton
            size1
            tabIndex="-1"
            style={{ color: 'hsl(208,100%,50%)' }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M2.5 7.5H12.5" strokeLinecap="round" />
            </svg>
          </GhostButton>
          <Box>
            <Input
              defaultValue="0"
              tabIndex="-1"
              style={{ textAlign: 'center' }}
            />
          </Box>
          <GhostButton
            size1
            tabIndex="-1"
            style={{ color: 'hsl(208,100%,50%)' }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M2.5 7.5H12.5" strokeLinecap="round" />
              <path d="M7.5 12.5V2.5" strokeLinecap="round" />
            </svg>
          </GhostButton>
        </Flexbox>
      </Flexbox>
    </Box>
  );
}

export default PropertiesFill;
