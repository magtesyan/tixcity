<template>
  <button class="button menuToggle" @click="$emit('toggle')">
    <div v-if="isOpen" class="menuToggleTitle">
      <Icon :name="menuToggleTitle.close" class="icon" />
    </div>
    <div v-else class="menuToggleTitle">
      <Icon :name="menuToggleTitle.open" class="icon" />
    </div>
  </button>
</template>

<script setup>
defineEmits(['toggle'])
defineProps({
  isOpen: Boolean,
  menuToggleTitle: {
    type: Object,
    required: true,
  },
})
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
