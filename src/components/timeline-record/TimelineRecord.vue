<script setup lang="ts">
import ImageWrapper from "@/components/timeline-record/ImageWrapper.vue";
import type {PropType} from "vue";
import type {IRecord} from "@/models/interfaces/IRecord";
import TextWrapper from "@/components/timeline-record/TextWrapper.vue";
import TimelineSVG from "@/components/timeline-record/TimelineSVG.vue";

defineProps({
  record: {
    type: Object as PropType<IRecord>,
    required: true
  }
})
</script>

<template>
  <section>
    <div class="container">
      <TextWrapper class="text-wrapper" :record="record" />
      <ImageWrapper class="image-wrapper" :img-src="record.imgSrc" />
    </div>
    <TimelineSVG />
  </section>
</template>

<style scoped>
section {
  padding-top: 28vh;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  overflow: hidden;
}

.container {
  height: 100%;
  padding-left: 45px;
}
@media only screen and (min-width: 768px) {
  section {
    padding-top: 26vh;
  }
  .container {
    padding-left: 120px;
  }
}

@media only screen and (min-width: 1024px) {
  section {
    padding: 80px 0;
    scroll-snap-align: center;
  }

  .container {
    display: flex;
    column-gap: 100px;
    padding-left: 0;
  }

  section:nth-of-type(even) .container {
    flex-direction: row-reverse;
  }

  section:nth-of-type(odd) .container {
    flex-direction: row;
  }

  .text-wrapper, .image-wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
  }
}

@media only screen and (min-width: 1280px) {
  section {
    padding: 100px 0;
  }
  .container {
    column-gap: 160px;
  }
}
</style>