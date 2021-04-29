import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Flex, Text, theme } from '@modulz/radix';
import { useRouter } from 'next/router';

const Unsubscribe = () => {
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ uuid }),
    });
  }, []);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '35vh',
        pb: '40vh',
        width: '100%',
        height: '100%',
      }}
    >
      <Text size={8} sx={{ textAlign: 'center', color: theme.colors.green900 }}>
        You have been successfully unsubscribed
      </Text>
    </Flex>
  );
};

export default dynamic(() => Promise.resolve(Unsubscribe), {
  ssr: false,
});
