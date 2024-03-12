<script setup lang="ts">
import {PropType} from "vue";
import {IRecord} from "@/models/interfaces/IRecord";

defineProps({
  record: {
    type: Object as PropType<IRecord>,
    required: true
  }
})
</script>

<template>
  <div class="text-wrapper">
    <span class="date">{{ record.date }}</span>
    <h3 class="title">{{ record.title }}</h3>
    <p class="text">{{ record.text }}</p>
  </div>
</template>

<style>
.text-wrapper {
  margin-bottom: 25px;
}

.date {
  display: block;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -.4px;
  margin-bottom: 8px;
  color: #C3A475;
}

.title {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 15px;
  color: #FFFFFF;
}

p {
  line-height: 25px;
  color: #C8C8C8;
}

@media only screen and (min-width: 600px) {
  .text-wrapper {
    max-width: 650px;
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 1024px) {
  section:nth-of-type(even) .text-wrapper {
    align-items: flex-start;
  }
  section:nth-of-type(odd) .text-wrapper {
    align-items: flex-end;
  }

  section:nth-of-type(even) .text-wrapper p,
  section:nth-of-type(even) .text-wrapper .title {
    text-align: left;
  }
  section:nth-of-type(odd) .text-wrapper p,
  section:nth-of-type(odd) .text-wrapper .title {
    text-align: right;
  }
}
</style>