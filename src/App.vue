<script setup lang="ts">
import { RouterView } from 'vue-router'
import {onMounted} from "vue";
import {useRecordStore} from "@/stores/RecordStore";

const recordStore = useRecordStore()

onMounted(() => {
  recordStore.updateAllYears()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
