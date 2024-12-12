<template>
  <section class="section">
    <h2 class="visualyHidden">category.title</h2>
    <NuxtLink to="/theaters" class="link">Назад</NuxtLink>
    <h2 class="sectionTitle title">Афиша</h2>
    <h3 class="monthTitle title">Ноябрь</h3>

    <ul class="eventsList list">
      <li v-for="event in repertoire" :key="event.eventPath" class="eventsItem">
        <div class="content">
          <div class="overlayBlur">
            <div class="descEvent">
              <img
                :src="event.image"
                width="100"
                height="100"
                :alt="event.name"
                class="venue"
              />
              <p class="eventDay">{{ formatDate(event.day) }}</p>
            </div>
            <NuxtLink
              :to="`/${category}/${venues}/${event.eventPath}`"
              class="eventsLink link"
            >
              <h3 class="eventCardTitle title">
                {{ event.title }}
              </h3>
            </NuxtLink>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import repertoireDate from './../../assets/data/repertoire.json'

const route = useRoute()

const category = route.params.categories
const venues = route.params.venue
const repertoire = repertoireDate[venues] || []

function formatDate(dataStr) {
  const option = { month: 'long', day: 'numeric' }
  return new Date(dataStr).toLocaleDateString('ru-RU', option)
}
</script>

<style lang="scss">
.eventCardTitle {
  text-align: center;
}
.eventsList {
  padding: 0;
}

.eventsItem {
  margin-bottom: 15px;
}

.eventsLink {
  width: 100%;
  padding: 5px;
}

.descEvent {
  position: relative;
}

.eventDate {
  position: absolute;
  right: 0;
  top: 25px;
  font-size: 22px;
  text-align: center;
}
</style>
