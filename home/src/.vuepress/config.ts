import { defineUserConfig } from "vuepress";

import theme from "./theme.js";



export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "D2Learn",
  description: "d2learn official site",

  theme,

  // for display external-img (network)
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],

  // shouldPrefetch: false,
});
