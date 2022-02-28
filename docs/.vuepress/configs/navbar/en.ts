import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Projects",
    children: [
      {
        text: "Approval Workflow",
        link: "/approval-workflow/",
      },
      {
        text: "Codenames",
        link: "/codenames/",
      },
      {
        text: "Compro Project",
        link: "/compro-project/",
      },
      {
        text: "Documentation",
        link: "/documentation/",
      },
      {
        text: "Oh Sheet!",
        link: "/oh-sheet/",
      },
      {
        text: "Project Panda",
        link: "/panda/",
      },
      {
        text: "Trash Melody",
        link: "/trashmelody/",
      },
    ],
  },
];
