<template>
  <header class="header">
    <div class="containerHeader">
      <Logo />
    </div>
    <MobileMenu />
  </header>
</template>

<script setup>
import MobileMenu from "./MobileMenu.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  z-index: 10;
  top: 0;
  position: fixed;
  width: 100%;
}

.containerHeader {
  display: flex;
  align-items: center;

  @include tablet {
    padding: 15px 39px;
  }
}
</style>
