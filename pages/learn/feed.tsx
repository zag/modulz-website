import React from 'react';
import { NextPageContext } from 'next';
import { learnPosts } from '../../utils/learnPosts';
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
        description: "Recent tutorials from the Modulz's Learning Platform",
        frontMatters: learnPosts,
      })
    );
    res.end();
  }
}
