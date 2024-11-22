<template>
  <footer class="footer">
    <Navbar />
  </footer>
</template>

<script setup></script>

<style lang="scss">
.footer {
  display: flex;
  z-index: 9;
  position: fixed;
  width: 100%;
  bottom: 0;
  min-height: 60px;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 -1px 10px -12px #ffffff;

  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
}
</style>
