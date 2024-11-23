<template>
  <NuxtLink to="/" class="logo">
    <img
      class="logoIcon"
      src="/img/logo/logo-mobile.png"
      width="130"
      height="31"
      alt="Логотип сайта по продаже билетов"
    />
  </NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  display: block;
  align-items: center;
  padding: 10px 10px;

  @include tablet {
    padding: 10px 35px;
  }
  @include desktop {
    padding: 10px 40px;
  }
}

.logoIcon {
  @include tablet {
    width: 150px;
    height: 45px;
  }
}
</style>
