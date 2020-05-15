import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export default function TitleAndMetaTags({
  url = 'https://modulz.app',
  pathname,
  title = 'Modulz',
  description = 'The visual code editor for producing production-ready design systems without writing code',
}: TitleAndMetaTagsProps) {
  const router = useRouter();
  const image = '/social.png';
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@modulz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@modulz" />
    </Head>
  );
}
