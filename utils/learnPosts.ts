// @ts-ignore
import { frontMatter } from '../pages/learn/**/*.mdx';
import { FrontMatter } from '../types';

export const learnPosts: FrontMatter[] = frontMatter.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);
