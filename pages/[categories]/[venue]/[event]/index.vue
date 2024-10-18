<template>
  <div>
    <NuxtLink :to="`/${category}/${venues}`" class="link">Назад</NuxtLink>
    <h2>{{ event.title }}</h2>
    <p>{{ event.scene }}</p>
    <p><strong>Дата: </strong>{{ formatDate(event.date) }}</p>
    <p><strong>Время:</strong>{{ event.time }}</p>
    <p>{{ event.description }}</p>
    <h3>LДействующие лица:</h3>
    <ul>
      <li v-for="actor in event.cast" :key="actor">
        {{ actor }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import eventsData from "../../../../assets/data/events.json";

const route = useRoute();
const category = route.params.categories;
const venues = route.params.venue;
const eventPath = route.params.event;
const event = eventsData[eventPath] || [];

function formatDate(dataStr) {
  const option = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dataStr).toLocaleDateString("ru-RU", option);
}
</script>

<style lang="scss" scoped></style>
