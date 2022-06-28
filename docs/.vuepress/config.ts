import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
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
    [
      "meta",
      {
        name: "google-site-verification",
        content: "YfryvcUpXvpvzX8xdK2JY2yad89if-kCk1Mo7ogs5Is",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Documentation",
      description: "Documentation for sagelga project",
    },
  },

  theme: defaultTheme({
    logo: "https://img.icons8.com/fluency/32/000000/layers.png",
    repo: "sagelga/documentation",
    docsRepo: "sagelga/documentation",
    docsBranch: "main",

    locales: {
      "/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),

  plugins: [
    docsearchPlugin({
      appId: "VIR8TV46UV",
      apiKey: "b4ef90b459d81c338bf1f61b2ad2ad06",
      indexName: "sagelga",
    }),
    googleAnalyticsPlugin({
      id: "G-BTF0LX3HTD",
    }),
  ],
});
