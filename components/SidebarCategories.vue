<template>
  <div class="sidebarCategories">
    <CategoryList
      :categories="categories"
      categories-list="categoriesList"
      categories-item="categoriesItem"
      categories-link="categoriesLink"
      categories-link-title="categoriesLinkTitle"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebarCategories {
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  z-index: 1;
  height: 100vh;
}

.categoriesList {
  display: flex;
  transform: rotate(-90deg);
  gap: 15px;
}
</style>
