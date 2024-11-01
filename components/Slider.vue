<template>
  <section class="slider">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperEffectCoverflow]"
        :slides-per-view="1.5"
        :loop="true"
        :grab-cursor="true"
        effect="coverflow"
        :centered-slides="true"
        :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        class="sliderSwiper"
      >
        <SwiperSlide
          v-for="slide in slides"
          :key="slide.name"
          class="swiperSlide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <h2 class="slideTitle title">{{ slide.title }}</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import slidesData from "../assets/data/slides.json";

const slides = slidesData.slides;
</script>

<style lang="scss">
.slider {
  padding: 20px 0 0;
  min-height: 230px;
}
.sliderSwiper {
  width: 100%;
  height: 230px;
}

.slideTitle {
  font-family: "Roboto";
  @include font(22px, 28px, 600);
  color: $primaryColor;
  text-align: center;
  text-transform: uppercase;
}

.swiperSlide {
  width: 92%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-slide-active {
  transform: scale(1);
}

.swiper-slide-next,
.swiper-slide-prev {
  transform: scale(0.6);
}
</style>
