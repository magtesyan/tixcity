<template>
  <div class="breadCrumbsContainer">
    <ul class="breadCrumbsList list">
      <li
        v-for="(circle, index) in circles"
        :key="index"
        :class="[
          'breadCrumbsItem',
          'circle',
          { active: activeIndex === index },
        ]"
      />
    </ul>
    <div class="line">
      <!-- <p>sjbvhjsb jsfh</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const circles = new Array(5).fill(null)
const activeIndex = ref(null)
</script>

<style lang="scss" scoped>
.breadCrumbsContainer {
  display: flex;
  position: relative;
}

.line {
  background: $surface;
  width: 2px;
  height: 400px;
  left: 3px;
  top: 0;
  position: absolute;
}

.breadCrumbsList {
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: space-between;
}

.breadCrumbsItem {
  background: $noActive;
  width: 8px;
  height: 8px;
  border-radius: 50px;
}
</style>
