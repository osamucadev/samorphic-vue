import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Samorphic Vue",
  description: "A neomorphic Vue 3 component library",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/" },
      { text: "GitHub", link: "https://github.com/seu-usuario/samorphic-vue" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Introduction", link: "/" }],
      },
    ],
  },
});
