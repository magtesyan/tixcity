<template>
  <div>
    <h2>{{ categoryTitle }}</h2>
    <ul>
      <li v-for="venue in venues" :key="venue.path">
        <NuxtLink :to="`/${category}/${venue.path}`">
          <h2>{{ venue.name }}</h2>
          <p>{{ venue.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import venuesData from "../../assets/data/venues.json";

const route = useRoute();
const category = route.params.categories;
const venues = venuesData[category] || [];

const categoryTitle =
  {
    theaters: "Театр",
    kids: "Дети",
    sport: "Спорт",
    stage: "Эстрада",
    opera: "Опера и балет",
  }[category] || Рубрика;
</script>

<style lang="scss" scoped></style>
