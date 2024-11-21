<template>
  <ul class="list listLinksMenu">
    <MobileMenuItem v-for="(link, index) in links" :key="index" :link="link" />
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

<script setup>
const links = [
  { label: "О нас", to: "/" },
  { label: "Карта", to: "/map" },
  { label: "Идея", to: "/idea" },
];
</script>
