<template>
  <section class="sectionNavCategories">
    <h2 class="visualyHidden">Категории</h2>
    <div class="overlayBlur">
      <ul class="categoriesList list">
        <li
          v-for="category in categories"
          :key="category.path"
          class="categoriesItem"
        >
          <NuxtLink class="categoriesLink link" :to="category.path">
            <span class="categoriesLinkTitle">{{ category.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import categoriesData from "../assets/data/categories.json";
const categories = categoriesData.categories;
</script>

<style lang="scss">
.sectionNavCategories {
  padding: 17px 12px 17px;
}

.categoriesList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px 0;
}

.categoriesItem:first-child,
.categoriesItem:last-child {
  width: 92%;
}

.categoriesItem {
  width: calc(92% / 3 - 5px);
  text-align: center;
  background: $background;
  border-radius: 6px;
}

.categoriesLinkTitle {
  @include font(14px, 16px, 300, "Roboto");
  letter-spacing: 0.03%;
  display: block;
  padding: 10px 0;
}

.categoriesLink {
  width: 100%;
}
</style>
