<template>
  <button @click="$emit('toggle')" class="button mobMenuButton">
    <img
      src="../public/img/icons/menu.svg"
      width="24"
      height="24"
      alt="Меню"
      class="gamburgerIcon"
    />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.mobMenuButton {
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  @include tablet {
    width: 50px;
    height: 50px;
  }

  &:hover {
    opacity: 0.8;
  }
}

.gamburgerIcon {
  display: block;
}
</style>
