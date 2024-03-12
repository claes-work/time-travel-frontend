<script setup lang="ts">
import SearchBarSelect from "@/components/search-bar/SearchBarSelect.vue";
import SearchBarInput from "@/components/search-bar/SearchBarInput.vue";

defineProps({
  opacity: {
    type: Number,
    default: 0
  }
})
</script>

<template>
    <div class="search-bar">
      <SearchBarSelect />
      <SearchBarInput />
    </div>
  <div class="search-bar-underlay" :style="`background: linear-gradient(to bottom, rgba(0,0,0,${opacity}), rgba(0,0,0,0))`"></div>
</template>

<style scoped>
.search-bar {
  position: sticky;
  top: 25px;
  left: 15px;
  width: calc(100% - 30px);
  max-width: 860px;
  display: flex;
  flex-direction: column;
  background-color: #373839;
  padding: 20px;
  border-radius: 25px;
  margin: -240px auto 5vh;
  z-index: 150;
}

.search-bar-underlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  pointer-events: none;
  transition: background 2s ease-out;
  z-index: 100;
}

@media only screen and (min-width: 600px) {
  .search-bar {
    flex-direction: row;
    border-radius: 150px;
    padding: 14px;
    top: 40px;
    margin: -240px auto 14vh;
  }
}

@media only screen and (min-width: 1024px) {
  .search-bar {
    margin: -240px auto 9vh;
  }
}

</style>