<template>
  <header class="header">
    <div class="header__container">
      <div class="header__background">
        <img
          class="header__logo logo"
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
  min-width: 320px;
  min-height: 56px;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto;
}

.header__container {
  width: 296px;
  margin: 0 auto;
  padding: 15px 5px;
}

.header__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 56px;
  overflow: hidden;
  border-radius: 10px;
}
</style>
