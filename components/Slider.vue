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
            <div class="container contentSlideContainer">
              <div class="contentSlideInfo">
                <div class="breadcramc">1/2/3</div>
                <h3 class="slideTitle title">{{ slide.title }}</h3>
                <div class="dateInfo">
                  <div class="containerDateInfo">
                    <p class="slideEventYear">{{ slide.year }}</p>
                    <div class="day">
                      <p class="slideEventDay">{{ slide.day }}</p>
                      <p class="slideEventTime">{{ slide.time }}</p>
                    </div>
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
    rgba(32, 31, 31, 0.7322189373796393) 53%
  );

  @include tablet {
    align-content: center;
  }
}

.controlSlideInfo {
  width: 100%;
}

.contentSlideContainer {
  margin-top: auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @include tablet {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    margin-bottom: 30px;
    padding: 0 120px;
  }
}

.breadcramc {
  @include font(12px, 18px, 400);
  margin-bottom: 5px;

  @include tablet {
    margin-bottom: 10px;
  }

  @include desktop {
    margin-bottom: 15px;
  }
}

.slideTitle {
  margin-bottom: 15px;
  @include font(37px, 80%, 700, $titleText);
  color: $primaryColor;

  @include tablet {
    margin-bottom: 20px;
    @include font(42px, 80%, 700, $titleText);
  }

  @include desktop {
    margin-bottom: 25px;
    @include font(46px, 80%, 700, $titleText);
  }
}

.dateInfo {
  min-width: 120px;
  max-width: fit-content;
  margin-bottom: 20px;
  outline: 1px solid $secondaryColor;

  @include tablet {
    max-width: 150px;
  }
}

.containerDateInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
}

.slideEventYear {
  @include font(28px, 32px, 800, $titleText);
}

.slideEventDay {
  @include font(14px, 16px, 400, "Oswald");
}

.slideEventTime {
  @include font(12px, 14px, 500, "Oswald");
}

@include tablet {
  .slideEventYear {
    @include font(38px, 92%, 700, $titleText);
  }

  .slideEventDay {
    @include font(18px, 22px, 400, "Oswald");
  }

  .slideEventTime {
    @include font(14px, 18px, 500, "Oswald");
  }
}

.buyTicketButton {
  @include font(14px, 18px, 600, "Oswald");
  display: block;
  width: 100%;
  padding: 17px 0;
  text-align: center;
  text-transform: uppercase;
  background: $secondaryColor;

  @include tablet {
    @include font(14px, 19px, 600);
    margin-left: auto;
    padding: 20px 0;
    min-width: 100px;
    max-width: 120px;
  }

  @include desktop {
    padding: 25px 0;
  }
}

.controlSlideInfo {
  width: 100%;
}
</style>
