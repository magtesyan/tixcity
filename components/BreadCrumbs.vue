<template>
  <ul class="breadCrumbsList">
    <li
      v-for="(circle, index) in circles"
      :key="index"
      :class="['breadCrumbsItem', 'circle', { active: activeIndex === index }]"
    />
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const circles = new Array(5).fill(null)
const activeIndex = ref(null)
</script>

<style lang="scss" scoped>
.breadCrumbsList {
  z-index: 1;
}

.breadCrumbsItem {
  width: 5px;
  height: 5px;
  background: coral;
}
</style>
