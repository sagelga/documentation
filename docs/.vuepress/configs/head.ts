import type { HeadConfig } from "@vuepress/core";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "https://img.icons8.com/fluency/16/000000/layers.png",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "https://img.icons8.com/fluency/32/000000/layers.png",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
    },
  ],
  [
    "meta",
    {
      name: "google-site-verification",
      content: "YfryvcUpXvpvzX8xdK2JY2yad89if-kCk1Mo7ogs5Is",
    },
  ],
  [
    "meta",
    {
      name: "application-name",
      content: "sagelga's Documentation",
    },
  ],
  [
    "meta",
    {
      name: "apple-mobile-web-app-title",
      content: "sagelga's Documentation",
    },
  ],
  [
    "meta",
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black",
    },
  ],
];
