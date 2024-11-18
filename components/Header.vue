<template>
  <header class="header">
    <div class="containerHeader">
      <Logo />
    </div>
    <MobileMenu />
  </header>
</template>

<script setup></script>

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
  width: 100%;
  padding: 0 3%;

  @include tablet {
    padding: 1% 4%;
  }

  @include desktop {
    padding: 1% 7%;
  }
}
</style>
