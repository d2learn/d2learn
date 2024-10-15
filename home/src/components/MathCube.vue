<template>
  <div class="scene">
    <div class="cube">
      <div class="face front">∑</div>
      <div class="face back">π</div>
      <div class="face right">∫</div>
      <div class="face left">C/C++</div>
      <div class="face top">Python</div>
      <div class="face bottom">?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MathCube'
}
</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
  margin: 100px auto;
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
  background: rgba(255, 255, 255, 0.8);
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