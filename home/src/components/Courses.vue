<template>
  <div class="course-component">
    <h1 class="course-title">{{ title }}</h1>
    <p class="course-description">{{ description }}</p>

    <div class="course-content" :class="{ 'video-left': videoOnLeft }">
      <div class="content-half course-details">
        <ul class="course-highlights">
          <li v-for="highlight in highlights" :key="highlight.text">
            <a :href="highlight.link" class="highlight-item">
              <i :class="['fas', highlight.icon]"></i>
              {{ highlight.text }}
            </a>
          </li>
        </ul>
      </div>

      <div class="content-half video-player">
        <div class="video-wrapper" :style="videoWrapperStyle">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :loop="videos.length > 1"
            :autoplay="videos.length > 1 ? {
              delay: 5000,
              disableOnInteraction: false,
            } : false"
            :navigation="videos.length > 1"
            :pagination="videos.length > 1 ? { clickable: true } : false"
          >
            <swiper-slide v-for="video in videos" :key="video.bvid">
              <div class="video-container">
                <img :src="video.thumbnail" :alt="video.title" />
                <div class="video-title">{{ video.title }}</div>
                <div class="video-overlay" @click="openModal(video)"></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="selectedVideo" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="video-open-wrapper">
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
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  highlights: {
    type: Array,
    required: true
  },
  videos: {
    type: Array,
    required: true
  },
  videoOnLeft: {
    type: Boolean,
    default: false
  },
  videoScale: {
    type: Number,
    default: 1,
    validator: (value) => value > 0
  }
});

const selectedVideo = ref(null);
const modalWidth = ref(800);
const modalHeight = ref(600);

const modules = computed(() => {
  if (props.videos.length > 1) {
    return [Autoplay, Navigation, Pagination];
  }
  return [];
});

const videoWrapperStyle = computed(() => {
  const baseWidth = 80; // 80% of the content-half
  const scaledWidth = baseWidth * props.videoScale;
  return {
    width: `${scaledWidth}%`,
  };
});

const openModal = (video) => {
  selectedVideo.value = video;
};

const closeModal = () => {
  selectedVideo.value = null;
};

</script>

<style scoped>
.course-component {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.course-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.course-description {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 30px;
}

.course-content {
  display: flex;
  gap: 30px;
}

.content-half {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.course-details {
  display: flex;
  justify-content: center;
  align-items: center;
}

.course-highlights {
  list-style-type: none;
  padding: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100%; /* 确保充满整个高度 */
}

.highlight-item {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中对齐内容 */
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
  width: 100%;
  text-align: center; /* 确保文本居中 */
}

.highlight-item i {
  margin-right: 10px;
  font-size: 1.2em;
  width: 20px;
  text-align: center;
}

.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  width: 80%;
}

.video-container {
  position: relative;
  width: 100%;
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

.video-left {
  flex-direction: row-reverse;
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
  width: 90vw;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.video-open-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 宽高比 */
  width: 100%;
}

.video-open-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .course-content {
    flex-direction: column;
  }
  
  .video-left {
    flex-direction: column;
  }

  .content-half {
    width: 100%;
  }

  .video-wrapper,
  .course-highlights {
    width: 100% !important;
  }

  .modal-content {
    padding: 10px;
  }
}
</style>