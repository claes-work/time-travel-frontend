<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  borderColor: {
    type: String,
    default: '#c3a475'
  },
  borderWidth: {
    type: Number,
    default: 5
  }
})
</script>

<template>
  <div class="image-wrapper">
    <svg viewBox="0 0 769 564" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="background-pattern" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image :href="imgSrc" x="0" y="0" width="100%" height="100%"
                 preserveAspectRatio="xMidYMid slice"/>
        </pattern>
      </defs>
      <path class="background" d="M384.5 23L31 282L384.5 541L738 282L384.5 23Z" fill="url(#background-pattern)"/>
      <path class="border" d="M384.5 4L5 282L384.5 560L764 282L384.5 4Z" :stroke="borderColor" :stroke-width="borderWidth"/>
    </svg>
  </div>
</template>

<style scoped>
svg {
  width: 100%;
  max-width: 400px;
}

section:nth-of-type(even) .image-wrapper {
  align-items: flex-end;
}
section:nth-of-type(odd) .image-wrapper {
  align-items: flex-start;
}

@media only screen and (min-width: 1280px) {
  svg {
    max-width: 460px;
  }
}
</style>