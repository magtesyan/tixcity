<template>
  <div class="wrapper">
    <appHeader />
    <slot />
    <appFooter />
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrapper {
  padding-top: 12px;
  height: 100vh;
  background-image: url(../public/img/screen-background/backgtound-first.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
