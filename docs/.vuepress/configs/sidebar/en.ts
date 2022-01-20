// https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
// https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/en.ts

import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/approval-workflow/': [{
        text: 'Documentation',
        children: [{
            text: 'Overall',
            children: [
                '/approval-workflow/docs/overall/start/',
                '/approval-workflow/docs/overall/requirement/',
                '/approval-workflow/docs/overall/install/',
                '/approval-workflow/docs/overall/status/',
                '/approval-workflow/docs/overall/how-it-works/',
            ]
        },
        {
            text: 'Configuration',
            children: [
                '/approval-workflow/docs/develop/config/config/',
                '/approval-workflow/docs/develop/config/response/',
            ]
        },
        {
            text: 'Module',
            children: [
                '/approval-workflow/docs/develop/module/email/',
                '/approval-workflow/docs/develop/module/email-function/',
                '/approval-workflow/docs/develop/module/functions/',
                '/approval-workflow/docs/develop/module/main/',
                '/approval-workflow/docs/develop/module/sheets/',
                '/approval-workflow/docs/develop/module/sheetsInbound/',
                '/approval-workflow/docs/develop/module/utility/',
            ]
        },
        {
            text: 'Maintain',
            children: [
                '/approval-workflow/docs/maintain/constraints/',
                '/approval-workflow/docs/maintain/issues/',
            ]
        },
        ],
    },
    {
        text: 'User Manual',
        children: [
            '/approval-workflow/manual/approver/',
            '/approval-workflow/manual/requester/',
        ]
    },
    ],
    '/codenames/': [
        {
            text: 'เกี่ยวกับ',
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
    '/compro-project/': [
        {
            text: 'Getting Started',
            children: [
                '/compro-project/getting-start/installation/',
                '/compro-project/getting-start/requirement/',
                '/compro-project/getting-start/shortcut-keys/',
            ]
        },
        {
            text: 'เกี่ยวกับ',
            children: [
                '/compro-project/proposal/',
                '/compro-project/credits/',
                '/compro-project/theory/',
            ]
        },
        {
            text: 'ฟีเจอร์',
            children: [
                '/compro-project/feature/access-management/',
                '/compro-project/feature/customer/',
                '/compro-project/feature/forecast/',
                '/compro-project/feature/inventory/',
                '/compro-project/feature/login/',
                '/compro-project/feature/loyalty/',
                '/compro-project/feature/main-menu/',
                '/compro-project/feature/promo/',
                '/compro-project/feature/report/',
                '/compro-project/feature/sales/',
                '/compro-project/feature/settings/',
            ]
        },
    ],
    '/documentation/': [
        {
            text: 'เกี่ยวกับ',
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
    '/panda/': [
        {
            text: 'เกี่ยวกับ',
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
                children: [
                    '/panda/manual/client/cancel-request.md',
                    '/panda/manual/client/check-request.md',
                    '/panda/manual/client/find-space.md',
                    '/panda/manual/client/login.md',
                    '/panda/manual/client/logout.md',
                    '/panda/manual/client/report-problem.md',
                    '/panda/manual/client/reserve-space.md',
                    '/panda/manual/client/search-space.md',
                ]
            },
            {
                text: 'Approver',
                children: [
                    '/panda/manual/approver/approve-request.md',
                    '/panda/manual/approver/decline-request.md',
                ]
            },
            {
                text: 'Admin',
                children: [
                    '/panda/manual/admin/add-material.md',
                    '/panda/manual/admin/add-role.md',
                    '/panda/manual/admin/add-space.md',
                    '/panda/manual/admin/create-group.md',
                    '/panda/manual/admin/delete-group.md',
                    '/panda/manual/admin/delete-role.md',
                    '/panda/manual/admin/delete-space.md',
                    '/panda/manual/admin/edit-group.md',
                    '/panda/manual/admin/edit-space.md',
                ]
            },
            ],
        },
    ],
    '/trashmelody/': [
        {
            text: 'Documentation',
            children: [{
                text: 'API',
                children: ['/trashmelody/docs/api/ResultScreen/', '/trashmelody/inheritance/']
            }]
        },
        {
            text: 'User Manual',
            children: [
                '/trashmelody/overall/control/',
                '/trashmelody/overall/install/',
                '/trashmelody/overall/playlist/',
                '/trashmelody/overall/rule/',
            ]
        },
        {
            text: 'เกี่ยวกับ',
            children: [

                '/trashmelody/overall/proposal/',
                '/trashmelody/overall/requirement/',
                '/trashmelody/credit/',
                '/trashmelody/others/framework.md',
                // '/trashmelody/others/package.md',
                '/trashmelody/others/statistics.md',
            ]
        },
    ],
}
