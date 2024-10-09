<template>
  <section class="section">
    <h2 class="_visualyHidden">Категории</h2>
    <div class="content">
      <div class="overlayBlur">
        <ul class="categoriesList list">
          <li class="categoriesItem">
            <NuxtLink class="categoriesLink link" to="/teathre/teathre">
              <span class="categoriesLinkTitle">Театры</span>
            </NuxtLink>
          </li>
          <li class="categoriesItem">
            <NuxtLink class="categoriesLink link" to="/child/children">
              <span class="categoriesLinkTitle">Дети</span>
            </NuxtLink>
          </li>
          <li class="categoriesItem">
            <NuxtLink class="categoriesLink link" to="/sport/sport">
              <span class="categoriesLinkTitle">Спорт</span>
            </NuxtLink>
          </li>
          <li class="categoriesItem">
            <NuxtLink class="categoriesLink link" to="/stage/stage">
              <span class="categoriesLinkTitle">Эстрада</span>
            </NuxtLink>
          </li>
          <li class="categoriesItem">
            <NuxtLink class="categoriesLink link" to="/opera/opera">
              <span class="categoriesLinkTitle">Опера и балет</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.categoriesList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
  justify-content: center;
}

.categoriesItem:first-child,
.categoriesItem:last-child {
  width: 92%;
}

.categoriesItem {
  width: calc(92% / 3 - 5px);
  text-align: center;
  background: $background;
  border-radius: 6px;
}

.categoriesLinkTitle {
  display: block;
  padding: 20px 0;
}

.categoriesLink {
  width: 100%;
}
</style>
