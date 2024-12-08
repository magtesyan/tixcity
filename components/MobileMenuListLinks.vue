<template>
  <ul class="list listLinksMenu">
    <MobileMenuItem v-for="(link, index) in links" :key="index" :link="link" />
  </ul>
</template>

<style lang="scss" scoped>
.listLinksMenu {
  padding: 50px 20px;
  width: 70%;
  flex-direction: column;
  @include centered;

  backdrop-filter: blur(15px) saturate(81%);
  -webkit-backdrop-filter: blur(15px) saturate(81%);
  background-color: rgba(17, 25, 40, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

.itemMobMenu {
  padding: 15px 0;
}
</style>

<script setup>
const links = [
  { label: "О нас", to: "/" },
  { label: "Карта", to: "/" },
  { label: "Идея", to: "/" },
];
</script>
