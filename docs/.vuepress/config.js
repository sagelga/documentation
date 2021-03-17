module.exports = {
  /**
  * Ref：https://v1.vuepress.vuejs.org/config/#title
  */
  title: "sagelga's",
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
    lastUpdated: 'Last Updated (UTC)',
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Approval Workflow',
        link: '/approval-workflow/'
      },
      {
        text: 'POS System',
        link: '/compro-project/'
      },
      {
        text: 'Project Panda',
        link: '/panda/'
      },
      {
        text: 'Trash Melody',
        link: '/trashmelody/'
      },
    ],

    sidebar: {
      '/approval-workflow/': [
        {
          title: 'Documentation',
          collapseable: false,
          children: [
            {
              title: 'Overall',
              path: '/approval-workflow/docs/overall/requirement',
              children: [
                'docs/overall/requirement/',
                'docs/overall/install/',
                'docs/overall/start/',
                'docs/overall/status/',
                'docs/overall/how-it-works/',
              ],
            },
            {
              title: 'Develop',
              path: '/approval-workflow/docs/develop/',
              children: [
                'docs/develop/',
                {
                  title: 'Configuration',
                  path: '/approval-workflow/docs/develop/config/',
                  children: [
                    'docs/develop/config/config/',
                    'docs/develop/config/response/',
                  ],
                },
                {
                  title: 'Module',
                  path: '/approval-workflow/docs/develop/module/',
                  children: [
                    'docs/develop/module/main/',
                    'docs/develop/module/functions/',
                    'docs/develop/module/utility/',
                    'docs/develop/module/sheets/',
                    'docs/develop/module/sheetsInbound/',
                    'docs/develop/module/email/',
                    'docs/develop/module/email-function/',
                  ],
                },
              ],
            },
            {
              title: 'Maintain',
              path: '/approval-workflow/docs/maintain/',
              children: [
                'docs/maintain/issues/',
                'docs/maintain/constraints/',
              ],
            },
          ]
        },
        {
          title: 'User Manual',
          collapseable: false,
          children: [
            'manual/',
          ]
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
          ]
        },
        {
          title: 'Getting Started',
          collapseable: false,
          children: [
            'getting-start/requirement/',
            'getting-start/installation/',
            'getting-start/shortcut-keys/',
          ]
        },
        {
          title: 'Features',
          collapseable: false,
          children: [
            'feature/access-management/',
            'feature/forecast/',
            'feature/inventory/',
            'feature/login/',
            'feature/loyalty/',
            'feature/main-menu/',
            'feature/report/',
            'feature/sales/',
            'feature/settings/',
          ]
        }
      ],
      '/panda/': [
        {
          title: 'Overall',
          collapseable: false,
          children: [
            '',
            'proposal/',
            'credits/',
          ]
        },
        {
          title: 'Documentation',
          collapseable: false,
          children: [
            {
              title: 'Back-end',
              collapseable: false,
              children: [
                'docs/back-end/apollo/',
                'docs/back-end/session/',
              ],
            },
            {
              title: 'Front-end',
              collapseable: false,
              children: [
                'docs/front-end/components/',
                'docs/front-end/style-guide/',
              ],
            },
            'docs/api/',
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
              children: [
                'manual/client/cancel-request',
                'manual/client/check-request',
                'manual/client/find-space',
                'manual/client/login',
                'manual/client/logout',
                'manual/client/report-problem',
                'manual/client/reserve-space',
                'manual/client/search-space',
              ],
            },
            {
              title: 'Approver',
              collapseable: false,
              children: [
                'manual/approver/approve-request',
                'manual/approver/decline-request',
              ],
            },
            {
              title: 'Admin',
              collapseable: false,
              children: [
                'manual/admin/add-material',
                'manual/admin/delete-material',
                'manual/admin/add-role',
                'manual/admin/delete-role',
                'manual/admin/add-space',
                'manual/admin/edit-space',
                'manual/admin/delete-space',
                'manual/admin/create-group',
                'manual/admin/edit-group',
              ],
            },
          ],
        },
      ],
      '/trashmelody/': [
        {
          title: 'Overall',
          collapseable: false,
          path: '/trashmelody/',
          children: [
            'overall/requirement/',
            'overall/install/',
            'overall/rule/',
            'overall/playlist/',
          ]
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
    },
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
  ],

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
    }
  },
}
