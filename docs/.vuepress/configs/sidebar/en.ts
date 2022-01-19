// https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
// https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/en.ts

const fs = require("fs");

import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/trashmelody/': [
        {
            text: 'About',
            children: [
                '/trashmelody/',
                '/trashmelody/control/',
                '/trashmelody/install/',
                '/trashmelody/playlist/',
                '/trashmelody/proposal/',
                '/trashmelody/requirement/',
                '/trashmelody/rule/',
                '/trashmelody/credit/'
            ]
        },
        {
            text: 'Documentation',
            children: [{
                text: 'API',
                children: ['/trashmelody/docs/api/ResultScreen/']
            }]
        },
    ],
    '/documentation/': [
        {
            text: 'About',
            children: ['/documentation/', '/documentation/release-note/'],
        },
        {
            text: 'Customization',
            children: [
                '/documentation/custom/components/',
                '/documentation/custom/dark-mode/',
                '/documentation/custom/plugins/',
            ]
        }
    ],

    '/codenames/': [
        {
            text: 'About',
            link: '/codenames/',
        },
        {
            text: 'Contribute',
            children: [
                '/codenames/contribute/',
                '/codenames/wordlist/',
            ],
        }
    ],
    '/panda/': [
        {
            text: 'Overall',
            children: [
                '/panda/',
                '/panda/proposal/',
                '/panda/credits/',
                {
                    text: 'Requirement',
                    children: [
                        '/panda/requirement/AMC/',
                        '/panda/requirement/ECC/',
                        '/panda/requirement/IT/',
                        '/panda/requirement/reg/',
                        '/panda/requirement/robin/',
                        '/panda/requirement/student/',
                        '/panda/requirement/supplies/',
                        '/panda/requirement/workflow/',
                    ]
                },
            ]
        },
        {
            text: 'Documentation',
            children: [
                '/panda/docs/api/',
                {
                    text: 'Back-end',
                    children: [
                        '/panda/docs/back-end/apollo/',
                        '/panda/docs/back-end/session/'
                    ]
                },
                {
                    text: 'Front-end',
                    children: [
                        '/panda/docs/front-end/attribution/',
                        '/panda/docs/front-end/components/',
                        '/panda/docs/front-end/style-guide',
                    ]
                },
                '/panda/docs/glossary/',
            ]
        },
        {
            text: 'User Manual',
            children: [{
                text: 'Client',
                children: []
            },
            {
                text: 'Approver',
                children: []
            },
            {
                text: 'Admin',
                children: []
            },
            ],
        },
    ],
    '/approval-workflow/': [{
        text: 'Documentation',
        children: [{
            text: 'Overall',
            children: getSideBar('approval-workflow', 'docs/overall')
        },
        {
            text: 'Configuration',
            children: getSideBar('approval-workflow', 'docs/develop/config')
        },
        {
            text: 'Module',
            children: getSideBar('approval-workflow', 'docs/develop/module')
        },
        {
            text: 'Maintain',
            children: getSideBar('approval-workflow', 'docs/maintain')
        },
        ],
    },
    {
        text: 'Manual',
        children: getSideBar('approval-workflow', 'manual')
    },
    ],
    '/compro-project/': [{
        text: 'Overall',
        children: [
            '',
            '/proposal',
            '/credits',
            '/theory',
        ]
    },
    {
        text: 'Getting Started',
        children: getSideBar('compro-project', 'getting-start')
    },
    {
        text: 'Features',
        children: getSideBar('compro-project', 'feature')
    },
    ],
}

function getSideBar(root, folder) {
    var base = process.cwd() + '/docs/' + root + '/' + folder
    return fs
        .readdirSync(base)
        .map(sidebar => folder + '/' + sidebar + '/')
        .map(sidebar => sidebar.replace('/README.md', '')
            .replace(root, '')
            // .replace('.md/', '.md')
        )
}

