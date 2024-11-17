<template>
  <section class="slider">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <Swiper
        :modules="[SwiperEffectCreative, SwiperEffectCoverflow]"
        :slides-per-view="1"
        :grab-cursor="true"
        :pagination="true"
        class="sliderSwiper"
      >
        <SwiperSlide
          v-for="slide in slides"
          :key="slide.name"
          class="swiperSlide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="contentSlideWrapper">
            <div class="contentSlideContainer">
              <div class="contentSlideInfo">
                <div class="breadcramc">1/2/3</div>
                <h3 class="slideTitle title">{{ slide.title }}</h3>
                <div class="dateInfo">
                  <p class="slideEventYear">{{ slide.year }}</p>
                  <div class="day">
                    <p class="slideEventDay">{{ slide.day }}</p>
                    <p class="slideEventTime">{{ slide.time }}</p>
                  </div>
                </div>
              </div>
              <div class="controlSlideInfo">
                <NuxtLink class="buyTicketButton">подробнее</NuxtLink>
              </div>
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
  @include font(26px, 30px, 700, $titleText);
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
  display: grid;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(31, 31, 31, 1) 27%,
    rgba(32, 31, 31, 0.594964035418855) 45%,
    rgba(32, 31, 31, 0.7322189373796393) 73%
  );

  @include tablet {
    align-content: flex-start;
  }
}

.contentSlideContainer {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: auto;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;

  @include responsivePadding(padding-left);
  @include responsivePadding(padding-right);

  @include tablet {
    display: grid;
    grid-template-columns: 1fr 300px;
  }
}

.buyTicketButton {
  @include font(14px, 18px, 600, "Oswald");
  display: block;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  background: $secondaryColor;
}

.dateInfo {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 117px;
  margin-bottom: 20px;
  padding: 7px 10px;
  outline: 1px solid $secondaryColor;
  gap: 14px;

  p {
    display: block;
    margin: 0;
  }
}

.slideEventYear {
  @include font(24px, 30px, 700, $titleText);
}

.slideEventDay {
  @include font(14px, 16px, 400, "Oswald");
}

.slideEventTime {
  @include font(12px, 14px, 500, "Oswald");
}

@include tablet {
  .slideEventYear {
    @include font(22px, 26px, 700, $titleText);
  }
}
</style>
