<template>
  <nav class="navbar">
    <ul class="navbarList list">
      <NavbarItem v-for="(link, index) in links" :key="index" :link="link" />
    </ul>
  </nav>
</template>

<script setup>
const links = [
  { label: "Домой", to: "/categories" },
  { label: "Календарь", to: "/" },
  { label: "Категории", to: "/categories" },
  { label: "Поиск", to: "/" },
  { label: "Кабинет", to: "/" },
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
  flex-direction: column;
  @include centered;
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
