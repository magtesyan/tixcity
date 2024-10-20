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
    background-image: url("/public/img/screen-background/default.png");
  }
  &_theaters {
    background-image: url("/public/img/screen-background/theater.png");
  }

  &_kids {
    background-image: url("/public/img/screen-background/bg-cirqe.jpg");
  }

  &_sport {
    background-image: url("/public/img/screen-background/bg-sport.jpg");
  }

  &_stage {
    background-image: url("/public/img/screen-background/bg-stage.jpg");
  }

  &_opera {
    background-image: url("/public/img/screen-background/bg-opera.png");
  }
}
</style>
