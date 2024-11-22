<template>
  <button class="button menuToggle" @click="$emit('toggle')">
    <span class="menuToggleTitle">{{
      isOpen ? menuToggleTitle.close : menuToggleTitle.open
    }}</span>
  </button>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  menuToggleTitle: Object,
});
</script>

<style lang="scss" scoped>
.menuToggle {
  min-width: 50px;
  min-height: 50px;
  @include centered;
  z-index: 1;
  background: $secondaryColor;

  @include tablet {
    min-width: 70px;
    min-height: 70px;
  }
}
</style>
