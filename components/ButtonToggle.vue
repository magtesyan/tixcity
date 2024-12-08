<template>
  <button class="button menuToggle" @click="$emit('toggle')">
    <div class="menuToggleTitle" v-if="isOpen">
      <Icon :name="menuToggleTitle.close" class="icon" />
    </div>
    <div class="menuToggleTitle" v-else>
      <Icon :name="menuToggleTitle.open" class="icon" />
    </div>
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
  width: 50px;
  height: 50px;
  @include centered;
  z-index: 1;
  background: $secondaryColor;
  right: 0;
  position: absolute;

  @include tablet {
    width: 65px;
    height: 65px;
  }
}
</style>
