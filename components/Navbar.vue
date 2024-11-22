<template>
  <nav class="navbar">
    <ul class="navbarList list">
      <NavbarItem v-for="link in linksNavbar" :key="link.id" :link="link" />
    </ul>
  </nav>
</template>

<script setup>
const linksNavbar = [
  {
    id: 1,
    label: "Домой",
    to: "/",
    icon: "mynaui:home",
    text: "Вернуться на главную страницу",
  },
  {
    id: 2,
    label: "Календарь",
    to: "#",
    icon: "mynaui:calendar",
    text: "Календарь для выбора даты",
  },
  {
    id: 3,
    label: "Категории",
    to: "/categories",
    icon: "mynaui:components",
    text: "Категории",
  },
  {
    id: 4,
    label: "Поиск",
    to: "#",
    icon: "mynaui:search",
    text: "Поиск по сайту",
  },
  {
    id: 5,
    label: "Кабинет",
    to: "#",
    icon: "mynaui:user-solid",
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
