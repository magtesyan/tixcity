<template>
  <div class="wrapper">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100%;
  background-image: url(../public/img/screen-background/background.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
