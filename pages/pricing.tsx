import React from 'react';
import { Container, Box, Heading, Grid, Card, Button, Text, Divider, Flex } from '@modulz/radix';
import { MarketingButton } from '../components/MarketingButtton';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Pricing = () => {
  return (
    <Box>
      <TitleAndMetaTags title="Pricing" />

      <Box mt={6}>
        <Container size={1}>
          <Heading as="h5" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Pricing
          </Heading>
          <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3' }}>
            Start building your design system for free.
          </Text>
        </Container>
      </Box>

      <Box py={9}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
              gap: 5,
            }}>
            <Card>
              <Text size={5} mb="2" sx={{ textAlign: 'center', display: 'block' }} style={{ lineHeight: '1' }}>
                Starter
              </Text>
              <Text as="p" mb="2" size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                We're currently in private beta.
              </Text>
              <Heading size={4} my="3" weight="medium" sx={{ textAlign: 'center', display: 'block' }} style={{ lineHeight: '1' }}>
                Free
              </Heading>
              <Flex mb="2" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Unlimited design systems
                </Text>
              </Flex>
              <Flex mb="2" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  2 editors
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Basic component library
                </Text>
              </Flex>
              <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" sx={{ width: '100%', justifyContent: 'center' }}>
                Get started
              </MarketingButton>
            </Card>

            <Card>
              <Text size={6} mb="2" sx={{ textAlign: 'center', display: 'block', color: 'blue600' }} style={{ lineHeight: '1' }}>
                Pro
              </Text>
              <Text as="p" mb="2" size={3} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                We're currently in private beta.
              </Text>
              <Heading size={4} my="3" weight="medium" sx={{ textAlign: 'center', display: 'block' }} style={{ lineHeight: '1' }}>
                $249
              </Heading>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Unlimited design systems
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Unlimited editors
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Full component library
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Remove Modulz branding
                </Text>
              </Flex>
              <Flex mb="2" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom styleguide subdomain
                </Text>
              </Flex>
              <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" sx={{ width: '100%', justifyContent: 'center' }}>
                Get started
              </MarketingButton>
            </Card>

            <Card>
              <Text size={4} mb="2" sx={{ textAlign: 'center', display: 'block', color: 'green600' }} style={{ lineHeight: '1' }}>
                Product
              </Text>
              <Text as="p" mb="2" size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                We're currently in private beta.
              </Text>
              <Heading size={4} my="3" weight="medium" sx={{ textAlign: 'center', display: 'block' }} style={{ lineHeight: '1' }}>
                $649
              </Heading>
              <Flex mb="1" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                  Unlimited design systems
                </Text>
              </Flex>
              <Flex mb="1" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                  Unlimited design systems
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
                  Unlimited design systems
                </Text>
              </Flex>
              <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" sx={{ width: '100%', justifyContent: 'center' }}>
                Get started
              </MarketingButton>
            </Card>
          </Grid>
        </Container>

        <Container size={2}>
          <Box py="9">
            <Grid
              sx={{
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                rowGap: '1px',
                columnGap: 5,
              }}>
              <Box sx={{ alignSelf: 'center' }}>
                <Heading size={2} weight="medium" style={{ lineHeight: '1' }}>
                  Features
                </Heading>
              </Box>
              <Box sx={{ alignSelf: 'center', height: '7' }}>
                <Text size={4} sx={{ textAlign: 'center', color: 'gray700' }} style={{ lineHeight: '1' }}>
                  Starter
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} sx={{ textAlign: 'center', color: 'blue600' }} style={{ lineHeight: '1' }}>
                  Pro
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} sx={{ textAlign: 'center', color: 'gray900' }} style={{ lineHeight: '1' }}>
                  Organisation
                </Text>
              </Box>


              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>


              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  General
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Design Systems
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Editors
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center' }} style={{ lineHeight: '1' }}>
                  2
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  5
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Component Library
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center' }} style={{ lineHeight: '1' }}>
                  Basic
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}>
                <Text size={3} sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }} style={{ lineHeight: '1' }}>
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Cross Platform
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Component Editor
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Design Tokens
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Linting
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Composer
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>











              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  Styleguide
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom pages
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Rich-text Editing
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Sections
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Password protection
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Commenting
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  White-labelling
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Version History
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Subdomain
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Domain
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Search
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Version Control
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>






              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  Integrations
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Figma Export
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Sketch Export
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Twitter Integration
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Slack Integration
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  npm Integration
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Github Integration
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>






              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  Security
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Centralized Admin
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Content Ownership
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  SSO Integrations
                </Text>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>

            </Grid>
          </Box>
        </Container>

      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Pricing;
