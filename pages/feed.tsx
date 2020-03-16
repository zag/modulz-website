import React from 'react';
import { NextPageContext } from 'next';
// @ts-ignore
import { frontMatter as learnPosts } from './learn/*.mdx';
// @ts-ignore
import { frontMatter as blogPosts } from './blog/*.mdx';
import { FrontMatter } from '../types';

const allPosts: FrontMatter[] = [...learnPosts, ...blogPosts].sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);

const baseUrl = 'https://modulz.app/';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(getRssXml(allPosts));
    res.end();
  }
}

const getRssXml = (frontMatters: FrontMatter[]) => {
  const { rssItemsXml, latestPostDate } = allPostsRssXml(frontMatters);

  return `<?xml version="1.0" ?>
		<rss version="2.0">
			<channel>
					<title>Modulz articles</title>
					<link>${baseUrl}</link>
					<description>The visual code editor for designing and building digital products—without writing code.</description>
					<language>en</language>
					<lastBuildDate>${latestPostDate}</lastBuildDate>
					${rssItemsXml}
			</channel>
		</rss>`;
};

const allPostsRssXml = (frontMatters: FrontMatter[]) => {
  let latestPostDate = '';
  let rssItemsXml = '';

  frontMatters.forEach(frontMatter => {
    const postDate = Date.parse(frontMatter.publishedAt);
    const postType = frontMatter.__resourcePath.includes('blog') ? 'BLOG' : 'LEARN';
    const postPath = postType === 'BLOG' ? 'blog' : 'learn';
    const articleLink = `${baseUrl}/${postPath}/${frontMatter.__resourcePath.replace('.mdx', '')}`;

    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = frontMatter.publishedAt;
    }

    rssItemsXml += `
			<item>
				<title>${frontMatter.title}</title>
				<link>${articleLink}</link>
				<pubDate>${frontMatter.publishedAt}</pubDate>
				<description>${frontMatter.summary}</description>
			</item>
		`;
  });

  return {
    rssItemsXml,
    latestPostDate,
  };
};
