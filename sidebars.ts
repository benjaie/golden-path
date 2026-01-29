import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  goldenPathSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Patterns',
      items: [
        'pattern/batch-resolvers',
        'pattern/trusted-documents',
        'pattern/query-complexity-limits',
        'pattern/depth-limits',
      ],
    },
    {
      type: 'category',
      label: 'Problems',
      items: [
        'problem/n-plus-1',
        'problem/request-payload-size',
        'problem/parse-dos',
        'problem/execution-cost',
      ],
    },
  ],
};

export default sidebars;
