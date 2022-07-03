import { defineUserConfig } from "@vuepress/cli";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defaultTheme } from "@vuepress/theme-default";
import { head, navbarEn, sidebarEn } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
  head,

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
        navbar: navbarEn,
        sidebar: sidebarEn,
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
