import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export const unsubFromMarketingBlasts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { uuid } = req.body;
  try {
    if (!uuid) {
      throw new Error('Missing uuid in body of request, /api/unsubscribe');
    }

    const unsubEndpoint = `https://${
      process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
        ? 'admin-server.modulz.app'
        : 'admin-server-develop.modulz-deploys.com'
    }/unsubscribe/marketing`;

    await fetch(unsubEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_BEARER_TOKEN}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ userId: uuid }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          throw new Error('Unable to unsubscribe from marketing blasts');
        }
      })
      .catch((err) => {
        throw new Error(err);
      });

    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Unable to unsubscribe from marketing blasts' });
  }
};

export default unsubFromMarketingBlasts;
