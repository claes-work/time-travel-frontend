<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import TimelineRecord from "@/components/timeline-record/TimelineRecord.vue";
import {useRecordStore} from "@/stores/RecordStore";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import type {Ref} from "vue";
import {ref} from "vue";

const recordStore = useRecordStore()

const opacity: Ref<number> = ref(0)

function handleScroll(event) {
  const scrollTop = event.target.scrollTop;
  const transitionStartPosition = window.innerHeight / 2;
  const maxScroll = window.innerHeight - 400;

  // Calculate the opacity based on the scroll position
  opacity.value = Math.min((scrollTop - transitionStartPosition) / maxScroll, 1);
  console.log(opacity.value)
}
</script>

<template>
  <main id="timeline-container" @scroll="handleScroll">
    <HeroSection />
    <SearchBar :opacity="opacity" />
    <template
        v-for="(year, index) in recordStore.allYears"
        :key="index"
    >
      <div class="year">{{ year }}</div>
      <TimelineRecord
          v-for="record in recordStore.allRecords"
          :key="record.id"
          :record="record"
      />
    </template>
  </main>
</template>

<style scoped>
#timeline-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  scroll-snap-type: y mandatory;
}

.year {
  text-align: left;
  font-size: 80px;
  padding-left: 55px;
  padding-top: 65px;
  margin-bottom: -150px;
  color: #FFFFFF;
  scroll-snap-align: center;
  scroll-behavior: smooth;
}

@media only screen and (min-width: 768px) {
  .year {
    padding-left: 130px;
    padding-top: 65px;
    margin-bottom: -150px;
  }
}

@media only screen and (min-width: 1024px) {
  .year {
    font-size: 90px;
    text-align: center;
    padding: 120px 0 100px;
    margin-bottom: 0;
  }
}
</style>