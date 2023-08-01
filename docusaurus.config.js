// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const CONFIG_TITLE = {
    title: 'Documentation',
    tagline: 'Documentation website',
    orgName: 'sagelga',
    projectName: 'documentation',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: CONFIG_TITLE.title,
    tagline: CONFIG_TITLE.tagline,
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.sagelga.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: CONFIG_TITLE.orgName, // Usually your GitHub org/user name.
    projectName: CONFIG_TITLE.projectName, // Usually your repo name.

    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',
    onDuplicateRoutes: 'log',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/' +
                        CONFIG_TITLE.orgName +
                        '/' +
                        CONFIG_TITLE.projectName +
                        '/tree/main/',
                },
                blog: false,
                // {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: CONFIG_TITLE.title,
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: 'docs/approval-workflow',
                        label: 'Approval Workflow',
                        position: 'left',
                    },
                    {
                        to: 'docs/codenames',
                        label: 'Codenames',
                        position: 'left',
                    },
                    {
                        to: 'docs/compro-project',
                        label: 'Point of Sales',
                        position: 'left',
                    },
                    {
                        to: 'docs/data-journal',
                        label: 'Data Journal',
                        position: 'left',
                    },
                    {
                        to: 'docs/documentation',
                        label: 'Documentation',
                        position: 'left',
                    },
                    {
                        to: 'docs/oh-sheet',
                        label: 'Oh Sheet!',
                        position: 'left',
                    },
                    {
                        to: 'docs/panda',
                        label: 'Project Panda',
                        position: 'left',
                    },
                    {
                        to: 'docs/trashmelody',
                        label: 'Trash Melody',
                        position: 'left',
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
                // links: [
                //     {
                //         title: 'Docs',
                //         items: [
                //             {
                //                 label: 'Tutorial',
                //                 to: '/docs/intro',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'Community',
                //         items: [
                //             {
                //                 label: 'Stack Overflow',
                //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //             },
                //             {
                //                 label: 'Discord',
                //                 href: 'https://discordapp.com/invite/docusaurus',
                //             },
                //             {
                //                 label: 'Twitter',
                //                 href: 'https://twitter.com/docusaurus',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'More',
                //         items: [
                //             {
                //                 label: 'Blog',
                //                 to: '/blog',
                //             },
                //             {
                //                 label: 'GitHub',
                //                 href: 'https://github.com/facebook/docusaurus',
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © 2016 - ${new Date().getFullYear()} by <a>@sagelga</a>. Built with Docusaurus.`,
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

module.exports = config;
