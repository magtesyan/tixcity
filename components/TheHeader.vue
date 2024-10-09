<template>
  <header class="header">
    <div class="content headerContent">
      <div class="overlayBlur">
        <img
          class="logo"
          src="../public/img/logo/logo-mobile.svg"
          width="104"
          height="53"
          alt="Логотип сайта по продаже билетов"
        />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.headerContent {
  padding: 20px 12px 15px;
}

.logo {
  display: block;
}
</style>
