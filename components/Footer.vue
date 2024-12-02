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
  background: #181818b3;
  backdrop-filter: blur(12px);
  box-shadow: 0 -2px 10px #121212;
}
</style>
