<template>
  <section class="pageSectionCategories">
    <h2 class="visualyHidden">Категории</h2>
    <CategoryList
      :categories="categories"
      categories-list="categoriesList"
      categories-item="categoriesItem"
      categories-link="categoriesLink"
      categories-link-title="categoriesLinkTitle"
    />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.pageSectionCategories {
  padding: 17px 12px 17px;
}

.categoriesList {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px 0;
}

::v-deep(.categoriesItem) {
  width: calc(92% / 3 - 5px);
  text-align: center;
  background: $background;
  border-radius: 6px;
}

::v-deep(.categoriesItem:first-child),
::v-deep(.categoriesItem:last-child) {
  width: 92%;
}

::v-deep(.categoriesLinkTitle) {
  @include font(14px, 16px, 300, 'Old Standart TT');
  letter-spacing: 0.03%;
  display: block;
  padding: 10px 0;
  color: $primaryColor;
}

@include desktop {
  @include font(16px, 19px, 300);
  letter-spacing: 0.03%;
  color: $primaryColor;
}

::v-deep(.categoriesLink) {
  width: 100%;
}
</style>
