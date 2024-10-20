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

const route = useRoute();
const category = route.params.categories;
const backgroundClass = computed(() => {
  switch (category) {
    case "theaters":
      return "bg bg_theaters";
    case "kids":
      return "bg bg_kids";
    case "sport":
      return "bg bg_sport";
    case "stage":
      return "bg bg_stage";
    case "opera":
      return "bg bg_opera";
    default:
      return "bg bg_default";
  }
});
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100%;
}

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
