import { FrontMatter } from '../types';
import { parseISO, format } from 'date-fns';

const baseUrl = 'https://modulz.app';

type XmlProps = { type: 'blog' | 'learn'; title: string; description: string; frontMatters: FrontMatter[] };

export const getRssXml = ({ type, title, description, frontMatters }: XmlProps) => {
  const sortedFrontMatters = frontMatters
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .slice(0, 15);

  const rssItemsXml = allPostsRssXml({ type, frontMatters: sortedFrontMatters });

  return `<?xml version="1.0" ?>
		<rss version="2.0">
			<channel>
					<title>${title}</title>
					<link>${`${baseUrl}/${type}`}</link>
					<description>${description}</description>
					<language>en</language>
					<lastBuildDate>${format(parseISO(frontMatters[0].publishedAt), 'MMMM dd, yyyy')}</lastBuildDate>
					${rssItemsXml}
			</channel>
		</rss>`;
};

type PostsXmlProps = { type: 'blog' | 'learn'; frontMatters: FrontMatter[] };

const allPostsRssXml = ({ type, frontMatters }: PostsXmlProps) => {
  let rssItemsXml = '';

  frontMatters.forEach(frontMatter => {
    const articleLink = `${baseUrl}/${type}/${frontMatter.__resourcePath.replace('.mdx', '')}`;

    rssItemsXml += `
			<item>
				<title>${frontMatter.title}</title>
				<link>${articleLink}</link>
				<pubDate>${frontMatter.publishedAt}</pubDate>
				<description>${frontMatter.summary}</description>
			</item>
		`;
  });

  return rssItemsXml;
};
