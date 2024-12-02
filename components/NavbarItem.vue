<template>
  <li class="navbarItem">
    <NuxtLink :to="link.to" class="link navbarLink">
      <Icon :name="link.icon" class="navbarLinkIcon" />
      <span class="navbarLinkTitle">{{ link.label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  link: {
    label: String,
    to: String,
    icon: String,
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.navbarItem {
  position: relative;
  flex-direction: column;
  @include centered;

  &:hover {
    background: red;
  }
}

.navbarItem:nth-child(3) {
  background: $background-primary;
  box-shadow: 0px 0px 0px #2d2d2d;
}

.navbarLink {
  @include font(12px, 14px, 400, "Oswald");
  padding: 10px 0;
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.navbarLinkIcon {
  width: 24px;
  height: 24px;
  margin-bottom: 2px;

  @include tablet {
    width: 26px;
    height: 26px;
    margin-bottom: 4px;
  }
}

.navbarLinkTitle {
  @include font(12px, 15px, 300);
  letter-spacing: 1px;

  @include tablet {
    @include font(14px, 16px, 300);
  }

  @include desktop {
    @include font(14px, 16px, 400);
    letter-spacing: 1px;
  }
}
</style>
