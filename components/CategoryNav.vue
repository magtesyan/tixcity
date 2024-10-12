<template>
  <section class="section">
    <h2 class="visualyHidden">Навигация по рубрикам</h2>
    <div class="content">
      <div class="overlayBlur">
        <ul class="listCategories list">
          <li
            v-for="category in categories"
            :key="category.id"
            class="itemCategory"
          >
            <NuxtLink
              :to="`/categories/${category.slug}`"
              class="linkCategory link"
              >{{ category.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { id: 1, name: "Театр", slug: "theaters" },
  { id: 2, name: "Дети", slug: "kids" },
  { id: 3, name: "Спорт", slug: "sports" },
  { id: 4, name: "Эстрада", slug: "stages" },
  { id: 5, name: "Опера и Балет", slug: "opera" },
];
</script>

<style lang="scss">
.listCategories {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.itemCategory:first-child,
.itemCategory:last-child {
  width: 100%;
}

.itemCategory {
  flex-grow: 1;
  background: $background-primary;
}

.linkCategory {
  text-align: center;
  padding: 15px;
}
</style>
