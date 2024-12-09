<template>
  <header class="header">
    <Logo />

    <ButtonToggle
      :is-open="isOpenMenu"
      :menu-toggle-title="{
        open: 'streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger',
        close: 'streamline:delete-1',
      }"
      @toggle="toggleMenu"
    />
    <MobileMenu :is-open="isOpenMenu" @close="closeMenu" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

const closeMenu = () => {
  isOpenMenu.value = false
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  z-index: 10;
  top: 0;
  position: fixed;
  width: 100%;
}
</style>
