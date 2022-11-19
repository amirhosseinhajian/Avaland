<template>
  <div class="intro">
    <div class="intro__introducing introducing">
      <h1 class="introducing__singer">همایون شجریان</h1>
      <p class="introducing__team">ارکستر سیاوش به رهبری آرش گوران</p>
      <p class="introducing__timing-location">
        مرکز همایش های کشور - تیرماه ۱۴۰۱ - خرید بلیط
      </p>
    </div>
    <img
      src="@/assets/images/homayoon-sad.png"
      alt="homayoon shajarian"
      class="intro__top-layer-image"
    />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.intro {
  height: 22.125rem;
  width: 100%;
  background-image: url("@/assets/images/homayoon.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  border-radius: 1.5rem;

  .introducing__singer {
    font-family: IranNastaliq;
    @include font(7.5rem, 400, 1.5rem);
  }

  .introducing__team {
    @include font(2rem, 400, 1.5rem, #e6e6e6);
    margin: 6.375rem 0 1rem;
  }

  .introducing__timing-location {
    @include font(1.125rem, 400, 1.5rem, #e6e6e6);
  }

  &__top-layer-image {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.5rem;
    height: 120%;
  }
}
</style>
