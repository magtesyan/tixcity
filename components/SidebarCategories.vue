<template>
  <div class="sidebarCategories">
    <div class="sidebarContainer">
      <BreadCrumbs />
      <CategoryList
        :categories="categories"
        categories-list="categoriesList"
        categories-item="categoriesItem"
        categories-link="categoriesLink"
        categories-link-title="categoriesLinkTitle"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebarCategories {
  display: flex;
  align-items: center;
  width: 13%;
  position: absolute;
  left: 0;
  z-index: 1;
  height: 100vh;
  justify-content: end;
}

.sidebarContainer {
  display: flex;
  align-content: center;
  justify-content: center;
}

.categoriesList {
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
}

::v-deep(.categoriesItem) {
  position: relative;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

::v-deep(.categoriesLink) {
  display: flex;
  transform: rotate(-90deg);
  white-space: nowrap;
}

::v-deep(.categoriesLinkTitle) {
  @include font(12px, 16px, 300);
  letter-spacing: 0.05rem;
}
</style>
