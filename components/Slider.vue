<template>
  <section class="slider">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <ul class="sliderList list">
        <li class="sliderItem">
          <img
            class="sliderItemImg"
            src="/public/img/cover-cites/lenkom.jpg"
            width="272"
            height="216"
            alt=""
          />
        </li>
        <li class="sliderItem">
          <img
            class="sliderItemImg"
            src="/public/img/cover-cites/lenkom.jpg"
            width="272"
            height="216"
            alt=""
          />
        </li>
        <li class="sliderItem">
          <img
            class="sliderItemImg"
            src="/public/img/cover-cites/lenkom.jpg"
            width="272"
            height="216"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.slider {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  padding: 0;
}
.sliderList {
  padding: 0;
  display: flex;
  width: 1000px;
  position: relative;
  left: -210px;
  gap: 15px;
}

.sliderItem {
  width: 250px;
}

.sliderItemImg {
  width: 100%;
  min-height: 200px;
  height: auto;
}
</style>
