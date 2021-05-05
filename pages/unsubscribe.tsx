import React, { useEffect } from 'react';
import { Flex, Text } from '@modulz/radix';
import { useRouter } from 'next/router';

const Unsubscribe = () => {
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    if (uuid) {
      fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ uuid }),
      });
    }
  }, [uuid]);

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
      <Text size={8} sx={{ textAlign: 'center', color: 'hsl(148 69% 30.0%)' }}>
        You have been successfully unsubscribed
      </Text>
    </Flex>
  );
};

export default Unsubscribe;
