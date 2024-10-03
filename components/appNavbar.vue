<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <NuxtLink class="navbar__item-link" to="/">
          <img
            src="/public/img/icons/house.svg"
            height="24"
            width="24"
            alt=" вернуться на главный экран"
          />
          <span class="navbar__link-title">домой</span>
        </NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__item-link" to="/opera/opera">
          <img
            src="/public/img/icons/сalendar.svg"
            alt="Календарь для выбора нужной даты"
          />
          <span class="navbar__link-title">календарь</span>
        </NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__item-link" to="/opera/opera">
          <img
            src="/public/img/icons/сalendar.svg"
            alt="Календарь для выбора нужной даты"
          />
          <span class="navbar__link-title">календарь</span>
        </NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__item-link" to="79161111703">
          <img src="/public/img/icons/phone.svg" alt="Позвонить" />
          <span class="navbar__link-title">позвонить</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss">
.navbar {
  width: 100%;
}
.navbar__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.navbar__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navbar__item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.navbar__link-title {
  display: block;
}
</style>
