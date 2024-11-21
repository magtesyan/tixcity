<template>
  <nav class="navbar">
    <ul class="navbarList list">
      <NavbarItem v-for="(link, index) in links" :key="index" :link="link" />
    </ul>
  </nav>
</template>

<script setup>
const links = [
  {
    label: "Домой",
    to: "/categories",
    icon: "/img/icons/house.svg",
    text: "Вернуться на главную страницу",
  },
  {
    label: "Календарь",
    to: "/",
    icon: "/img/icons/сalendar.svg",
    text: "Календарь для выбора даты",
  },
  {
    label: "Категории",
    to: "/",
    icon: "/img/icons/category.svg",
    text: "Категории",
  },
  {
    label: "Поиск",
    to: "/",
    icon: "/img/icons/search.svg",
    text: "Поиск по сайту",
  },
  {
    label: "Кабинет",
    to: "/",
    icon: "/img/icons/profile.svg",
    text: "Личный кабинет",
  },
];
</script>

<style lang="scss">
.navbar {
  position: relative;
  width: 100%;
  display: flex;
}

.navbarList {
  padding: 0 2%;
  display: grid;
  grid-template-columns: 1fr 1fr 25% 1fr 1fr;

  @include tablet {
    padding: 1% 4%;
  }

  @include desktop {
    padding: 1% 20%;
    grid-template-columns: 1fr 1fr 15% 1fr 1fr;
  }
}
</style>
