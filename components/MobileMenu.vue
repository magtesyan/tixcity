<template>
  <div class="mobileMenuWrapper" @close="$emit('close')">
    <MobileMenuListLinks />
    <button @click="$emit('close')" class="button closeMenu">
      <img
        src="../public/img/icons/close.svg"
        width="24"
        height="24"
        alt="Закрыть меню"
      />
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mobileMenuWrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(13, 16, 24, 0.85);
  z-index: 20;
}

.closeMenu {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  background: $secondaryColor;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }
}
</style>
