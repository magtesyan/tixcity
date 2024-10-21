<template>
  <nav class="navbar">
    <ul class="navbarList list">
      <li class="navbarItem">
        <NuxtLink class="navbarItemLink link" to="/">
          <img
            class="navbarLinkIcon"
            src="/public/img/icons/house.svg"
            height="24"
            width="24"
            alt=" вернуться на главный экран"
          />
          <span class="navbar__link-title">домой</span>
        </NuxtLink>
      </li>
      <li class="navbarItem">
        <NuxtLink class="navbarItemLink link" to="/opera/opera">
          <img
            class="navbarLinkIcon"
            src="/public/img/icons/сalendar.svg"
            height="24"
            width="24"
            alt="Календарь для выбора нужной даты"
          />
          <span class="navbar__link-title">календарь</span>
        </NuxtLink>
      </li>
      <li class="navbarItem">
        <NuxtLink class="navbarItemLink link" to="/opera/opera">
          <img
            class="navbarLinkIcon"
            src="/public/img/icons/сalendar.svg"
            height="24"
            width="24"
            alt="Календарь для выбора нужной даты"
          />
          <span class="navbar__link-title">календарь</span>
        </NuxtLink>
      </li>
      <li class="navbarItem">
        <NuxtLink class="navbarItemLink link">
          <img
            class="navbarLinkIcon"
            src="/public/img/icons/phone.svg"
            height="24"
            width="24"
            alt="Позвонить"
          />
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
.navbarList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
}

.navbarItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navbarItemLink {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: $primaryColor;
  padding: 5px 0;
}

.navbarLinkIcon {
  margin-bottom: 5px;
}
</style>
