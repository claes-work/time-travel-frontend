<script setup lang="ts">
import {ref} from "vue";
import type {Ref} from "vue";
import {useRecordStore} from "@/stores/RecordStore";
import IconSelectArrow from "@/components/icons/IconSelectArrow.vue";

const recordStore = useRecordStore()

const focusedSelect: Ref<boolean> = ref(false)
</script>

<template>
  <div class="select-wrapper">
    <select
        v-model="recordStore.selectedYear"
        @focus="focusedSelect = true"
        @blur="focusedSelect = false"
        @change="focusedSelect = false"
    >
      <option value="0">Alle Jahre</option>
      <option v-for="year in recordStore.allYears" :value="year">
        {{ year }}
      </option>
    </select>
    <IconSelectArrow :class="{ active: focusedSelect }" />
  </div>
</template>

<style scoped>
.select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

select {
  padding: 14px 12px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  cursor: pointer;
  width: 100%;
  background-color: #b49869;
  transition: 150ms ease-out;
}

.select-wrapper:hover select {
  background-color: #9D8157;
}

@media only screen and (min-width: 600px) {
  .select-wrapper {
    width: 170px;
    margin-bottom: 0;
  }

  select {
    font-size: 18px;
  }
}
</style>