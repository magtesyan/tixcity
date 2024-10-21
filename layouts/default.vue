<template>
  <div class="wrapper">
    <div :class="backgroundClass">
      <Header />
      <slot />
      <Footer />
    </div>
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
.wrapper {
  height: 100vh;
  width: 100%;
}

$bg: no-repeat, center, cover;
$bg-default: url("/public/img/screen-background/default.png");
$bg-theaters: url("/public/img/screen-background/theater.png");
$bg-kids: url("/public/img/screen-background/bg-cirqe.jpg");
$bg-sport: url("/public/img/screen-background/bg-sport.jpg");
$bg-stage: url("/public/img/screen-background/bg-stage.jpg");
$bg-opera: url("/public/img/screen-background/theater.png");

.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;

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
