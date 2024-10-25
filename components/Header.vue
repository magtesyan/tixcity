<template>
  <header class="header">
    <div class="content">
      <div class="overlayBlur _headerContent">
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
  left: 0;
  right: 0;
  z-index: 1000;
}

._headerContent {
  border-radius: 0;
}

.logo {
  padding: 5px 0;
  display: block;
  margin: auto;
}
</style>
