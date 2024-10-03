<template>
  <section class="slider">
    <div class="slider__container">
      <div class="slider__background">
        <img
          class="slider-item"
          src="/public/img/cover-cites/lenkom.jpg"
          width="272"
          height="216"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.slider__container {
  width: 92.5%;
  margin: 0 auto;
  margin-bottom: 12px;
}

.slider__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.slider-item {
  display: block;
  padding: 12px;
}
</style>
