import React from 'react';
import { NextPageContext } from 'next';
// @ts-ignore
import { frontMatter as learnPosts } from './**/*.mdx';
import { makeRssXml } from '../../data/makeRssXml';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(
      makeRssXml({
        baseUrl: 'https://modulz.app/learn',
        title: 'Modulz Learn',
        description: "Recent tutorials from the Modulz's Learning Blog",
        frontMatters: learnPosts,
      })
    );
    res.end();
  }
}
