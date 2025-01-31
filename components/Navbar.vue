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
    label: 'Домойs',
    to: '/',
    icon: 'streamline:home-3',
    text: 'Вернуться на главную страницу',
  },
  {
    id: 2,
    label: 'Календарь',
    to: '#',
    icon: 'streamline:interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month',
    text: 'Календарь для выбора даты',
  },
  {
    id: 3,
    label: 'Категории',
    to: '../categories',
    icon: 'streamline:interface-dashboard-layout-square-app-application-dashboard-home-layout-square',
    text: 'Категории',
  },
  {
    id: 4,
    label: 'Поиск',
    to: '#',
    icon: 'streamline:magnifying-glass',
    text: 'Поиск по сайту',
  },
  {
    id: 5,
    label: 'Кабинет',
    to: '#',
    icon: 'streamline:interface-user-single-close-geometric-human-person-single-up-user',
    text: 'Личный кабинет',
  },
]
</script>

<style lang="scss">
.navbar {
  position: relative;
  width: 100%;
  display: flex;
}

.navbarList {
  display: grid;
  grid-template-columns: 1fr 1fr 20% 1fr 1fr;

  @include tablet {
    padding: 0 10% 0;
  }

  @include desktop {
    padding: 0 20% 0;
    grid-template-columns: 1fr 1fr 15% 1fr 1fr;
  }
}
</style>
