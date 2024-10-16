<template>
    <Courses
        :title="courseTitle"
        :description="courseDescription"
        :highlights="courseHighlights"
        :videos="courseVideos"
    />
</template>

<script setup>
import { ref } from 'vue'
import Courses from "@source/components/Courses.vue";

const courseTitle = "d2ds | 动手写数据结构";
const courseDescription = "使用C++实现通用数据结构的核心功能: Array、Vector、List、Queue、Tree ...";
const courseHighlights = [
  { icon: 'fa-book', text: '在线书籍', link: 'https://sunrisepeak.github.io/d2ds' },
  { icon: 'fa-code', text: '练习代码', link: 'https://github.com/d2learn/d2ds' },
  { icon: 'fa-video', text: '课程视频', link: 'https://space.bilibili.com/65858958/channel/collectiondetail?sid=2832366' },
  { icon: 'fa-brands fa-github', text: '开源项目', link: 'https://github.com/Sunrisepeak/dstruct' },
  { icon: 'fa-angle-right', text: '课程安排', link: '' },
];
const courseVideos = [
  { bvid: 'BV1hD421T7sU', title: 'd2ds - 动手写数据结构',thumbnail: 'https://i2.hdslb.com/bfs/archive/89547fa4435cc247cef93fdace5538cebf441cd7.jpg@560w_350h_1c_!web-space-index-topvideo.avif' },
];

const courseVideoList = ref([
  { bvid: 'BV1WM4m1m7wj', title: '第10集', thumbnail: 'https://i1.hdslb.com/bfs/archive/5c36c1aad0dd1f8d6c3e8a32617fc214fe85f336.jpg' },
  { bvid: 'BV1VE421K7yd', title: '第1集', thumbnail: 'https://i2.hdslb.com/bfs/archive/d6047e532a5a96cc4a7a0375d02a6cc42c86c094.jpg' },
  { bvid: 'BV16t421w7c2', title: '第2集', thumbnail: 'https://i2.hdslb.com/bfs/archive/d8d4c3a64d6e52bc10a377412e9ae204c4f826a6.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1K1421z7kt', title: '第3集', thumbnail: 'https://i0.hdslb.com/bfs/archive/112b851b71e4a5e0e7d6b51f4a3f6e938fd742e9.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1VE421K7yd', title: '第4集', thumbnail: 'https://i0.hdslb.com/bfs/archive/461485fbc7d2b82d26e33effd30547c768b992ac.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV16t421w7c2', title: '第5集', thumbnail: 'https://i2.hdslb.com/bfs/archive/fe60daaf7ac0236a79df5d4a7f6865e3f28f6cd8.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1K1421z7kt', title: '第6集', thumbnail: 'https://i2.hdslb.com/bfs/archive/62c221874858af47b88902d22b4997abac159ca1.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1VE421K7yd', title: '第7集', thumbnail: 'https://i1.hdslb.com/bfs/archive/5d786c6810218d2649baf8103b96ed79bbe0099e.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV16t421w7c2', title: '第8集', thumbnail: 'https://i2.hdslb.com/bfs/archive/be51704b7e9f6d4d1ce5bcb31556038887f7ff65.jpg@480w_300h_1c_!web-space-channel-video.avif' },
  { bvid: 'BV1K1421z7kt', title: '第9集', thumbnail: 'https://i2.hdslb.com/bfs/archive/43f4ec3f18574cc6d7e131bd6b0d730442e5cb3b.jpg@480w_300h_1c_!web-space-channel-video.avif' },
])

</script>