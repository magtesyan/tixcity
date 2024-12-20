<template>
  <section class="slider">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <Swiper
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
                <div class="dateInfoWrapper">
                  <div class="containerDateInfo">
                    <p class="slideEventYear">{{ slide.year }}</p>
                    <div class="day">
                      <p class="slideEventDay">{{ slide.day }}</p>
                      <p class="slideEventTime">{{ slide.time }}</p>
                    </div>
                  </div>
                  <Icon name="streamline:share-link" class="iconSlider" />
                </div>
              </div>
              <div class="controlSlideInfo">
                <NuxtLink to="#" class="buyTicketButton">подробнее</NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import slidesData from '../assets/data/slides.json'

const slides = slidesData.slides
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
  max-width: 100%;

  height: auto;
  display: block;
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;
}

.contentSlideWrapper {
  display: grid;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgb(18 18 18 / 31%) 10%,
    rgba(32, 31, 31, 0.5949640354) 45%,
    rgb(23 23 23 / 73%) 74%
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
    padding: 0 18%;
  }
}

.breadcramc {
  @include font(12px, 18px, 400);
  margin-bottom: 5px;

  @include tablet {
    margin-bottom: 10px;
  }

  @include desktop {
    margin-bottom: 12px;
  }
}

.slideTitle {
  margin-bottom: 15px;
  @include font(42px, 80%, 700, $titleText);
  color: $primaryColor;

  @include tablet {
    margin-bottom: 20px;
    @include font(54px, 80%, 700, $titleText);
  }

  @include desktop {
    margin-bottom: 25px;
    @include font(64px, 80%, 700, $titleText);
  }
}

.dateInfoWrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.containerDateInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  outline: 1px solid $secondaryColor;
  margin-right: 15px;
  width: 120px;

  @include tablet {
    width: 150px;
  }

  @include desktop {
    width: 160px;
  }
}

.slideEventYear {
  @include font(28px, 29px, 800, $titleText);
}

.slideEventDay {
  @include font(14px, 16px, 400, 'Oswald');
}

.slideEventTime {
  @include font(12px, 14px, 500, 'Oswald');
}

@include tablet {
  .slideEventYear {
    @include font(38px, 92%, 700, $titleText);
  }

  .slideEventDay {
    @include font(18px, 22px, 400, 'Oswald');
  }

  .slideEventTime {
    @include font(14px, 18px, 500, 'Oswald');
  }
}

.iconSlider {
  cursor: pointer;

  &:hover {
    color: $secondaryColor;
  }
}

.buyTicketButton {
  @include font(14px, 18px, 600, 'Oswald');
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
}

.controlSlideInfo {
  width: 100%;
}
</style>
