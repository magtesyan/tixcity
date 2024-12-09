<template>
  <div v-if="isOpen" class="mobileMenu" :class="{ open: isOpen }">
    <MobileMenuListLinks />
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
})
</script>

<style lang="scss" scoped>
.mobileMenu {
  @include centered;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px) saturate(81%);
  -webkit-backdrop-filter: blur(5px) saturate(81%);
  background-color: $surface;
  color: $primaryColor;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0);
  }
}
</style>
