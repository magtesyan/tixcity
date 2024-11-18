<template>
  <nav class="navbar">
    <ul class="navbarList list">
      <div class="navbarLeftItems">
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
      </div>
      <li class="navbarItem">
        <button
          @click="goToCategories"
          type="button"
          class="button buttonCategory"
        >
          перейти
        </button>
      </li>
      <div class="navbarRightItems">
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
      </div>
    </ul>
  </nav>
</template>

<script setup>
const goToCategories = () => {
  navigateTo("/categories");
};
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
  grid-template-columns: 1fr 25% 1fr;

  @include tablet {
    padding: 1% 4%;
    grid-template-columns: 1fr 25% 1fr;
  }

  @include desktop {
    padding: 1% 20%;
    grid-template-columns: 1fr 15% 1fr;
  }
}

.navbarRightItems,
.navbarLeftItems {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.navbarItem {
  position: relative;
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
  width: 24px;
  height: 24px;

  @include tablet {
    width: 26px;
    height: 26px;
  }
}

.buttonCategory {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $secondaryColor;
  position: absolute;
  top: -20%;
  color: $primaryColor;

  @include tablet {
    width: 70px;
    height: 70px;
    top: -45px;
  }
}

.navbarLinkTitle {
  @include font(10px, 16px, 500);

  @include tablet {
    @include font(12px, 16px, 500);
  }
}
</style>
