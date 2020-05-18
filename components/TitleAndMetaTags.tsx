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

  const image = 'https://www.modulz.app/social.png';
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@modulz" />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
