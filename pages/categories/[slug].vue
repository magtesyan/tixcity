<template>
  <section class="section">
    <h2 class="visualyHidden">{{ categoryName }}</h2>
    <div class="content">
      <ul class="sitesList list">
        <li v-for="site in sites" :key="site.id" class="siteItem">
          <NuxtLink to="/" class="siteLink">{{ site.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const slug = route.params.slug;

const categories = {
  theaters: {
    name: "Театры",
    sites: [
      { id: 1, name: "Ленком" },
      { id: 2, name: "МХАТ им.Чехова" },
      { id: 3, name: "Вахтангова" },
      { id: 4, name: "Малый театр" },
      { id: 5, name: "театр Наций" },
      { id: 6, name: "театр Ермоловой" },
      { id: 7, name: "театр Армии" },
    ],
  },
  kids: {
    name: "Дети",
    sites: [
      { id: 8, name: "Цирк на проспекте Вернадского" },
      { id: 9, name: "Цирк на цветном бульваоре" },
      { id: 10, name: "Храм христа спасителя" },
      { id: 11, name: "Уголок дурова" },
    ],
  },
  sports: {
    name: "Спорт",
    sites: [
      {
        id: 12,
        name: "ВТБ Арена парк - центральный стадион Динамо им. Льва Яшина",
      },
      { id: 13, name: "Ледовый дворец" },
      { id: 14, name: "Стадион Лукойл арена (открытие арена)" },
    ],
  },
  stages: {
    name: "Эстрада",
    sites: [
      { id: 15, name: "КЗ Зарядье" },
      { id: 16, name: "Кремлевский дворец" },
      { id: 17, name: "Дом музыки (ММДМ)" },
      { id: 18, name: "КЗ Космос" },
    ],
  },
  opera: {
    name: "Опера и Балет",
    sites: [
      { id: 19, name: "Большой театр" },
      { id: 20, name: "театр им. Станиславского и Немировича-Данченко" },
    ],
  },
};

const category = categories[slug];
const categoryName = category ? category.name : "Категоррия не найдена";
const sites = category ? category.sites : [];
</script>

<style lang="scss">
.sitesList {
  padding: 10px;
}
</style>
