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
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  background: $secondaryColor;
  border: none;
  cursor: pointer;

  @include centered;

  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.8;
  }
}

.gamburgerIcon {
  display: block;
}
</style>
