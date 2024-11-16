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
          <NuxtLink to="/" @click="closeMenu" class="itemLinkMenu"
            >О нас</NuxtLink
          >
        </li>
        <li class="itemMobMenu">
          <NuxtLink to="/" @click="closeMenu" class="itemLinkMenu"
            >Карта</NuxtLink
          >
        </li>
        <li class="itemMobMenu">
          <NuxtLink to="/" @click="closeMenu" class="itemLinkMenu"
            >Идея</NuxtLink
          >
        </li>
      </ul>
      <button @click="closeMenu" class="closeMenu">
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
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 20;
}

.listLinksMenu {
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.itemMobMenu {
  padding: 15px 0;
  border-bottom: 1px solid red;
}
</style>
