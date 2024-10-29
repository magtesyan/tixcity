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
          <span class="navbarLinkTitle">Домой</span>
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
          <span class="navbarLinkTitle">Календарь</span>
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
          <span class="navbarLinkTitle">Календарь</span>
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
          <span class="navbarLinkTitle">Позвонить</span>
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
  @include font(0.8rem, 19px, 300, "Roboto");
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: $primaryColor;
  padding: 7px 0;
}

.navbarLinkIcon {
  width: 26px;
  height: 26px;
}
</style>
