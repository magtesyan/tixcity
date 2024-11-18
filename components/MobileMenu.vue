<template>
  <div>
    <button @click="toggleMenu" class="button mobMenuButton">
      <img
        src="../public/img/icons/menu.svg"
        width="24"
        height="24"
        alt="Меню"
        class="gamburgerIcon"
      />
    </button>

    <div v-if="isOpenMenu" class="mobileMenu">
      <ul class="list listLinksMenu">
        <li class="itemMobMenu">
          <NuxtLink to="/" @click="closeMenu" class="link itemLinkMenu"
            >О нас</NuxtLink
          >
        </li>
        <li class="itemMobMenu">
          <NuxtLink to="/" @click="closeMenu" class="link itemLinkMenu"
            >Карта</NuxtLink
          >
        </li>
        <li class="itemMobMenu">
          <NuxtLink to="/" @click="closeMenu" class="link itemLinkMenu"
            >Идея</NuxtLink
          >
        </li>
      </ul>
      <button @click="closeMenu" class="button closeMenu">
        <img
          src="../public/img/icons/menu.svg"
          width="24"
          height="24"
          alt="Закрыть меню"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpenMenu = ref(false);
const closeMenu = () => {
  isOpenMenu.value = false;
};
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<style lang="scss" scoped>
.mobMenuButton,
.closeMenu {
  background: $secondaryColor;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  @include tablet {
    width: 70px;
    height: 70px;
  }
}

.closeMenu {
  position: absolute;
  top: 0;
  right: 0;
}

.gamburgerIcon {
  display: block;
}

.mobileMenu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(13, 16, 24, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
}

.listLinksMenu {
  background-color: rgba(12, 12, 12, 0.54);
  padding: 50px 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(0 0 0 / 13%);
  box-shadow: -5px -3px 17px 0 rgb(47, 47, 47, 0.4);
}

.itemMobMenu {
  padding: 15px 0;
}
</style>
