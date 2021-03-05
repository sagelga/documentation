const moment = require('moment');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "sagelga's Documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation for everything repository',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'sagelga/documentation',
    repoLabel: 'Github',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: 'Last Updated (UTC)',
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Home',
        link: '/'
      }
    ],
    sidebar: {
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    'vuepress-plugin-smooth-scroll',
    ['vuepress-plugin-copyright',
      {
        noCopy: true, // the selected text will be uncopiable
        minLength: 10, // if its length is greater than 100
      },],
    ['@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false
        },
      },
    ],
  ]
}
