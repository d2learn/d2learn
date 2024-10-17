---
home: true
title: 主页
icon: home
heroFullScreen: true

heroImage: /null.svg

heroText: D2Learn 社区
tagline: 一个 <知识、技术、创意/> 分享和交流的社区

actions:
  - text: 开源主页
    link: https://github.com/d2learn
    type: primary

  - text: 公开课
    link: /courses/
    type: primary

  - text: xlings工具
    link: /xlings/
    type: primary

  - text: 论坛
    link: https://forum.d2learn.org
    type: primary

footer: false
---

<ClientOnly>
  <div class="responsive-x-cube-container" >
    <ResponsiveXCube :offsetX="computedOffsetX" :offsetY="computedOffsetY" :cubeColor="cubeColor" />
  </div>
</ClientOnly>

## 视频

<BilibiliVideoGallery :videos="videoList" />

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ResponsiveXCube from "@source/components/ResponsiveXCube.vue"

import BilibiliVideoGallery from "@source/components/BilibiliVideoGallery.vue";

const videoList = ref([
  { bvid: 'BV1hAxBe1EVC', title: 'd2learn logo设计过程', thumbnail: 'https://i2.hdslb.com/bfs/archive/5b528bf6d74bb6034b87c109ed0b1ea9ca847eda.jpg' },
]);

const props = defineProps({
  offsetXRatio: {
    type: Number,
    default: -0.225
  },
  offsetYRatio: {
    type: Number,
    default: -0.62
  },
  cubeColor: {
    type: String,
    default: 'rgba(0, 255, 255, 0.3)'
  }
});

const windowSize = ref({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0
});

const isSmallScreen = computed(() => windowSize.value.width < 959);

const computedOffsetX = computed(() => {
  return isSmallScreen.value ? 0 : windowSize.value.width * props.offsetXRatio;
});

const computedOffsetY = computed(() => {
  return isSmallScreen.value ? windowSize.value.height * -0.85 : windowSize.value.height * props.offsetYRatio;
});

const updateWindowSize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});

</script>

<style scoped>
.responsive-x-cube-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
</style>