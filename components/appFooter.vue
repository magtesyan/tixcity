<template>
  <footer class="footer">
    <div class="content-container">
      <appNavbar />
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  background: #1c1c1c;
  position: fixed;
  bottom: 0;
  min-height: 56px;
  width: 100%;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
