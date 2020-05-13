import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  Text,
  Button,
  AspectRatio,
  Avatar,
  Divider,
} from 'radix-ds';

function LivePreview() {
  return (
    <Box gray300>
      <Box
        blue500
        style={{
          height: '50px',
        }}
      >
        <Flexbox ai_center jc_spacebetween height_100>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              style={{
                display: 'block',
              }}
            >
              <path
                d="M15.5 6.5L9.5 12.5L15.5 18.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box>
            <Heading size2 white>
              Events
            </Heading>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              style={{
                display: 'block',
                opacity: '0',
              }}
            >
              <path
                d="M15.5 6.5L9.5 12.5L15.5 18.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Flexbox>
      </Box>
      <Box p2 mt_1 mb_1 white>
        <Heading size1>Upcoming events</Heading>
        <Box mt_2 mb_2>
          <Divider />
        </Box>
        <Box mb_2>
          <Text size1 gray600>
            You don't have any events coming up.
          </Text>
        </Box>
        <Button blue>
          <Box mr_1>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <path d="M2.5 7.5H12.5" strokeLinecap="round" />
              <path d="M7.5 12.5V2.5" strokeLinecap="round" />
            </svg>
          </Box>
          Create event
        </Button>
      </Box>

      <Box
        mt_1
        mb_1
        white
        style={
          {
            // display: 'none',
          }
        }
      >
        <Flexbox ai_center jc_spacebetween p2>
          <Heading size1>Events you may like</Heading>
          <Button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <circle cx="7.5" cy="2.5" r="1.5" />
              <circle cx="7.5" cy="7.5" r="1.5" />
              <circle cx="7.5" cy="12.5" r="1.5" />
            </svg>
          </Button>
        </Flexbox>

        <Flexbox
          pb2
          style={{
            // transform: 'translateX(-240px)',
            transition: 'transform 200ms ease',
          }}
        >
          <Box
            border
            bcgray300
            mr2
            ml2
            fs_0
            style={{
              width: '240px',
            }}
          >
            <AspectRatio>
              <div
                style={{
                  height: '100%',
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a2d43a440904f159f33303eaea9c2e5&auto=format&fit=crop&w=2550&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AspectRatio>
            <Box p2>
              <Flexbox ai_center>
                <Box center pl_2 pr3>
                  <Text
                    size1
                    lh1
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      color: 'red',
                    }}
                  >
                    Aug
                  </Text>
                  <Text size4 tnum>
                    31
                  </Text>
                </Box>
                <Box>
                  <Text size1>Electric Picnic 2018</Text>
                  <Flexbox ai_center mt_1 mb_1>
                    <Box>
                      <Text size1 gray600>
                        Tomorrow
                      </Text>
                    </Box>
                    <Box pl_1 pr1>
                      <Text size1 gray600>
                        &middot;
                      </Text>
                    </Box>
                    <Box>
                      <Text size1 gray600>
                        Electric Picnic
                      </Text>
                    </Box>
                  </Flexbox>
                  <Text size1 gray600>
                    22,538 people interested
                  </Text>
                </Box>
              </Flexbox>
              <Box mt_2 mb_2>
                <Divider />
              </Box>
              <Flexbox ai_center jc_spacebetween>
                <Button>
                  <Box mr_1>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                      }}
                    >
                      <path
                        d="M4.5 2.5V12.5L7.5 10L10.5 12.5V2.5H4.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  Interested
                </Button>
                <Text size1 gray600>
                  4 friends going
                </Text>
              </Flexbox>
            </Box>
          </Box>

          <Box
            border
            bcgray300
            mr2
            fs_0
            style={{
              width: '240px',
            }}
          >
            <AspectRatio>
              <div
                style={{
                  height: '100%',
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a2d43a440904f159f33303eaea9c2e5&auto=format&fit=crop&w=2550&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AspectRatio>
            <Box p2>
              <Flexbox ai_center>
                <Box center pl_2 pr3>
                  <Text
                    size1
                    lh1
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      color: 'red',
                    }}
                  >
                    Aug
                  </Text>
                  <Text size4 tnum>
                    31
                  </Text>
                </Box>
                <Box>
                  <Text size1>Electric Picnic 2018</Text>
                  <Flexbox ai_center mt_1 mb_1>
                    <Box>
                      <Text size1 gray600>
                        Tomorrow
                      </Text>
                    </Box>
                    <Box pl_1 pr1>
                      <Text size1 gray600>
                        &middot;
                      </Text>
                    </Box>
                    <Box>
                      <Text size1 gray600>
                        Electric Picnic
                      </Text>
                    </Box>
                  </Flexbox>
                  <Text size1 gray600>
                    22,538 people interested
                  </Text>
                </Box>
              </Flexbox>
              <Box mt_2 mb_2>
                <Divider />
              </Box>
              <Flexbox ai_center jc_spacebetween>
                <Button>
                  <Box mr_1>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                      }}
                    >
                      <path
                        d="M4.5 2.5V12.5L7.5 10L10.5 12.5V2.5H4.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  Interested
                </Button>
                <Text size1 gray600>
                  4 friends going
                </Text>
              </Flexbox>
            </Box>
          </Box>

          <Box
            border
            bcgray300
            mr2
            fs_0
            style={{
              width: '240px',
            }}
          >
            <AspectRatio>
              <div
                style={{
                  height: '100%',
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a2d43a440904f159f33303eaea9c2e5&auto=format&fit=crop&w=2550&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AspectRatio>
            <Box p2>
              <Flexbox ai_center>
                <Box center pl_2 pr3>
                  <Text
                    size1
                    lh1
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      color: 'red',
                    }}
                  >
                    Aug
                  </Text>
                  <Text size4 tnum>
                    31
                  </Text>
                </Box>
                <Box>
                  <Text size1>Electric Picnic 2018</Text>
                  <Flexbox ai_center mt_1 mb_1>
                    <Box>
                      <Text size1 gray600>
                        Tomorrow
                      </Text>
                    </Box>
                    <Box pl_1 pr1>
                      <Text size1 gray600>
                        &middot;
                      </Text>
                    </Box>
                    <Box>
                      <Text size1 gray600>
                        Electric Picnic
                      </Text>
                    </Box>
                  </Flexbox>
                  <Text size1 gray600>
                    22,538 people interested
                  </Text>
                </Box>
              </Flexbox>
              <Box mt_2 mb_2>
                <Divider />
              </Box>
              <Flexbox ai_center jc_spacebetween>
                <Button>
                  <Box mr_1>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                      }}
                    >
                      <path
                        d="M4.5 2.5V12.5L7.5 10L10.5 12.5V2.5H4.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  Interested
                </Button>
                <Text size1 gray600>
                  4 friends going
                </Text>
              </Flexbox>
            </Box>
          </Box>
        </Flexbox>
      </Box>

      <Box
        mt_1
        mb_1
        white
        relative
        style={{
          zIndex: '2',
        }}
      >
        <Flexbox p2 jc_spacebetween>
          <Flexbox ai_center mr2>
            <Box mr2>
              <Avatar
                size="35"
                url="https://pbs.twimg.com/profile_images/903371896481353729/o3TlxZPJ_bigger.jpg"
              />
            </Box>
            <Box mr2>
              <Text size1 lh1>
                Colm Tuite
                <Text gray600>is interested in an event near you</Text>
              </Text>
              <Text size1 lh1 gray600>
                2hrs
              </Text>
            </Box>
          </Flexbox>
          <Button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block',
              }}
            >
              <circle cx="7.5" cy="2.5" r="1.5" />
              <circle cx="7.5" cy="7.5" r="1.5" />
              <circle cx="7.5" cy="12.5" r="1.5" />
            </svg>
          </Button>
        </Flexbox>
        <Box>
          <AspectRatio>
            <div
              style={{
                height: '100%',
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a2d43a440904f159f33303eaea9c2e5&auto=format&fit=crop&w=2550&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </AspectRatio>
          <Box gray200 p2>
            <Flexbox ai_center jc_spacebetween>
              <Box>
                <Text
                  size1
                  style={{
                    textTransform: 'uppercase',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    color: 'red',
                  }}
                >
                  Fri, Aug 2, 2019 – Aug 5, 2019
                </Text>
                <Text size3>All Together Now 2019</Text>
                <Flexbox ai_center mt_1 mb_1>
                  <Box>
                    <Text size1 gray600>
                      Curraghmore House
                    </Text>
                  </Box>
                  <Box pl_1 pr1>
                    <Text size1 gray600>
                      &middot;
                    </Text>
                  </Box>
                  <Box>
                    <Text size1 gray600>
                      Waterford
                    </Text>
                  </Box>
                </Flexbox>
                <Text size1 gray600>
                  Shane, Damien and 4 friends interested
                </Text>
              </Box>
              <Button>
                <Box mr_1>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block',
                    }}
                  >
                    <path
                      d="M4.5 2.5V12.5L7.5 10L10.5 12.5V2.5H4.5Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                Interested
              </Button>
            </Flexbox>
          </Box>
        </Box>
      </Box>

      <Box p2 mt_1 mb_1 white>
        <Heading size1>Upcoming birthdays</Heading>
        <Box mt_2 mb_2>
          <Divider />
        </Box>
        <Box mb_2>
          <Flexbox ai_center jc_spacebetween>
            <Box>
              <Flexbox ai_center jc_spacebetween>
                <Box mr2>
                  <Avatar
                    size="35"
                    url="https://pbs.twimg.com/profile_images/903371896481353729/o3TlxZPJ_bigger.jpg"
                  />
                </Box>
                <Box mr2>
                  <Text size1 lh1>
                    Bob Glynn
                  </Text>
                  <Text size1 gray600>
                    Sep 31
                  </Text>
                </Box>
              </Flexbox>
            </Box>
            <Box>
              <Button>
                <Box mr_1>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block',
                    }}
                  >
                    <path d="M2.5 7.5H12.5" strokeLinecap="round" />
                    <path d="M7.5 12.5V2.5" strokeLinecap="round" />
                  </svg>
                </Box>
                Create event
              </Button>
            </Box>
          </Flexbox>
        </Box>
        <Box mt_2 mb_2>
          <Divider />
        </Box>
        <Box mb_2>
          <Flexbox ai_center jc_spacebetween>
            <Box>
              <Flexbox ai_center jc_spacebetween>
                <Box mr2>
                  <Avatar
                    size="35"
                    url="https://pbs.twimg.com/profile_images/903371896481353729/o3TlxZPJ_bigger.jpg"
                  />
                </Box>
                <Box mr2>
                  <Text size1 lh1>
                    Bob Glynn
                  </Text>
                  <Text size1 gray600>
                    Sep 31
                  </Text>
                </Box>
              </Flexbox>
            </Box>
            <Box>
              <Button>
                <Box mr_1>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block',
                    }}
                  >
                    <path d="M2.5 7.5H12.5" strokeLinecap="round" />
                    <path d="M7.5 12.5V2.5" strokeLinecap="round" />
                  </svg>
                </Box>
                Create event
              </Button>
            </Box>
          </Flexbox>
        </Box>
      </Box>
    </Box>
  );
}

export default LivePreview;
