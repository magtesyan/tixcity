<template>
  <li class="navbarItem">
    <NuxtLink :to="link.to" class="link navbarLink">
      <span class="navbarLinkTitle">{{ link.label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
    validator: (value) => "to" in value && "label" in value,
  },
});
</script>

<style lang="scss" scoped></style>
