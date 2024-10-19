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
      return "bg-theaters";
    case "kids":
      return "bg-kids";
    case "sport":
      return "bg-sport";
    case "stage":
      return "bg-stage";
    case "opera":
      return "bg-opera";
    default:
      return "bg-default";
  }
});
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100%;
}

.bg-theaters {
  background-image: url("/public/img/screen-background/theater.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.bg-kids {
  background-image: url("/public/img/screen-background/bg-cirqe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.bg-sport {
  background-image: url("/public/img/screen-background/bg-sport.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.bg-stage {
  background-image: url("/public/img/screen-background/bg-stage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.bg-opera {
  background-image: url("/public/img/screen-background/bg-opera.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.bg-default {
  background-image: url("/public/img/screen-background/default.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
