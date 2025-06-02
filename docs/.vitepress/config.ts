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
        ],
      },
    ],
  },
});
