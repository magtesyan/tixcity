<template>
  <li :v-for="(item, index) in menuLinks" :key="index" class="itemMobMenu">
    <NuxtLink :to="link.to" @click="$emit('close')" class="link itemLinkMenu">
      {{ link.label }}
    </NuxtLink>
  </li>
</template>

<script setup>
const menuLinks = [
  { label: "О нас", to: "/" },
  { label: "Карта", to: "/" },
  { label: "Идея", to: "/" },
];
</script>

<style lang="scss" scoped>
.itemMobMenu {
  padding: 15px 0;
  color: #ffffff;
}
</style>
