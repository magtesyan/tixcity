<template>
  <header class="header">
    <div class="containerHeader">
      <Logo />
      <MobileMenuButton @toggle="toggleMenu" />
    </div>
    <MobileMenu v-if="isOpenMenu" @close="closeMenu" />
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
  backdrop-filter: blur(10px);
  box-shadow: inset 0 -1px 10px -12px #ffffff;

  @include tablet {
    padding: 0 4%;
  }
}

.containerHeader {
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3%;

  @include tablet {
    padding: 1% 4%;
  }

  @include desktop {
    padding: 1% 7%;
  }
}
</style>
