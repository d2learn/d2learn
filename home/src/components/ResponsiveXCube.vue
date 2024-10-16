<template>
  <XCube :offsetX="offsetX" :offsetY="offsetY" :cubeColor="cubeColor" />
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import XCube from "./XCube.vue";

export default {
  name: 'ResponsiveXCube',
  components: {
    XCube
  },
  props: {
    offsetXRatio: {
      type: Number,
      default: 0
    },
    offsetYRatio: {
      type: Number,
      default: -0.5
    },
    cubeColor: {
      type: String,
      default: 'rgba(0, 255, 255, 0.3)'
    }
  },
  setup(props) {
    const windowSize = ref({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    const offsetX = computed(() => windowSize.value.width * props.offsetXRatio);
    const offsetY = computed(() => windowSize.value.height * props.offsetYRatio);

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

    return {
      offsetX,
      offsetY
    };
  }
}
</script>