<template>
  <div class="button-back">
    <div class="button__background">
      <NuxtLink class="button__link" to="/">
        <span class="button__title">Назад</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.button-back {
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: 15px;
}

.button__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.button__link {
  text-decoration: none;
  color: #ffffff;
  display: block;
}

.button__title {
  padding: 15px 10px;
  text-align: center;
  display: block;
}
</style>
