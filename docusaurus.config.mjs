// @ts-check
import {themes} from 'prism-react-renderer';
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'sagelga docs',
    tagline: 'Project documentation and technical references',
    favicon: 'img/favicon.ico',

    url: 'https://docs.sagelga.com',
    baseUrl: '/',

    organizationName: 'sagelga',
    projectName: 'documentation',

    onBrokenLinks: 'throw',
    onDuplicateRoutes: 'throw',

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'throw',
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/sagelga/documentation/tree/main/',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'sagelga docs',
                items: [
                    {
                        type: 'dropdown',
                        label: 'Legacy',
                        position: 'left',
                        items: [
                            {to: 'docs/approval-workflow', label: 'Approval Workflow'},
                            {to: 'docs/codenames', label: 'Codenames'},
                            {to: 'docs/data-journal', label: 'Data Journal'},
                            {to: 'docs/documentation', label: 'Documentation'},
                            {to: 'docs/oh-sheet', label: 'Oh Sheet!'},
                            {to: 'docs/compro-project', label: 'Point of Sales'},
                            {to: 'docs/panda', label: 'Project Panda'},
                            {to: 'docs/trashmelody', label: 'Trash Melody'},
                        ],
                    },
                    {
                        type: 'dropdown',
                        label: 'Monitoring',
                        position: 'left',
                        items: [
                            {to: 'docs/statuspage', label: 'Status Page'},
                            {to: 'docs/statuspage-pulse', label: 'Status Pulse'},
                        ],
                    },
                    {
                        type: 'dropdown',
                        label: 'Todoist Pipeline',
                        position: 'left',
                        items: [
                            {to: 'docs/cloudflarekv-to-notion', label: 'KV to Notion'},
                            {to: 'docs/reverse-notion-sync', label: 'Reverse Notion Sync'},
                            {to: 'docs/todoist-to-cloudflarekv', label: 'Todoist to KV'},
                            {to: 'docs/todoist-to-notion', label: 'Todoist to Notion'},
                        ],
                    },
                    {
                        type: 'dropdown',
                        label: 'Web Apps',
                        position: 'left',
                        items: [
                            {to: 'docs/mahjong-hands', label: 'Mahjong Hands'},
                            {to: 'docs/redirect', label: 'Redirect'},
                        ],
                    },
                    {
                        href: 'https://github.com/sagelga/documentation',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright 2016 - ${new Date().getFullYear()} @sagelga`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: 'VIR8TV46UV',
                apiKey: 'b4ef90b459d81c338bf1f61b2ad2ad06',
                indexName: 'sagelga',
                contextualSearch: true,
            },
        }),
};

export default config;
