import { css } from 'styled-components';
import { theme } from '@modulz/design-system';

export const prismTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: theme.colors.quartz1000.value;
    background: none;
    font-family: theme.colors.quartz1000.value;
    font-size: theme.colors.quartz1000.value;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: theme.colors.quartz1000.value;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding-top: theme.colors.quartz1000.value;
    padding-bottom: theme.colors.quartz1000.value;
    padding-left: theme.colors.quartz1000.value;
    padding-right: theme.colors.quartz1000.value;
    margin: theme.colors.quartz1000.value 0;
    overflow: auto;
    min-width: 100%;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: theme.colors.quartz1000.value;
    border: 1px solid theme.colors.quartz1000.value;
    border-radius: theme.colors.quartz1000.value;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    /* background: hsla(0, 0%, 100%, 0.5); */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  /* Line highlighting via https://github.com/j0lv3r4/mdx-prism */
  .mdx-marker {
    display: block;

    /* Reset padding originally set in "pre[class*='language-']" */
    margin-left: -theme.colors.quartz1000.value;
    margin-right: -theme.colors.quartz1000.value;
    padding-left: theme.colors.quartz1000.value;
    padding-right: theme.colors.quartz1000.value;

    background-color: theme.colors.quartz1000.value;
    box-shadow: inset 2px 0px 0 0px theme.colors.quartz1000.value;

    min-width: fit-content;
  }
`;
