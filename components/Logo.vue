<template>
  <NuxtLink to="/" class="link logo">
    <img
      class="logoIcon"
      src="../public/img/logo/logo-mobile.png"
      width="130"
      height="31"
      alt="Логотип сайта по продаже билетов"
    />
  </NuxtLink>
</template>

<script setup></script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.logoIcon {
  @include tablet {
    width: 150px;
    height: 45px;
  }
}
</style>
