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
  display: none;

  @include tablet {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    z-index: 1;
    height: 100vh;
    justify-content: end;
  }

  @include desktop {
    padding-left: 40px;
  }
}

.sidebarContainer {
  @include tablet {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 60%;
  }

  @include desktop {
    height: 70%;
  }
}

.categoriesList {
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60px;
}

::v-deep(.categoriesItem) {
  position: relative;
  height: 110px;
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
  @include font(16px, 19px, 300);
  letter-spacing: 0.05rem;
}
</style>
