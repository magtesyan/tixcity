<template>
  <section class="category">
    <div class="category__container">
      <div class="category__background">
        <ul class="category__list">
          <li class="category__item item-1">
            <NuxtLink class="category__link" to="/teathre/teathre">
              <span class="category__link-title">Театр</span>
            </NuxtLink>
          </li>
          <li class="category__item item-2">
            <NuxtLink class="category__link" to="/child/children">
              <span class="category__link-title">Дети</span>
            </NuxtLink>
          </li>
          <li class="category__item item-3">
            <NuxtLink class="category__link" to="/sport/sport">
              <span class="category__link-title">Спорт</span>
            </NuxtLink>
          </li>
          <li class="category__item item-4">
            <NuxtLink class="category__link" to="/stage/stage">
              <span class="category__link-title">Эстрада</span>
            </NuxtLink>
          </li>
          <li class="category__item item-5">
            <NuxtLink class="category__link" to="/opera/opera">
              <span class="category__link-title">Опера</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.category__container {
  width: 92.5%;
  margin: 0 auto;
}

.category__background {
  background: rgb(93, 93, 93, 30%);
  backdrop-filter: blur(5px);
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.category__list {
  padding: 12px;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.item-1 {
  grid-area: 1 / 1 / 2 / 4;
  background-color: rgba(19, 19, 19, 0.502);
  min-height: 36px;
}
.item-2 {
  min-height: 55px;
  grid-area: 2/1/3/2;
  background-color: rgba(19, 19, 19, 0.502);
}
.item-3 {
  min-height: 55px;
  grid-area: 2/2/3/3;
  background-color: rgba(19, 19, 19, 0.502);
}
.item-4 {
  min-height: 55px;
  grid-area: 2/3/3/4;
  background-color: rgba(19, 19, 19, 0.502);
}
.item-5 {
  grid-area: 3 / 1 / 4 / 4;
  background-color: rgba(19, 19, 19, 0.502);
}

.category__link {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.category__link-title {
  display: block;
}
</style>
