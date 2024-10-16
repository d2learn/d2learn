<template>
  <div class="bilibili-video-gallery">
    <swiper
      ref="swiperRef"
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="30"
      :pagination="{ clickable: true }"
      :navigation="true"
      :loop="shouldLoop"
      :autoplay="autoplayConfig"
      :speed="500"
      :breakpoints="swiperBreakpoints"
      class="mySwiper"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <swiper-slide v-for="video in videos" :key="video.bvid">
        <div class="video-container">
          <img :src="getThumbnail(video)" :alt="video.title" />
          <div class="video-title">{{ video.title }}</div>
          <div class="video-overlay" @click="openModal(video)"></div>
        </div>
      </swiper-slide>
    </swiper>

    <Teleport to="body">
      <div v-if="selectedVideo" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <iframe
            :src="`//player.bilibili.com/player.html?bvid=${selectedVideo.bvid}&page=1&autoplay=1&danmaku=0`"
            :width="modalWidth"
            :height="modalHeight"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps({
  videos: {
    type: Array,
    required: true,
  },
})

const selectedVideo = ref(null)
const modalWidth = ref(800)
const modalHeight = ref(600)

const modules = [Pagination, Navigation, Autoplay]

const slidesPerView = ref(3)

const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

const swiperRef = ref(null)

const shouldLoop = computed(() => props.videos.length > 3)

const autoplayConfig = computed(() => {
  if (props.videos.length > 3) {
    return { delay: 3500, disableOnInteraction: false }
  }
  return false
})

const openModal = (video) => {
  selectedVideo.value = video
}

const closeModal = () => {
  selectedVideo.value = null
}

const getThumbnail = (video) => {
  return video.thumbnail
}

const stopAutoplay = () => {
  if (swiperRef.value && swiperRef.value.swiper && swiperRef.value.swiper.autoplay && props.videos.length > 3) {
    swiperRef.value.swiper.autoplay.stop();
  }
}

const startAutoplay = () => {
  if (swiperRef.value && swiperRef.value.swiper && swiperRef.value.swiper.autoplay && props.videos.length > 3) {
    swiperRef.value.swiper.autoplay.start();
  }
}

</script>

<style scoped>
.bilibili-video-gallery {
  margin: 20px 0;
}
.video-container {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.video-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 14px;
}
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.3s ease;
}
.video-overlay:hover {
  background: rgba(0, 0, 0, 0.2);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.mySwiper {
  padding: 20px 0;
}
</style>