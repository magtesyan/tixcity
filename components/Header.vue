<template>
  <header class="header">
    <div class="containerHeader">
      <Logo />
    </div>
    <ButtonToggle
      :isOpen="isOpenMenu"
      :menuToggleTitle="{
        open: 'humbleicons:bars',
        close: 'humbleicons:times',
      }"
      @toggle="toggleMenu"
    />
    <MobileMenu :isOpen="isOpenMenu" @close="closeMenu" />
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const closeMenu = () => {
  isOpenMenu.value = false;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  z-index: 10;
  top: 0;
  position: fixed;
  width: 100%;
}

.containerHeader {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
