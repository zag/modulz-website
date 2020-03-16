import React from 'react';
import { NextPageContext } from 'next';
// @ts-ignore
import { frontMatter as blogPosts } from './*.mdx';
import { makeRssXml } from '../../data/makeRssXml';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(
      makeRssXml({
        baseUrl: 'https://modulz.app/blog',
        title: 'Modulz Blog',
        description: 'Recent articles from the Modulz Blog',
        frontMatters: blogPosts,
      })
    );
    res.end();
  }
}
