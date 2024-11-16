<template>
  <footer class="footer">
    <Navbar />
  </footer>
</template>

<script setup></script>

<style lang="scss">
.footer {
  display: flex;
  z-index: 10;
  position: fixed;
  width: 100%;
  bottom: 0;
  min-height: 60px;
  background: $background-primary;

  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
}
</style>
