<script setup lang="ts">
import {useRecordStore} from "@/stores/RecordStore";
import IconSearchTrigger from "@/components/icons/IconSearchTrigger.vue";

const recordStore = useRecordStore()
</script>

<template>
  <div class="input-wrapper">
    <input
        v-model="recordStore.searchString"
        type="text"
        placeholder="Nach einem Ereignis suchen ..."
    />
    <IconSearchTrigger />
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
}

input {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
}

input {
  background: transparent;
}

input:active, input:focus {
  border: none;
  outline: none;
}

@media only screen and (min-width: 600px) {
  .input-wrapper {
    width: 100%;
  }

  input {
    padding: 13px 12px 12px 25px;
    font-size: 18px;
  }
}
</style>