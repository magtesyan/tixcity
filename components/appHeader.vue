<template>
  <header class="header">
    <div class="header__container">
      <div class="header__background"></div>
      <img
        class="header__logo logo"
        src="../public/img/logo/logo-mobile.svg"
        width="104"
        height="53"
        alt="Логотип сайта по продаже билетов"
      />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.header {
  min-width: 320px;
  min-height: 56px;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto;
}

.header__container {
  position: relative;
  width: 296px;
  margin: 0 auto;
  padding: 0 5px;
  border-radius: 10px;
}

.header__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
}
</style>
