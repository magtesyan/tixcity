<template>
  <section class="slider">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperEffectCoverflow]"
        :slides-per-view="1"
        :grab-cursor="true"
        :pagination="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        class="sliderSwiper"
      >
        <SwiperSlide
          v-for="slide in slides"
          :key="slide.name"
          class="swiperSlide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="contentSlideWrapper">
            <div class="contentSlide">
              <div class="breadcramc">1/2/3</div>
              <h3 class="slideTitle title">{{ slide.title }}</h3>
              <div class="dateInfo">
                <p class="slideEventYear">{{ slide.year }}</p>
                <div class="day">
                  <p class="slideEventDay">{{ slide.day }}</p>
                  <p class="slideEventTime">{{ slide.time }}</p>
                </div>
              </div>
              <NuxtLink class="buyTicketButton">купить билеты</NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import slidesData from "../assets/data/slides.json";

const slides = slidesData.slides;
</script>

<style lang="scss" scoped>
.slider {
  padding: 0;
  height: 100%;
}
.sliderSwiper {
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.slideTitle {
  margin-bottom: 20px;
  @include font(22px, 28px, 700, "Old Standart TT");
  color: $primaryColor;

  text-transform: uppercase;
}

.swiperSlide {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  background-position: center;

  background-repeat: no-repeat;
}

.contentSlideWrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(31, 31, 31, 1) 27%,
    rgba(32, 31, 31, 0.594964035418855) 45%,
    rgba(32, 31, 31, 0.7322189373796393) 73%
  );
}

.contentSlide {
  padding: 12px 16px;
  margin-top: auto;
  margin-bottom: 60px;

  @include tablet {
    padding: 16px 39px;
  }
}

.buyTicketButton {
  @include font(16px, 19px, 500, "Oswald");
  display: block;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  background: #ff0000;
}

.dateInfo {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 117px;
  margin-bottom: 20px;
  padding: 7px 10px;
  outline: 1px solid #ff0000;
  gap: 14px;

  p {
    display: block;
    margin: 0;
  }
}

.slideEventYear {
  @include font(20px, 23px, 700, "Old Standart TT");
}

.slideEventDay {
  @include font(14px, 16px, 400, "Oswald");
}

.slideEventTime {
  @include font(12px, 14px, 500, "Oswald");
}

@include tablet {
  .slideEventYear {
    @include font(22px, 26px, 700, "Old Standart TT");
  }
}
</style>
