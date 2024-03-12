<script setup lang="ts">

</script>

<template>
  <div class="svg-container">
    <div class="repeated-svg"></div>
  </div>
</template>

<style>
.svg-container {
  position: absolute;
  top: 0;
  left: 15px;
  height: 100%;
  width: 25px;
  overflow: hidden; /* Ensure the repeated SVGs are contained within the container */
}

.repeated-svg {
  /* Reference your SVG file path */
  width: 100%;
  height: 100%;
  background: url('@/assets/images/timeline.svg') repeat-y 50% 0;
  background-size: contain;
}

@media only screen and (min-width: 768px) {
  .svg-container {
    width: 50px;
    left: 45px;
  }
}

@media only screen and (min-width: 1024px) {
  .svg-container {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>