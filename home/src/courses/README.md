---
home: true
title: 公开课
icon: fa-solid fa-graduation-cap

heroText: D2Learn公开课
tagline: 强调动手实践的公开课
actions:
  - text: 课程汇总
    icon: home
    link: https://courses.d2learn.org
    type: primary

  - text: 交流&反馈
    icon: fa-solid fa-comment
    link: https://forum.d2learn.org/category/5/open-courses-%E5%85%AC%E5%BC%80%E8%AF%BE
    type: primary

features:

  - title: Book
    icon: fa-solid fa-book
    details: 在线电子书 & PDF

  - title: Code
    icon: fa-solid fa-code
    details: 练习代码 + 自动代码检测

  - title: Video
    icon: fa-solid fa-video
    details: 视频课程

  - title: X
    icon: fa-solid fa-people-group
    details: 社区交流、开源项目

footer: false
---

<BilibiliVideoGallery :videos="courseVideoList" />

---

<d2ds/>

---

<d2python/>

---

<script setup>
import { ref } from 'vue'
import BilibiliVideoGallery from "@source/components/BilibiliVideoGallery.vue";
import d2ds from "@source/components/courses/d2ds.vue";
import d2python from "@source/components/courses/d2python.vue";

const courseVideoList = ref([
  { bvid: 'BV1WM4m1m7wj', title: '第10集', thumbnail: 'https://i1.hdslb.com/bfs/archive/5c36c1aad0dd1f8d6c3e8a32617fc214fe85f336.jpg' },
  { bvid: 'BV1VE421K7yd', title: '第1集', thumbnail: 'https://i2.hdslb.com/bfs/archive/d6047e532a5a96cc4a7a0375d02a6cc42c86c094.jpg' },
  { bvid: 'BV16t421w7c2', title: '第2集', thumbnail: 'https://i2.hdslb.com/bfs/archive/d8d4c3a64d6e52bc10a377412e9ae204c4f826a6.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1K1421z7kt', title: '第3集', thumbnail: 'https://i0.hdslb.com/bfs/archive/112b851b71e4a5e0e7d6b51f4a3f6e938fd742e9.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1yb421B7ZG', title: '第4集', thumbnail: 'https://i0.hdslb.com/bfs/archive/461485fbc7d2b82d26e33effd30547c768b992ac.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1ND421V7Wn', title: '第5集', thumbnail: 'https://i2.hdslb.com/bfs/archive/fe60daaf7ac0236a79df5d4a7f6865e3f28f6cd8.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1ir421w71C', title: '第6集', thumbnail: 'https://i2.hdslb.com/bfs/archive/62c221874858af47b88902d22b4997abac159ca1.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1uf421Q7jG', title: '第7集', thumbnail: 'https://i1.hdslb.com/bfs/archive/5d786c6810218d2649baf8103b96ed79bbe0099e.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1H1421r7QD', title: '第8集', thumbnail: 'https://i2.hdslb.com/bfs/archive/be51704b7e9f6d4d1ce5bcb31556038887f7ff65.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1zW421R75C', title: '第9集', thumbnail: 'https://i2.hdslb.com/bfs/archive/43f4ec3f18574cc6d7e131bd6b0d730442e5cb3b.jpg@480w_300h_1c_!web-space-channel-video.avif' },
])

</script>