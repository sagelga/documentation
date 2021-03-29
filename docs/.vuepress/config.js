const fs = require("fs");

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
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
    lastUpdated: 'Last Update (UTC)',
    searchPlaceholder: 'Search...',

    nav: require('./navbar/en.js'),

    sidebar: {
      '/approval-workflow/': [
        {
          title: 'Documentation',
          collapseable: false,
          children: [
            {
              title: 'Overall',
              collapseable: false,
              children: getSideBar('approval-workflow', 'docs/overall')
            },
            {
              title: 'Configuration',
              collapseable: false,
              children: getSideBar('approval-workflow', 'docs/develop/config')
            },
            {
              title: 'Module',
              collapseable: false,
              children: getSideBar('approval-workflow', 'docs/develop/module')
            },
            {
              title: 'Maintain',
              collapseable: false,
              children: getSideBar('approval-workflow', 'docs/maintain')
            },
          ],
        },
        {
          title: 'Manual',
          collapseable: false,
          children: getSideBar('approval-workflow', 'manual')
        },
      ],
      '/compro-project/': [
        {
          title: 'Overall',
          collapseable: false,
          children: [
            '',
            'proposal/',
            'credits/',
            'theory/',
          ]
        },
        {
          title: 'Getting Started',
          collapseable: false,
          children: getSideBar('compro-project', 'getting-start')
        },
        {
          title: 'Features',
          collapseable: false,
          children: getSideBar('compro-project', 'feature')
        },
      ],
      '/panda/': [
        {
          title: 'Overall',
          collapseable: false,
          children: [
            '',
            'proposal/',
            'credits/',
            {
              title: 'Requirement',
              collapseable: false,
              path: '/panda/requirement/workflow/',
              children: getSideBar('panda', 'requirement'),
            },
          ]
        },
        {
          title: 'Documentation',
          collapseable: false,
          children: [
            'docs/api/',
            {
              title: 'Back-end',
              collapseable: false,
              children: getSideBar('panda', 'docs/back-end')
            },
            {
              title: 'Front-end',
              collapseable: false,
              children: getSideBar('panda', 'docs/front-end')
            },
          ]
        },
        {
          title: 'User Manual',
          collapseable: false,
          path: '/panda/manual/',
          children: [
            {
              title: 'Client',
              collapseable: false,
              children: getSideBar('panda', 'manual/client')
            },
            {
              title: 'Approver',
              collapseable: false,
              children: getSideBar('panda', 'manual/approver')
            },
            {
              title: 'Admin',
              collapseable: false,
              children: getSideBar('panda', 'manual/admin')
            },
          ],
        },
      ],
      '/trashmelody/': [
        {
          title: 'Overall',
          collapseable: false,
          path: '/trashmelody/',
          children: getSideBar('trashmelody', 'overall')
        },
        {
          title: 'Documentation',
          collapseable: false,
          children: [
            {
              title: 'API',
              collapseable: false,
              children: [
                'docs/api/ResultScreen/',
              ]
            },
            'docs/inheritance/',
          ]
        },
        'credit/',
      ],
      '/documentation/': [
        '',
        'release-note/',
        {
          title: 'Customization',
          collapseable: false,
          children: getSideBar('documentation', 'custom')
        },
      ],
      '/codenames/': [
        'contribute/',
        'wordlist/'
      ],
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
    'vuepress-plugin-reading-time',
    ['@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false
        },
      },
    ],
    ['vuepress-plugin-copyright',
      {
        noCopy: true, // the selected text will be uncopiable
        minLength: 10, // if its length is greater than 100
      },],
    ['vuepress-plugin-code-copy',
      {
        color: '#15ad97',
        backgroundColor: '#15ad97',
        staticIcon: true
      }
    ],
  ],

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
    }
  },
}


function getSideBar(root, folder) {
  return fs
    .readdirSync(process.cwd() + '/docs/' + root + '/' + folder)
    .map(sidebar => folder + '/' + sidebar + '/')
    .map(sidebar => sidebar.replace('/README.md', '')
      .replace(root, '')
      .replace('.md/', '.md')
    )
}
