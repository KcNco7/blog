import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "KcNcozz的博客",
  description: "vuepress-theme-hope构建的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
