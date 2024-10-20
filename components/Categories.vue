<template>
  <section class="section">
    <h2 class="visualyHidden">Категории</h2>
    <div class="content">
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
    </div>
  </section>
</template>

<script setup>
import categoriesData from "../assets/data/categories.json";
const categories = categoriesData.categories;
</script>

<style lang="scss">
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
  display: block;
  padding: 15px 0;
}

.categoriesLink {
  width: 100%;
}
</style>
