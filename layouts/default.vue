<template>
  <div class="wrapperApp" :class="backgroundClass">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const backgroundClass = computed(() => {
  const category = route.params.categories || "default";
  return `bg bg_${category}`;
});
</script>

<style lang="scss">
$bg: no-repeat, center, cover;
$bg-default: url("/public/img/screen-background/default.png");
$bg-theaters: url("/public/img/venues/lenkom/king-play.webp");
$bg-kids: url("/public/img/screen-background/bg-cirqe.jpg");
$bg-sport: url("/public/img/screen-background/bg-sport.jpg");
$bg-stage: url("/public/img/screen-background/bg-stage.jpg");
$bg-opera: url("/public/img/screen-background/theater.png");

.wrapperApp {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  margin-top: 63px;
  margin-bottom: 58px;
  flex: 1;
  overflow-y: auto;
}

.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &_default {
    background-image: $bg-default;
  }
  &_theaters {
    background-image: $bg-theaters;
  }

  &_kids {
    background-image: $bg-kids;
  }

  &_sport {
    background-image: $bg-sport;
  }

  &_stage {
    background-image: $bg-stage;
  }

  &_opera {
    background-image: $bg-opera;
  }
}
</style>
