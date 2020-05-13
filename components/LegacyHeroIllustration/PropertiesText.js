import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  Input,
  Text,
  Select,
  ToggleButton,
  Tooltip,
} from 'radix-ds';

function PropertiesText() {
  return (
    <Box padding_2 bt bcgray300>
      <Heading size1 color_gray600 mb_2>
        Text
      </Heading>
      <Box mt_2>
        <Select defaultValue="Untitled Sans" tabIndex="-1">
          <option>Untitled Sans</option>
          <option>San Francisco</option>
          <option>Helvetica</option>
          <option>Roboto</option>
          <option>Exo</option>
          <option>Whitney</option>
          <option>Knockout</option>
          <option>Georgia</option>
          <option>Avenir</option>
        </Select>
      </Box>
      <Flexbox mt_2 ai_center>
        <Box pr_2>
          <Box
            size1
            gray600
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '3px',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.05)',
              backgroundColor: 'hsl(208,82%,45%)',
            }}
          />
        </Box>
        <Box fg_1>
          <Input defaultValue="Blue 600" readOnly tabIndex="-1" />
        </Box>
      </Flexbox>
      <Flexbox mt_2>
        <Box fg_1 fb_0 pr_2>
          <Select defaultValue="500" tabIndex="-1">
            <option>400</option>
            <option>500</option>
            <option>700</option>
          </Select>
        </Box>
        <Box fg_1 fb_0 pl_2>
          <Select defaultValue="15" tabIndex="-1">
            <option>9</option>
            <option>11</option>
            <option>13</option>
            <option>15</option>
            <option>17</option>
            <option>19</option>
            <option>21</option>
            <option>27</option>
            <option>37</option>
            <option>47</option>
            <option>63</option>
          </Select>
        </Box>
      </Flexbox>
      <Flexbox mt_2>
        <Flexbox fg_1 fb_0 pr_2>
          <Box mr_1 style={{ color: 'hsl(208,24%,64%)' }}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M10.5 17.5L7.5 20.5L4.5 17.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 7.5L7.5 4.5L4.5 7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M13.5 6.5H20.5" strokeLinecap="round" />
              <path d="M13.5 10.5H20.5" strokeLinecap="round" />
              <path d="M13.5 14.5H20.5" strokeLinecap="round" />
              <path d="M13.5 18.5H17.5" strokeLinecap="round" />
              <path
                d="M7.5 4.5V20.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box fg_1>
            <Select defaultValue="125%" tabIndex="-1">
              <option>100%</option>
              <option>115%</option>
              <option>125%</option>
              <option>150%</option>
            </Select>
          </Box>
        </Flexbox>
        <Flexbox fg_1 fb_0 pl_2>
          <Box mr_1 style={{ color: 'hsl(208,24%,64%)' }}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M7.5 20.5L4.5 17.5L7.5 14.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 20.5L20.5 17.5L17.5 14.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 11.5L8.5 4.5L5.5 11.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 4.5L16.5 11.5L13.5 4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 9.5H10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 17.5H20.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box fg_1 position_relative>
            <Input defaultValue="0.0" tabIndex="-1" />
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
                em
              </Text>
            </Flexbox>
          </Box>
        </Flexbox>
      </Flexbox>
      <Flexbox mt_2>
        <Flexbox pr_2 style={{ width: '123px' }}>
          <ToggleButton tabIndex="-1" group="text-align" left>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M4 16.5H13" />
              <path d="M4 12.5H21" />
              <path d="M4 8.5H13" />
            </svg>
          </ToggleButton>
          <ToggleButton tabIndex="-1" group="text-align" middle defaultChecked>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M8 16.5H17" />
              <path d="M4 12.5H21" />
              <path d="M8 8.5H17" />
            </svg>
          </ToggleButton>
          <ToggleButton tabIndex="-1" group="text-align" right>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M12 16.5H21" />
              <path d="M4 12.5H21" />
              <path d="M12 8.5H21" />
            </svg>
          </ToggleButton>
          <ToggleButton tabIndex="-1" group="text-align" right>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path d="M4 16.5H21" />
              <path d="M4 12.5H21" />
              <path d="M4 8.5H21" />
            </svg>
          </ToggleButton>
        </Flexbox>
        <Flexbox pl_2 fg_1>
          <Tooltip data-tooltip="Normal" data-position="top">
            <ToggleButton tabIndex="-1" group="font-style" left defaultChecked>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M15.5 7.5H9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 17.5H9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 7.5V17.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
          <Tooltip data-tooltip="Italic" data-position="top">
            <ToggleButton tabIndex="-1" group="font-style" right>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M17.5 7.5H11.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 17.5H7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 7.5L10.5 17.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
        </Flexbox>
      </Flexbox>
      <Flexbox mt_2>
        <Flexbox pr_2 style={{ width: '123px' }}>
          <Tooltip data-tooltip="None" data-position="top">
            <ToggleButton
              tabIndex="-1"
              group="text-transform"
              left
              defaultChecked
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M7.5 17.5L17.5 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 17.5L7.5 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
          <Tooltip data-tooltip="Uppercase" data-position="top">
            <ToggleButton tabIndex="-1" group="text-transform" middle>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M13.5 17.5L17 7.5L20.5 17.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.5 14.5H19.5" />
                <path
                  d="M4.5 17.5L8 7.5L11.5 17.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M5.5 14.5H10.5" />
              </svg>
            </ToggleButton>
          </Tooltip>
          <Tooltip data-tooltip="Lowercase" data-position="top">
            <ToggleButton tabIndex="-1" group="text-transform" middle>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path d="M20.5 18V10" />
                <circle cx="17" cy="14" r="3.5" />
                <path d="M11.5 18V10" />
                <circle cx="8" cy="14" r="3.5" />
              </svg>
            </ToggleButton>
          </Tooltip>
          <Tooltip data-tooltip="Capitalize" data-position="top">
            <ToggleButton tabIndex="-1" group="text-transform" right>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path d="M5.5 14.5H10.5" />
                <path d="M20.5 18V10" />
                <circle cx="17" cy="14" r="3.5" />
                <path
                  d="M4.5 17.5L8 7.5L11.5 17.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
        </Flexbox>
        <Flexbox fg_1 fb_0 pl_2>
          <Tooltip data-tooltip="Underline" data-position="top">
            <ToggleButton tabIndex="-1" group="text-decoration" left>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path d="M18.5 20.5H6.5" strokeLinecap="round" />
                <path
                  d="M8.49995 7.5C8.49995 13.5 7.99995 17.5 12.4999 17.5C16.9999 17.5 16.4999 13.5 16.4999 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
          <Tooltip data-tooltip="Strikethrough" data-position="top">
            <ToggleButton tabIndex="-1" group="text-decoration" right>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path d="M18.5 12.5H6.5" strokeLinecap="round" />
                <path
                  d="M8.49995 7.5C8.49995 13.5 7.99995 17.5 12.4999 17.5C16.9999 17.5 16.4999 13.5 16.4999 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ToggleButton>
          </Tooltip>
        </Flexbox>
      </Flexbox>
    </Box>
  );
}

export default PropertiesText;
