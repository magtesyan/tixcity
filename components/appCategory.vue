<template>
  <section class="categories">
    <div class="categories__container">
      <div class="categories__background">
        <ul class="categories__list">
          <li
            class="categories__item"
            v-for="(category, index) in categories"
            :key="index"
            :class="`item-${index + 1}`"
          >
            <NuxtLink class="categories__link" to="/teathre/teathre">
              <span class="categories__link-title">{{ category.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: "Театры", value: "teathre" },
  { name: "Дети", value: "children" },
  { name: "Спорт", value: "sport" },
  { name: "Эстрада", value: "stage" },
  { name: "Опера", value: "opera" },
];
</script>

<style lang="scss">
.categories__container {
  width: 92.5%;
  margin: 0 auto;
}

.categories__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.categories__list {
  padding: 12px;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.categories__link {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.categories__link-title {
  display: block;
}

.item-1 {
  background-color: #59b77a;
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 2;
  grid-column-end: 4;
}

.item-2 {
  background-color: #7ef5dc;
  grid-row-start: 2;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 2;
}
.item-3 {
  background-color: #9f9ba8;
  grid-row-start: 2;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 3;
}
.item-4 {
  background-color: #5bedb9;
  grid-row-start: 2;
  grid-column-start: 3;

  grid-row-end: 3;
  grid-column-end: 4;
}
.item-5 {
  background-color: #a7fcdb;
  grid-row-start: 3;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 4;
}
</style>
