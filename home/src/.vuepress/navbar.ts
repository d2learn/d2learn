import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/courses/",
  "/xlings/",
  {
    text: "论坛",
    icon: "fa-solid fa-comments",
    link: "https://forum.d2learn.org",
  },
  "/docs/",
  "/about/",
]);