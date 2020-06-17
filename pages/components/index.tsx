import React from 'react';
import {
  Container,
  Box,
  Heading,
  CardLink,
  Text,
  Link,
  Flex,
  List,
  ListItem,
  Divider,
  Grid
} from '@modulz/radix';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

class SomeComponent extends React.Component {
   render() {
        return (
          <pre><code>{`
            import { slidercomponent } from '@modulz/primitives'
              slider.styles({
              [slider.parts.track]: {
              height: 3px;
              backgroundColor: 'lightgray',
              [slider.states.mouseover]: {
                backgroundColor: 'gray',
              }
              }
              [slider.parts.range]: {
              backgroundColor: 'blue',
              }
              [slider.parts.thumb]: {
              boxShadow: '0 3px 10px 0 rgba(0,0,0,.15)',
              [slider.states.mouseover]: {
                backgroundColor: 'gray',
              }
              }
              });
              slider.variant('color', {
              blue: {
              [slider.parts.range]: {
                [slider.states.mouseover]: {
                  backgroundColor: 'blue',
                }
              }
              },
              green: {
              [slider.parts.range]: {
                [slider.states.mouseover]: {
                  backgroundColor: 'green',
                }
              }
              },
              })
              slider.settings({
              })
              export Slider;
          `}</code></pre>
        )
    }
}

const Introduction = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Introduction"
        description="Help us build the future of visual coding by bringing design closer to engineering."
      />

        <Box sx={{
          position: 'fixed',
          top: 0,
          height: '100%',
          width: '245px',
          flexShrink: 0,
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'gray300',
          overflowY: 'auto',
          pb: 6
        }}>
          <Text
            as="h3"
            size={3}
            pt={3}
            pb={1}
            px={4}
            weight="medium"
            sx={{
              lineHeight: 1
            }}>
            Overview
          </Text>
          <List>
            <ListItem
              variant="active"
              sx={{
                px: 6
              }}>
              <Text size={2} sx={{ color: 'white' }}>Introduction</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Getting started</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Roadmap</Text>
            </ListItem>
          </List>
          <Divider />
          <Text
            as="h3"
            size={3}
            pt={3}
            pb={1}
            px={4}
            weight="medium"
            sx={{
              lineHeight: 1
            }}>
            Docs
          </Text>
          <List>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Styling</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Theming</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Using the SX prop</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Responsive props</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Server-side rendering</Text>
            </ListItem>
          </List>
          <Divider />
          <Text
            as="h3"
            size={3}
            pt={3}
            pb={1}
            px={4}
            weight="medium"
            sx={{
              lineHeight: 1
            }}>
            Components
          </Text>
          <List>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Arrow</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Accordion</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Alert</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Autocomplete</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Avatar</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Badge</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Blockquote</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Box</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Button</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Card</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Checkbox</Text>
            </ListItem>
            <ListItem
              sx={{
                px: 6
              }}>
              <Text size={2}>Code</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Collapsible</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Container</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Dialog</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Divider</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Flex</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Grid</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Header</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>HoverCard</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>IconButton</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Image</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Input</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Link</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Menu</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Overlay</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Popover</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Progress</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Radio</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Slider</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Select</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Switch</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Tab</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Table</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Text</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Textarea</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Tooltip</Text>
            </ListItem>
          </List>
          <Divider />
          <Text
            as="h3"
            size={3}
            pt={3}
            pb={1}
            px={4}
            weight="medium"
            sx={{
              lineHeight: 1
            }}>
            Resources
          </Text>
          <List>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Icons</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Layouts</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Design System</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Tutorials</Text>
            </ListItem>
            <ListItem sx={{
              px: 6
              }}>
              <Text size={2}>Showcase</Text>
            </ListItem>
          </List>
        </Box>
        <Box sx={{
          flexGrow: 1,
          pl: '245px',
          py: 9
        }}>
          <Container size={2} pt={2}>
            <Heading
              as="h1"
              size={5}
              sx={{
                lineHeight: 9
              }}>
              White-label components for building React apps.
            </Heading>

            <Box sx={{
              my: 9
            }}>
              <Flex>
                <Box>
                  <Link href="https://spectrum.chat/modulz">
                    <Text as="span" size={5} sx={{ color: 'blue600', lineHeight: '1' }}>
                      Documentation
                    </Text>
                  </Link>
                </Box>
                <Box>
                  <Link href="https://spectrum.chat/modulz">
                    <Text as="span" size={5} sx={{ color: 'blue600', lineHeight: '1' }}>
                      View components
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Box>

            <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 7 }}>
              <Box>
                <Heading
                  as="h3"
                  size={1}
                  sx={{
                    lineHeight: 2,
                    mb: '2'
                  }}>
                  Accessible
                </Heading>
                <Text
                  as="p"
                  size={4}
                  sx={{
                    lineHeight: 3,
                    color: 'gray700'
                  }}>
                  All components are accessible out of the box, strictly following WAI-ARIA standards. All components are tested rigorously for screenreader support and keyboard interactions.
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  size={1}
                  sx={{
                    lineHeight: 2,
                    mb: '2'
                  }}>
                  Functional
                </Heading>
                <Text
                  as="p"
                  size={4}
                  sx={{
                    lineHeight: 3,
                    color: 'gray700'
                  }}>
                  Interop components follow WAI-ARIA standards. All components are tested rigorously for collision-aware, focus trapping out of the box.
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  size={1}
                  sx={{
                    lineHeight: 2,
                    mb: '2'
                  }}>
                  Themeable
                </Heading>
                <Text
                  as="p"
                  size={4}
                  sx={{
                    lineHeight: 3,
                    color: 'gray700'
                  }}>
                  Quickly and easily reference values from your theme throughout your entire application, on any component.
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  size={1}
                  sx={{
                    lineHeight: 2,
                    mb: '2'
                  }}>
                  Interoperable
                </Heading>
                <Text
                  as="p"
                  size={4}
                  sx={{
                    lineHeight: 3,
                    color: 'gray700'
                  }}>
                  Regular expressions – commonly known as RegExps – are a powerful and heavily used tool for manipulating strings in JavaScript.
                </Text>
              </Box>
            </Grid>

            <Box>
              <SomeComponent />
            </Box>

            <Flex sx={{
              py: 9,
              justifyContent: 'center',
            }}>
              <Divider sx={{
                width: '65px'
              }} />
            </Flex>

            <Grid sx={{ alignItems: 'center', gridTemplateColumns: 'repeat(7, 1fr)', gap: 7 }}>
              <svg fill="hsl(208,8%,46%)" width="86" height="40" viewBox="0 0 86 40" data-reactid="565"><path d="M0,25.78V11H6.62c2.87,0,4.27,1.8,4.27,3.76a3.29,3.29,0,0,1-2.56,3.39,3.59,3.59,0,0,1,2.87,3.62c0,2.23-1.47,4-4.32,4ZM7.64,15.32a1.49,1.49,0,0,0-.5-1.15,1.57,1.57,0,0,0-1.21-.4H3.16v3.1H5.93a1.55,1.55,0,0,0,1.22-.39A1.51,1.51,0,0,0,7.64,15.32Zm.32,6a1.66,1.66,0,0,0-.57-1.27,1.71,1.71,0,0,0-1.34-.41H3.18V23h2.9A1.65,1.65,0,0,0,8,21.35Z" data-reactid="566"></path><path d="M12.05,21.49V15.08h2.87V21.4A2,2,0,0,0,15.54,23a2.11,2.11,0,0,0,1.66.57A2.08,2.08,0,0,0,18.86,23a2,2,0,0,0,.62-1.62V15.08h2.87v6.4c-.06,2.7-1.68,4.58-5.15,4.58S12.05,24.18,12.05,21.49Z" data-reactid="567"></path><path d="M23.23,25.78V23.67l4.85-6.14H23.23V15.08h8.7v2L27,23.32h5v2.46Z" data-reactid="568"></path><path d="M33,25.78V23.67l4.84-6.14H33V15.08h8.69v2L36.7,23.32h5v2.46Z" data-reactid="569"></path><path d="M42.79,25.78V11h10.3v2.77H46v3.1h5.37v2.77H46v6.14Z" data-reactid="570"></path><path d="M52.13,20.41a5.37,5.37,0,0,1,1.55-4,5.57,5.57,0,0,1,4-1.66c3.23.05,5.38,2.45,5.38,5.92v.67h-8a2.84,2.84,0,0,0,3.09,2.4,4.48,4.48,0,0,0,2.87-1l1.27,1.88a6.78,6.78,0,0,1-4.44,1.47,5.51,5.51,0,0,1-4.14-1.57A5.32,5.32,0,0,1,52.13,20.41Zm5.56-3.29a2.48,2.48,0,0,0-2.63,2.28h5.3a2.45,2.45,0,0,0-2.67-2.28Z" data-reactid="571"></path><path d="M63.84,20.41a5.34,5.34,0,0,1,1.56-4,5.55,5.55,0,0,1,4-1.66c3.22,0,5.38,2.4,5.38,5.88v.71h-8a2.87,2.87,0,0,0,3.09,2.4,4.61,4.61,0,0,0,2.87-1L74,24.59a6.78,6.78,0,0,1-4.44,1.47,5.54,5.54,0,0,1-4.14-1.57A5.39,5.39,0,0,1,63.84,20.41Zm5.56-3.29a2.48,2.48,0,0,0-2.63,2.28h5.3a2.45,2.45,0,0,0-2.67-2.28Z" data-reactid="572"></path><path d="M75.82,25.8V15.06h4.33c3.4,0,5.85,2,5.85,5.35s-2.44,5.38-5.83,5.38Zm7.43-5.39a2.82,2.82,0,0,0-.8-2.18,2.9,2.9,0,0,0-2.18-.86H78.51v6.11h1.76a3,3,0,0,0,2.16-.9A2.93,2.93,0,0,0,83.25,20.41Z" data-reactid="573"></path></svg>
              <svg fill="hsl(208,8%,46%)" width="70" height="40" viewBox="0 0 70 40" data-reactid="578"><path d="M0,25.67V14.26H3.13v1.53a3.51,3.51,0,0,1,3.21-1.74,3.63,3.63,0,0,1,3.27,1.82,4.7,4.7,0,0,1,3.63-1.82c2.66,0,4.15,1.44,4.15,4.1v7.52H14V19.49c0-1.6-.35-2.32-1.64-2.32s-2,.79-2,2.32v6.18H7V19.49c0-1.6-.35-2.32-1.64-2.32s-2,.79-2,2.32v6.18Z" data-reactid="579"></path><path d="M25.54,22.81a2.84,2.84,0,0,0,2-.84,2.68,2.68,0,0,0,.79-2,2.79,2.79,0,1,0-2.78,2.8Zm-4.41-7a6.37,6.37,0,0,1,8.71-.12A5.83,5.83,0,0,1,31.76,20,5.71,5.71,0,0,1,30,24.25,6.21,6.21,0,0,1,25.51,26a5.9,5.9,0,0,1-4.44-1.83,5.88,5.88,0,0,1,.06-8.39Z" data-reactid="580"></path><path d="M33.72,25.7V14.3H37v1.53a3.71,3.71,0,0,1,3.33-1.75,3.77,3.77,0,0,1,4,4.1V25.7H40.88V19.52c0-1.59-.34-2.31-1.68-2.31s-2,.78-2,2.31V25.7Z" data-reactid="581"></path><path d="M62.76,22.81a2.81,2.81,0,1,0-2-4.78A2.72,2.72,0,0,0,60,20,2.79,2.79,0,0,0,62.76,22.81Zm-4.41-7a6.37,6.37,0,0,1,8.71-.12A5.89,5.89,0,0,1,69,19.93a5.72,5.72,0,0,1-1.78,4.29A6.25,6.25,0,0,1,62.74,26a5.91,5.91,0,0,1-4.46-1.83A5.85,5.85,0,0,1,56.56,20a5.72,5.72,0,0,1,1.79-4.22Z" data-reactid="582"></path><path d="M46.53,25.7V23.32l4.85-6.07H46.53V14.3h8.75V17L51,22.75h4.36V25.7Z" data-reactid="583"></path></svg>
              <svg fill="hsl(208,8%,46%)" width="90" height="40" viewBox="0 0 90 40" data-reactid="588"><path d="M12.4,16.26a4.16,4.16,0,0,1,2.92,1.2,4.14,4.14,0,0,0,5.85-5.85A12.41,12.41,0,0,0,3.63,29.17l8.77,8.77,8.77-8.77a4.14,4.14,0,0,0-5.85-5.85L12.4,26.25,9.49,23.32a4.14,4.14,0,0,1,2.91-7.06ZM8,24.8l4.39,4.39,4.4-4.39a2.06,2.06,0,0,1,2.91,2.91L12.42,35,5.09,27.71A10.34,10.34,0,0,1,19.71,13.09,2.06,2.06,0,1,1,16.8,16,6.22,6.22,0,0,0,8,24.8Zm40.9-9.15a5.12,5.12,0,0,0-3.63-1.46,5.91,5.91,0,0,0-5.88,6.21A6,6,0,0,0,41,24.77a5.89,5.89,0,0,0,4.27,1.84,5.12,5.12,0,0,0,3.63-1.46V26.3h2.2V14.51l-2.2.19Zm-3.6,8.87c-2,0-3.62-1.6-3.62-4.14s1.63-4.12,3.62-4.14,3.61,1.61,3.61,4.14S47.26,24.52,45.3,24.52ZM33.55,16.26a3.57,3.57,0,0,1,3.08,1.92L38.54,17a5.69,5.69,0,0,0-5-2.83,5.88,5.88,0,0,0-5.87,6.21,5.88,5.88,0,0,0,5.87,6.21,5.69,5.69,0,0,0,5-2.83L36.63,22.6a3.53,3.53,0,0,1-3.08,1.92c-2,0-3.61-1.6-3.61-4.14S31.58,16.28,33.55,16.26Zm25.69-2.07a5.12,5.12,0,0,0-3.63,1.46V10.07l-2.2.19v16h2.2V25.15a5.12,5.12,0,0,0,3.63,1.46,5.9,5.9,0,0,0,5.87-6.21,5.9,5.9,0,0,0-5.87-6.21Zm0,10.33c-2,0-3.61-1.6-3.61-4.14s1.62-4.12,3.61-4.14,3.61,1.61,3.61,4.14S61.2,24.52,59.24,24.52Zm28.08-10-3.38,7.75-3.62-7.75H75.63v-1c0-1.2.57-1.71,1.74-1.71a5.34,5.34,0,0,1,1.2.17l.53-1.84a7.47,7.47,0,0,0-2.3-.36,3.27,3.27,0,0,0-3.51,3.6v1.18l-2,.17v1.86h2V26.3h2.34V16.54H78.7l4.07,8.36A5.45,5.45,0,0,1,81.36,27a2.41,2.41,0,0,1-2,.36l-.55,1.9A4.33,4.33,0,0,0,82.14,29a5.68,5.68,0,0,0,2.28-2.79l5.39-11.76H87.32ZM68.2,9.73a1.6,1.6,0,1,0,1.6,1.61A1.63,1.63,0,0,0,68.2,9.73ZM67,26.27h2.34V14.51L67,14.72Z" data-reactid="589"></path></svg>
              <svg fill="hsl(208,8%,46%)" width="90" height="24" viewBox="0 0 90 24" data-reactid="594">
                <polygon points="0 3.38 0 6.02 4.27 6.02 4.27 17.68 7.4 17.68 7.4 6.02 11.66 6.02 11.66 3.38 0 3.38" data-reactid="595"></polygon>
                <path d="M71.51,7.32V8.73h0A4.21,4.21,0,0,1,72.9,7.48,3.66,3.66,0,0,1,74.7,7a4.19,4.19,0,0,1,1.79.38,2.56,2.56,0,0,1,1.23,1.35A4.19,4.19,0,0,1,79,7.57,3.31,3.31,0,0,1,80.83,7a5.57,5.57,0,0,1,1.51.2,3,3,0,0,1,1.2.65A2.93,2.93,0,0,1,84.32,9a4.79,4.79,0,0,1,.27,1.71v6.93H81.76V11.81c0-.34,0-.67,0-1a2,2,0,0,0-.22-.8A1.29,1.29,0,0,0,81,9.49a2,2,0,0,0-1-.2,1.86,1.86,0,0,0-1,.23,1.67,1.67,0,0,0-.58.6,2.52,2.52,0,0,0-.28.84,7.59,7.59,0,0,0-.07.95v5.77H75.3V11.87c0-.3,0-.61,0-.91a2.45,2.45,0,0,0-.17-.83,1.28,1.28,0,0,0-.49-.61,1.94,1.94,0,0,0-1-.23,2.08,2.08,0,0,0-.53.09,1.73,1.73,0,0,0-.64.34,2.17,2.17,0,0,0-.53.72,3,3,0,0,0-.22,1.23v6H68.84V7.32Zm-7.62,0V9.25h0a3.26,3.26,0,0,1,.54-.89,3.2,3.2,0,0,1,.77-.7,3.48,3.48,0,0,1,2-.62,2.56,2.56,0,0,1,.62.1V9.79l-.48-.07a4.89,4.89,0,0,0-.54,0A3.07,3.07,0,0,0,65.5,10a2.22,2.22,0,0,0-.86.71,2.79,2.79,0,0,0-.47,1.05A6,6,0,0,0,64,13v4.66H61.2V7.32ZM52.46,13.73a3.08,3.08,0,0,0,.41,1.06,2.18,2.18,0,0,0,.76.75,2.32,2.32,0,0,0,1.2.28A2.38,2.38,0,0,0,56,15.54a2.21,2.21,0,0,0,.77-.75,3.08,3.08,0,0,0,.41-1.06,6.16,6.16,0,0,0,.12-1.22,6.23,6.23,0,0,0-.12-1.22,3,3,0,0,0-.41-1.06A2.21,2.21,0,0,0,56,9.48a2.38,2.38,0,0,0-1.21-.29,2.32,2.32,0,0,0-1.2.29,2.18,2.18,0,0,0-.76.75,3,3,0,0,0-.41,1.06,6.23,6.23,0,0,0-.12,1.22A6.16,6.16,0,0,0,52.46,13.73Zm-2.57-3.47A4.87,4.87,0,0,1,51,8.54a5,5,0,0,1,1.68-1.11,6.37,6.37,0,0,1,4.39,0,4.76,4.76,0,0,1,2.77,2.83,6.44,6.44,0,0,1,.37,2.25,6.4,6.4,0,0,1-.37,2.25,5,5,0,0,1-1.08,1.71A4.6,4.6,0,0,1,57,17.56a6.53,6.53,0,0,1-4.39,0A4.65,4.65,0,0,1,51,16.47a4.83,4.83,0,0,1-1.07-1.71,6.18,6.18,0,0,1-.38-2.25A6.21,6.21,0,0,1,49.89,10.26ZM43,9.23V7.32h1.7v-.8a3.11,3.11,0,0,1,.85-2.26,3.47,3.47,0,0,1,2.6-.88q.38,0,.75,0l.74,0V5.58a8.94,8.94,0,0,0-1-.06,1.06,1.06,0,0,0-.82.27,1.32,1.32,0,0,0-.25.91v.62h1.95V9.23H47.56v8.45H44.73V9.23Zm-3.57.52a2,2,0,0,0-1.55-.56,2.52,2.52,0,0,0-1.13.23,2.13,2.13,0,0,0-.71.57,2.09,2.09,0,0,0-.38.72,3.22,3.22,0,0,0-.13.68h4.6A3.24,3.24,0,0,0,39.46,9.75Zm-3.2,5.45a2.9,2.9,0,0,0,3.31.19,1.77,1.77,0,0,0,.75-.91h2.5A4.72,4.72,0,0,1,41,17.14a5.32,5.32,0,0,1-3,.8,5.85,5.85,0,0,1-2.19-.39,4.57,4.57,0,0,1-1.66-1.11,4.89,4.89,0,0,1-1-1.72,6.25,6.25,0,0,1-.37-2.21,5.91,5.91,0,0,1,.38-2.16,5.1,5.1,0,0,1,1.07-1.73,5,5,0,0,1,1.67-1.15A5.15,5.15,0,0,1,38,7a4.75,4.75,0,0,1,2.29.52,4.47,4.47,0,0,1,1.61,1.37,5.69,5.69,0,0,1,.91,2A7.66,7.66,0,0,1,43,13.2H35.56A2.85,2.85,0,0,0,36.26,15.2Zm-8.65.33a2.27,2.27,0,0,0,.75-.73,2.88,2.88,0,0,0,.41-1.05,6.26,6.26,0,0,0,.12-1.23,5.56,5.56,0,0,0-.13-1.22,3.08,3.08,0,0,0-.43-1.07,2.3,2.3,0,0,0-.76-.76,2.46,2.46,0,0,0-2.32,0,2.47,2.47,0,0,0-.76.75,3.2,3.2,0,0,0-.4,1.06A6.51,6.51,0,0,0,24,12.52a5.58,5.58,0,0,0,.13,1.23,3.07,3.07,0,0,0,.41,1.05,2.34,2.34,0,0,0,.77.73,2.56,2.56,0,0,0,2.33,0ZM23.92,7.32V8.65h0a3.23,3.23,0,0,1,1.32-1.23A4.09,4.09,0,0,1,27,7a4.54,4.54,0,0,1,2.09.46,4.33,4.33,0,0,1,1.45,1.23,5,5,0,0,1,.86,1.77,7.78,7.78,0,0,1,.28,2.11,7,7,0,0,1-.28,2,4.94,4.94,0,0,1-.85,1.7,4,4,0,0,1-1.41,1.18,4.19,4.19,0,0,1-2,.44,4,4,0,0,1-1.77-.39A3.35,3.35,0,0,1,24.1,16.4h0v5.07H21.23V7.32ZM14.64,20.77a4.07,4.07,0,0,1-2.27.54q-.43,0-.87,0l-.86-.07V18.87l.81.08a7.85,7.85,0,0,0,.84,0,1.12,1.12,0,0,0,.83-.44,1.43,1.43,0,0,0,.27-.85,1.73,1.73,0,0,0-.12-.64L9.66,7.32h3L15,14.42h0l2.26-7.1h2.93L15.92,19A3.5,3.5,0,0,1,14.64,20.77Z" data-reactid="596"></path>
                <polygon points="87.49 24 90 24 90 0 87.49 0 87.49 24" data-reactid="597"></polygon>
              </svg>
              <svg fill="hsl(208,8%,46%)" width="62" height="40" viewBox="0 0 62 40" data-reactid="602"><path d="M62,20.42c0-4.43-2.13-7.93-6.2-7.93S49.22,16,49.22,20.41c0,5.2,2.93,7.86,7.08,7.86a9.66,9.66,0,0,0,4.81-1.12V23.68a9,9,0,0,1-4.22,1c-1.68,0-3.15-.6-3.35-2.6H62C62,21.73,62,20.87,62,20.42Zm-8.51-1.63c0-1.95,1.19-2.77,2.27-2.77s2.17.82,2.17,2.77Z" data-reactid="603"></path><path d="M42.51,12.49a4.72,4.72,0,0,0-3.36,1.36L39,12.77h-3.8V33l4.31-.92v-4.9a4.77,4.77,0,0,0,3,1.09c3.09,0,5.89-2.49,5.89-8C48.41,15.22,45.57,12.49,42.51,12.49Zm-1,12a2.61,2.61,0,0,1-2-.83V17.18a2.56,2.56,0,0,1,2-.86c1.58,0,2.66,1.77,2.66,4s-1.05,4.09-2.65,4.09Z" data-reactid="604"></path><path d="M29.25,11.45l4.31-.92V7l-4.31.93Z" data-reactid="605"></path><path d="M29.25,12.77h4.31V28H29.25Z" data-reactid="606"></path><path d="M24.61,14.05l-.26-1.28H20.63V28h4.3V17.67a3,3,0,0,1,3.28-.91v-4A2.93,2.93,0,0,0,24.61,14.05Z" data-reactid="607"></path><path d="M16,9l-4.2.87V23.74a4.29,4.29,0,0,0,1.25,3.15,4.47,4.47,0,0,0,3.18,1.31,6.67,6.67,0,0,0,3-.57V24.17c-.55.22-3.27,1-3.27-1.54V16.47h3.27v-3.7H16Z" data-reactid="608"></path><path d="M4.35,17.18c0-.67.56-.93,1.46-.93a9.53,9.53,0,0,1,4.28,1.15V13.27a11.35,11.35,0,0,0-4.28-.78C2.33,12.49,0,14.32,0,17.4c0,4.79,6.54,4,6.54,6.07,0,.79-.69,1.05-1.65,1.05a10.58,10.58,0,0,1-4.7-1.37v4.14a11.77,11.77,0,0,0,4.69,1c3.54,0,6-1.78,6-4.9C10.92,18.21,4.35,19.13,4.35,17.18Z" data-reactid="609"></path></svg>
              <svg fill="hsl(208,8%,46%)" width="90" height="40" viewBox="0 0 90 40" data-reactid="614"><path d="M85.53,18.89c0-1.24-.84-2.43-2.83-2.43a2.78,2.78,0,0,0-2.84,2.43Zm3.21,4a5.71,5.71,0,0,1-5.7,3.9A6.12,6.12,0,0,1,78.39,25a6.58,6.58,0,0,1-1.88-4.75,6.5,6.5,0,0,1,1.76-4.6,6.09,6.09,0,0,1,4.4-1.92c3.87,0,6.22,2.42,6.22,6.39v1h-9A3,3,0,0,0,83,23.92,2.72,2.72,0,0,0,85.88,22ZM66.82,19.39a2.4,2.4,0,0,1,.61-1.83,2.26,2.26,0,0,1,1.73-.74,2.15,2.15,0,0,1,1.74.64,2.29,2.29,0,0,1,.62,1.79v7.16h3.42V18.66c0-2.73-1.45-4.92-4.56-4.92a4.3,4.3,0,0,0-3.62,1.84V14H63.43V26.35h3.42Zm-8.89-5.27h3.42V26.41H57.93ZM59.63,8a2.13,2.13,0,0,1,2.11,2.07,2.16,2.16,0,0,1-.64,1.47,2,2,0,0,1-1.47.54,2.1,2.1,0,0,1-2.12-2A2.13,2.13,0,0,1,59.63,8ZM40.72,19.36a2.34,2.34,0,0,1,.62-1.81,2.25,2.25,0,0,1,1.73-.73,2.15,2.15,0,0,1,1.73.64,2.3,2.3,0,0,1,.62,1.79v7.16h3.42V18.66c0-2.73-1.45-4.92-4.56-4.92a4.3,4.3,0,0,0-3.62,1.84V14H37.33V26.35h3.42Zm-9-5.27h3.41V26.41H31.72ZM33.35,8a2.11,2.11,0,0,1,2.11,2.07,2.08,2.08,0,0,1-.64,1.47,2,2,0,0,1-1.47.54,2.09,2.09,0,0,1-2.12-2A2.16,2.16,0,0,1,33.35,8ZM23.68,24.34A1.44,1.44,0,0,1,22.56,24,1.53,1.53,0,0,1,22,22.92c0-1,.68-1.43,1.58-1.54L26.46,21v.53a2.63,2.63,0,0,1-.73,2.11A2.44,2.44,0,0,1,23.68,24.34Zm-5-1.25c0,2,1.64,3.73,4.35,3.73A4,4,0,0,0,26.7,25a12.3,12.3,0,0,0,.12,1.48H30a16.7,16.7,0,0,1-.18-2v-6c0-2.49-1.5-4.7-5.49-4.7-3.42,0-5.2,2.13-5.38,4.08l3,.66a2.22,2.22,0,0,1,2.42-2c1.44,0,2.11.71,2.11,1.6,0,.42-.25.77-1,.89l-3.09.47C20.3,19.66,18.66,20.94,18.66,23.09Zm-1-5.68a9,9,0,0,0-1-.12c-1.75,0-3.26.83-3.26,3.53v5.63H9.93V14.09h3.33v1.84A3.69,3.69,0,0,1,16.82,14a2.55,2.55,0,0,1,.78,0ZM8.1,14.27v2.91H4.17a5.67,5.67,0,0,0,1-.72,5.29,5.29,0,0,0,1.32-2.19ZM1,17.18H0V14.27H5.5A4.56,4.56,0,0,1,3.81,16.4,5.62,5.62,0,0,1,1,17.18Zm6.09,6.5a3.65,3.65,0,0,0,1-.12v2.79a5,5,0,0,1-1.88.3,3.59,3.59,0,0,1-3.94-3.79V17.94H5.62v4.39C5.62,23.29,6.11,23.68,7.06,23.68ZM5.62,13.51V10.6h-3v1.72a1.88,1.88,0,0,1-.37,1.17ZM56.06,23.68h-.6c-1,0-1.46-.35-1.46-1.41V8.53H50.68V22.86a3.58,3.58,0,0,0,3.92,3.79,5.08,5.08,0,0,0,1.46-.18Z" data-reactid="615"></path></svg>
              <svg fill="hsl(208,8%,63%)" width="86" height="40" viewBox="0 0 86 40" data-reactid="620"><polygon points="47.07 26 47.07 13.98 44.2 13.98 41.01 19.06 37.82 13.98 34.94 13.98 34.94 26 37.56 26 37.56 18.2 40.02 21.91 41.92 21.91 44.42 18.15 44.42 26 47.07 26" data-reactid="621"></polygon><path d="M59,20v0a3.67,3.67,0,0,0-3.67-3.78A3.62,3.62,0,0,0,51.64,20v0a3.67,3.67,0,0,0,3.67,3.78A3.62,3.62,0,0,0,59,20m-10.1,0v0a6.45,6.45,0,0,1,12.89,0v0a6.45,6.45,0,0,1-12.89,0" data-reactid="622"></path><path d="M68.25,23.61A3.44,3.44,0,0,0,71.9,20v0a3.46,3.46,0,0,0-3.65-3.62H66.18v7.24ZM63.52,14h4.73c3.81,0,6.44,2.59,6.44,6v0c0,3.38-2.63,6-6.44,6H63.52Z" data-reactid="623"></path><polygon points="76.77 13.98 76.77 26 86 26 86 23.65 79.42 23.65 79.42 21.12 85.13 21.12 85.13 18.77 79.42 18.77 79.42 16.33 85.91 16.33 85.91 13.98 76.77 13.98" data-reactid="624"></polygon><polygon points="27.96 8 13.98 16 0 8 0 32 6.99 28 6.99 20 13.98 24 20.97 20 20.97 28 27.96 32 27.96 8" data-reactid="625"></polygon></svg>
            </Grid>

            <Flex sx={{
              py: 9,
              justifyContent: 'center',
            }}>
              <Divider sx={{
                width: '65px'
              }} />
            </Flex>

            <Box>
              <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 7 }}>
                <Box>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3
                    }}>
                    “Theme UI is absolutely brilliant. Things I was struggling with in styled-system (like mixing responsive and css props) are solved very elegantly + so much more.”
                  </Text>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3,
                      color: 'gray700'
                    }}>
                    – Bernhard Gschwantner
                  </Text>
                </Box>
                <Box>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3
                    }}>
                    “Feels like web development using cheat codes”
                  </Text>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3,
                      color: 'gray700'
                    }}>
                    – Bernhard Gschwantner
                  </Text>
                </Box>
              </Grid>
            </Box>

            <Flex sx={{
              py: 9,
              justifyContent: 'center',
            }}>
              <Divider sx={{
                width: '65px'
              }} />
            </Flex>

            <Box>
              <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 7 }}>
                <Box>
                  <CardLink
                    variant="shadow"
                  >
                    <Heading
                      as="h4"
                      size={1}
                      sx={{
                        lineHeight: 2,
                        mb: 1
                      }}>
                      Icons
                    </Heading>
                    <Text
                      as="p"
                      size={3}
                      sx={{
                        lineHeight: 2,
                        color: 'gray700'
                      }}>
                      Quickly reference values from your theme.
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink
                    variant="shadow"
                  >
                    <Heading
                      as="h4"
                      size={1}
                      sx={{
                        lineHeight: 2,
                        mb: 1
                      }}>
                      Layouts
                    </Heading>
                    <Text
                      as="p"
                      size={3}
                      sx={{
                        lineHeight: 2,
                        color: 'gray700'
                      }}>
                      Quickly reference values from your theme.
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink
                    variant="shadow"
                  >
                    <Heading
                      as="h4"
                      size={1}
                      sx={{
                        lineHeight: 2,
                        mb: 1
                      }}>
                      Tutorials
                    </Heading>
                    <Text
                      as="p"
                      size={3}
                      sx={{
                        lineHeight: 2,
                        color: 'gray700'
                      }}>
                      Quickly reference values from your theme.
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink
                    variant="shadow"
                  >
                    <Heading
                      as="h4"
                      size={1}
                      sx={{
                        lineHeight: 2,
                        mb: 1
                      }}>
                      Showcase
                    </Heading>
                    <Text
                      as="p"
                      size={3}
                      sx={{
                        lineHeight: 2,
                        color: 'gray700'
                      }}>
                      Quickly reference values from your theme.
                    </Text>
                  </CardLink>
                </Box>
              </Grid>
            </Box>

            <Flex sx={{
              py: 9,
              justifyContent: 'center',
            }}>
              <Divider sx={{
                width: '65px'
              }} />
            </Flex>

            <Box>
              <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 7 }}>
                <Box>
                  <Heading
                    as="p"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3
                    }}>
                    Quickly and easily reference values from your theme throughout your entire application, on any component a library for creating themeable user interfaces based on constraint-based design principles.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h4"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3
                    }}>
                    Quickly and easily reference values from your theme throughout your entire application, on any component a library for creating themeable user interfaces based on constraint-based design principles.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h4"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3,
                      color: 'gray700'
                    }}>
                    Quickly reference values from your theme.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h4"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3
                    }}>
                    Quickly and easily reference values from your theme throughout your entire application, on any component a library for creating themeable user interfaces based on constraint-based design principles.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h4"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3,
                      color: 'gray700'
                    }}>
                    Quickly reference values from your theme.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h4"
                    size={1}
                    sx={{
                      lineHeight: 2,
                      mb: 1
                    }}>
                    Frequently asked question?
                  </Heading>
                  <Text
                    as="p"
                    size={4}
                    sx={{
                      lineHeight: 3,
                      color: 'gray700'
                    }}>
                    Quickly reference values from your theme.
                  </Text>
                </Box>
              </Grid>
            </Box>

          </Container>
        </Box>
    </Box>
  );
};

export default Introduction;
