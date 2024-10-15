import { defineUserConfig } from "vuepress";

import theme from "./theme.js";



export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "D2Learn",
  description: "d2learn official site",

  theme,

  // shouldPrefetch: false,
});
