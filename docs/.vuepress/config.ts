import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar, sidebar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  title: "Documentation",
  description: "Documentation for sagelga project",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://img.icons8.com/fluency/32/000000/layers.png",
      },
    ],
  ],

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: "@vuepress/theme-default",
  themeConfig: {
    home: "/",

    logo: "https://img.icons8.com/fluency/32/000000/layers.png",

    navbar: navbar.en,
    sidebar: sidebar.en,

    lastUpdated: true,
    lastUpdatedText: "Last Update (UTC)",

    editLink: true,
    editLinkText: "Report an Issue",

    contributors: true,
    contributorsText: "Contributor(s)",

    repo: "sagelga/documentation",
    repoLabel: "GitHub",

    docsRepo: "sagelga/documentation",
    docsDir: "docs",
    docsBranch: "main",

    algolia: {
      apiKey: "2022a723efeacc48b1a28b16f653ecbc",
      appId: "7B46GHWF8J",
      indexName: "documentation",
    },
  },

  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-BTF0LX3HTD",
      },
    ],
    [
      "@vuepress/docsearch",
      {
        appId: "VIR8TV46UV",
        apiKey: "b4ef90b459d81c338bf1f61b2ad2ad06",
        indexName: "sagelga",
      },
    ],
  ],
});
