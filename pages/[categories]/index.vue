<template>
  <section class="section">
    <h2 class="visualyHidden">{{ categoryTitle }}</h2>
    <ul class="venueList list">
      <li v-for="venue in venues" :key="venue.path" class="venueItem">
        <div class="content">
          <div class="overlayBlur">
            <NuxtLink :to="`/${category}/${venue.path}`" class="venueLink link">
              <h2 class="venueTitle title">{{ venue.name }}</h2>
              <p class="venueDesc text">{{ venue.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </li>
    </ul>
  </section>
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

<style lang="scss">
.venueList {
  padding: 0;
}

.venueItem:not(:last-child) {
  margin-bottom: 15px;
}

.venueLink {
  width: 100%;
  padding: 15px 10px;
}
</style>
