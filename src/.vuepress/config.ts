import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Zeile Documentation",
      description: "The Zeile scripting language documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Zeile 文档",
      description: "Zeile 脚本语言文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
