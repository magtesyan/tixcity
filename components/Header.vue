<template>
  <header class="header">
    <div class="content">
      <div class="overlayBlur headerContent">
        <NuxtLink to="/">
          <img
            class="logo"
            src="../public/img/logo/logo-mobile.svg"
            width="104"
            height="53"
            alt="Логотип сайта по продаже билетов"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  top: 0;
  position: fixed;
  width: 100%;
  box-shadow:
    0px 10px 15px 0px #1d1d1d,
    0px 3px 7px 0px #161616;
}

.headerContent {
  border-radius: 0;
}

.logo {
  padding: 5px 0;
  display: block;
  margin: auto;
}
</style>
