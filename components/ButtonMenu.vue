<template>
  <button class="button mobMenuButton">
    <div class="mobMenuIcon">1</div>
  </button>
</template>

<script setup></script>

<style lang="scss">
.mobMenuIcon {
  padding: 17px 10px;

  .line {
    display: block;
    width: 29px;
    height: 2px;
    background: $background;
  }

  .line:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
