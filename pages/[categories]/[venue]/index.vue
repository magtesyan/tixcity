<template>
  <div>
    <h2>{{ category.title }}</h2>
    <ul class="eventsList list">
      <li v-for="event in repertoire" :key="event.eventPath" class="eventsItem">
        <NuxtLink
          :to="`/${category}/${venues}/${event.eventPath}`"
          class="eventsLink link"
        >
          {{ event.title }} - {{ formatDate(event.date) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import repertoireDate from "./../../assets/data/repertoire.json";

const route = useRoute();

const category = route.params.categories;
const venues = route.params.venue;
const repertoire = repertoireDate[venues] || [];

function formatDate(dataStr) {
  const option = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dataStr).toLocaleDateString("ru-RU", option);
}
</script>

<style lang="scss" scoped></style>
