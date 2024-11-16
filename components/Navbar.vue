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
            src="/public/img/icons/search.svg"
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
    <button type="button" class="button buttonCategory">
      <img
        class="navbarLinkIcon"
        src="/public/img/icons/phone.svg"
        height="24"
        width="24"
        alt="Позвонить"
      />
    </button>
  </nav>
</template>

<script setup></script>

<style lang="scss">
.navbar {
  position: relative;
  width: 100%;
  // background-image: url("../public/img/Subtract.svg");
  // background-position: center;
  // background-size: cover;
  // background-repeat: no-repeat;
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
  @include font(12px, 14px, 400, "Oswald");
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 7px 0;
}

.navbarLinkIcon {
  width: 26px;
  height: 26px;
}

.buttonCategory {
  position: absolute;
  top: -50%;
  left: -50%;
  background: red;
}
</style>
