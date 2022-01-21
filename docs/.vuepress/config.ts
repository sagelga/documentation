import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  title: "sagelga's Documentation",
  description: 'Documentation for everything repository',

  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
    }]
  ],

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',

    navbar: navbar.en,
    sidebar: sidebar.en,

    editLink: false,
    editLinkText: '',
    lastUpdatedText: 'Last Update (UTC)',

    docsRepo: 'sagelga/documentation',
    docsDir: 'docs',
    docsBranch: 'develop',
  },

  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-BTF0LX3HTD'
      }
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    ['@maginapp/vuepress-plugin-katex', { delimiters: 'dollars' }]
  ],

  // markdown: {
  //   extendMarkdown: md => {
  //     md.set({
  //       breaks: true
  //     });
  //     md.use(require('markdown-it-katexx'), {
  //       throwOnError: false,
  //       errorColor: ' #cc0000'
  //     });
  //     md.use(require('markdown-it-task-lists'));
  //   }
  // },
})
