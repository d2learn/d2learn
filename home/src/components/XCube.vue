<template>
  <div class="scene-wrapper">
    <div class="scene" :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }">
      <div class="cube">
        <div v-for="(face, index) in faces" :key="index" 
             :class="['face', face.position]" 
             :style="{ backgroundColor: cubeColor }">
          {{ face.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCube',
  props: {
    offsetX: {
      type: Number,
      default: 0
    },
    offsetY: {
      type: Number,
      default: 0
    },
    cubeColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.8)' // 默认颜色
    }
  },
  data() {
    return {
      faces: [
        { position: 'front', content: 'd2ds' },
        { position: 'back', content: 'π' },
        { position: 'right', content: '∫' },
        { position: 'left', content: 'd2python' },
        { position: 'top', content: 'xlings' },
        { position: 'bottom', content: '?' }
      ]
    }
  }
}
</script>

<style scoped>
.scene-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s linear infinite;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-family: 'Times New Roman', serif;
}

.front  { transform: rotateY(0deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

@keyframes rotate {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
</style>