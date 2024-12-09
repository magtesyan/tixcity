<template>
  <li class="itemMobMenu">
    <NuxtLink :to="link.to" class="link itemLinkMenu" @click="$emit('close')">
      {{ link.label }}
    </NuxtLink>
  </li>
</template>

<script setup>
defineEmits(['close'])
defineProps({
  link: {
    type: Object,
    required: true,
    validator: (value) => 'to' in value && 'label' in value,
  },
})
</script>

<style lang="scss" scoped>
.itemMobMenu {
  padding: 15px 0;
  color: #ffffff;
}
</style>
