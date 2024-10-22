<template>
  <section class="section">
    <h2 class="visualyHidden">{{ categoryTitle }}</h2>
    <ul class="venueList list">
      <li v-for="venue in venues" :key="venue.path" class="venueItem">
        <div class="content">
          <div class="overlayBlur">
            <NuxtLink :to="`/${category}/${venue.path}`" class="venueLink link">
              <img
                :src="venue.image"
                width="150"
                height="100"
                :alt="venue.name"
                class="venueImage"
              />
              <div class="venueDescription">
                <h2 class="venueTitle title">{{ venue.name }}</h2>
                <p class="venueDesc text">{{ venue.description }}</p>
              </div>
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
.venueTitle {
  @include font(1.4rem, 22px, 500);
  margin: 0 0 5px 0;
  text-align: center;
}

.venueDesc {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  @include font(14px, 19px, 400);
}

.venueList {
  padding: 0;
}

.venueItem:not(:last-child) {
  margin-bottom: 10px;
}

.venueLink {
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
}

.venueImage {
  width: 100%;
  height: auto;
  margin-bottom: 15px;

  box-shadow: 7px 15px 10px -5px black;
}
</style>
