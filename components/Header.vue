<template>
  <header class="header">
    <div class="containerHeader">
      <Logo />
    </div>
    <ButtonMenu />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  z-index: 1;
  top: 0;
  position: fixed;
  width: 100%;
}

.containerHeader {
  display: flex;
  align-items: center;
}
</style>
