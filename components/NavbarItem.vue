<template>
  <li class="navbarItem">
    <NuxtLink :to="link.to" class="link navbarLink">
      <img
        :src="link.icon"
        width="24"
        height="24"
        :alt="link.text"
        class="navbarLinkIcon"
      />
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
}

.navbarLink {
  @include font(12px, 14px, 400, "Oswald");
  letter-spacing: 0.03rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 7px 0;
}

.router-link-exact-active,
.navbarLinkIcon {
  color: #ff0000;
}

.navbarLinkIcon {
  width: 24px;
  height: 24px;

  @include tablet {
    width: 26px;
    height: 26px;
  }
}

.navbarLinkTitle {
  @include font(10px, 16px, 500);

  @include tablet {
    @include font(12px, 16px, 500);
  }
}
</style>
