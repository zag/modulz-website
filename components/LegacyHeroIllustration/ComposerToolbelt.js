import React from 'react';
import { Flexbox, Box } from 'radix-ds';

function ComposerToolbelt() {
  return (
    <Box
      br
      fs_0
      style={{
        width: '35px',
        borderColor: 'hsl(208, 18%, 22%)',
      }}
    >
      <Flexbox pt1 pb1 fd_column height_100 jc_spacebetween>
        <Flexbox fd_column>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
              color: 'hsl(208,18%,65%)',
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <path
                d="M0 0H14"
                transform="translate(5.5 12.5)"
                strokeLinecap="round"
              />
              <path
                d="M0 14V0"
                transform="translate(12.5 5.5)"
                strokeLinecap="round"
              />
            </svg>
          </Box>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
              color: 'hsl(208,18%,65%)',
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <rect
                x="0.5"
                y="0.5"
                width="16"
                height="12"
                rx="1.5"
                transform="translate(4 6)"
              />
              <path d="M0 0V6" transform="translate(9.5 12)" />
              <path d="M0 0H15.5" transform="translate(5 11.5)" />
            </svg>
          </Box>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
              color: 'hsl(208,18%,65%)',
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <path
                d="M14 0L7 4L0 0"
                transform="translate(5.5 16.5)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 0L7 4L0 0"
                transform="translate(5.5 12.5)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 8L14 4L7 0L0 4L7 8Z"
                transform="translate(5.5 4.5)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '35px',
              color: 'hsl(208,18%,65%)',
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <path
                d="M0 0V8.83333L8 13.5L16 8.83333V0"
                transform="translate(4.5 8)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 9L16 4.5L8 0L0 4.5L8 9Z"
                transform="translate(4.5 3.5)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M0 0V9" transform="translate(12.5 12.5)" />
            </svg>
          </Box>
        </Flexbox>
        <Box
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
            height: '35px',
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <circle cx="3.5" cy="3.5" r="3" transform="translate(9 9)" />
            <circle cx="8.5" cy="8.5" r="8" transform="translate(4 4)" />
            <path d="M0 4L4 0" transform="translate(6.5 14.5)" />
            <path d="M0 4L4 0" transform="translate(14.5 6.5)" />
            <path d="M4 4L0 0" transform="translate(6.5 6.5)" />
            <path d="M3.5 3.5L0 0" transform="translate(14.5 14.5)" />
          </svg>
        </Box>
      </Flexbox>
    </Box>
  );
}

export default ComposerToolbelt;
