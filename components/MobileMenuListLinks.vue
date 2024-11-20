<template>
  <ul class="list listLinksMenu">
    <li class="itemMobMenu">
      <NuxtLink to="/" class="link itemLinkMenu">О нас</NuxtLink>
    </li>
    <li class="itemMobMenu">
      <NuxtLink to="/" @click="$emit('close')" class="link itemLinkMenu"
        >Карта</NuxtLink
      >
    </li>
    <li class="itemMobMenu">
      <NuxtLink to="/" @click="$emit('close')" class="link itemLinkMenu"
        >Идея</NuxtLink
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.listLinksMenu {
  position: absolute;
  background-color: rgba(12, 12, 12, 0.54);
  padding: 50px 20px;
  width: 70%;
  flex-direction: column;
  @include centered;

  border: 1px solid rgb(0 0 0 / 13%);
  box-shadow: -5px -3px 17px 0 rgb(47, 47, 47, 0.4);
}

.itemMobMenu {
  padding: 15px 0;
  color: #ffffff;
}
</style>

<script setup></script>
