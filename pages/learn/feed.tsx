import React from 'react';
import { NextPageContext } from 'next';
// @ts-ignore
import { frontMatter as learnPosts } from './*.mdx';
import { getRssXml } from '../../data/getRssXml';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(
      getRssXml({
        type: 'learn',
        title: 'Modulz Learn RSS Feed',
        description: 'Recent tutorials from Modulz Learn',
        frontMatters: learnPosts,
      })
    );
    res.end();
  }
}
