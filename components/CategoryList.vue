<template>
  <ul :class="[categoriesList, 'list']">
    <li
      v-for="category in categoriesName"
      :key="category.path"
      :class="[categoriesItem]"
    >
      <NuxtLink :class="[categoriesLink, 'link']" :to="category.path">
        <span :class="[categoriesLinkTitle]">{{ category.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import categoriesData from '../assets/data/categories.json'
const categoriesName = categoriesData.categoriesName

defineProps({
  categories: {
    type: Array,
    required: true,
  },
  categoriesList: {
    type: String,
    default: '',
  },
  categoriesItem: {
    type: String,
    default: '',
  },
  categoriesLink: {
    type: String,
    default: '',
  },
  categoriesLinkTitle: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped></style>
