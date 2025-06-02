import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Samorphic Vue",
  description: "A neumorphic UI component library for Vue 3",
  themeConfig: {
    sidebar: [
      {
        text: "Components",
        items: [
          { text: "SButton", link: "/components/SButton" },
          { text: "SToast", link: "/components/SToast" },
          { text: "SInput", link: "/components/SInput" },
          { text: "SCard", link: "/components/SCard" },
          { text: "SAvatar", link: "/components/SAvatar" },
          { text: "SIconButton", link: "/components/SIconButton" },
          { text: "SSwitch", link: "/components/SSwitch" },
        ],
      },
    ],
  },
});
