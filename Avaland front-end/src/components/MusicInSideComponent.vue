<template>
  <div class="music">
    <img
      class="music__image"
      :src="require(`@/assets/images/${music.img}`)"
      :alt="music.name"
    />
    <div class="music__info info">
      <p class="info__name">{{ music.name }}</p>
      <div class="info__meta-data meta-data">
        <div class="meta-data__like">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.95992 0.0666666C8.75325 0.0666666 7.67325 0.653333 6.99992 1.55333C6.32659 0.653333 5.24659 0.0666666 4.03992 0.0666666C1.99325 0.0666666 0.333252 1.73333 0.333252 3.79333C0.333252 4.58667 0.459919 5.32 0.679919 6C1.73325 9.33333 4.97992 11.3267 6.58659 11.8733C6.81325 11.9533 7.18659 11.9533 7.41325 11.8733C9.01992 11.3267 12.2666 9.33333 13.3199 6C13.5399 5.32 13.6666 4.58667 13.6666 3.79333C13.6666 1.73333 12.0066 0.0666666 9.95992 0.0666666Z"
              fill="white"
            />
          </svg>
          <span>{{ music.like }}</span>
        </div>
        <div class="meta-data__view">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66675 8V5.62667C2.66675 2.68 4.75341 1.47333 7.30675 2.94667L9.36675 4.13333L11.4267 5.32C13.9801 6.79333 13.9801 9.20667 11.4267 10.68L9.36675 11.8667L7.30675 13.0533C4.75341 14.5267 2.66675 13.32 2.66675 10.3733V8Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ music.view }}هزار</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  music: {
    img: String,
    name: String,
    like: Number,
    view: Number,
  },
});
</script>
<style lang="scss" scoped>
.music {
  display: flex;
  gap: 1.125rem;
  align-items: center;

  &__image {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    &__name {
      @include font(1rem, 700, 1.5rem);
    }

    .meta-data {
      display: flex;
      gap: 1rem;

      &__like,
      &__view {
        display: flex;
        gap: 0.25rem;
        align-items: center;

        span {
          @include font(0.875rem, 500, 1.5rem, #999999);
        }
      }
    }
  }
}
</style>
