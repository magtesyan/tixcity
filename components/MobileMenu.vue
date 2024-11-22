<template>
  <div v-if="isOpen" class="mobileMenu" :class="{ open: isOpen }">
    <MobileMenuListLinks />
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
});
</script>

<style lang="scss" scoped>
.mobileMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0);
  }
}
</style>
