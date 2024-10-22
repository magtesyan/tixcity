<template>
  <section class="section">
    <h2 class="visualyHidden">Слайдер</h2>
    <div class="content">
      <div class="overlayBlur">
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
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.sliderList {
  padding: 0;
}

.sliderItemImg {
  width: 100%;
  min-height: 180px;
  height: auto;
}
</style>
