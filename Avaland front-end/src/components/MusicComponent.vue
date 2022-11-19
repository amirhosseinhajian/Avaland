<template>
  <div class="music">
    <RouterLink :to="{ name: 'music-details', params: { musicId: music.id } }">
      <img
        class="music__image"
        :src="require(`@/assets/images/${music.img}`)"
        alt="music image"
    /></RouterLink>
    <div class="music__footer">
      <div>
        <RouterLink
          :to="{ name: 'music-details', params: { musicId: music.id } }"
        >
          <h3>{{ music.name }}</h3></RouterLink
        >
        <MusicDropdownComponent></MusicDropdownComponent>
      </div>
      <RouterLink
        :to="{ name: 'music-details', params: { musicId: music.id } }"
      >
        <h2>{{ music.singer }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import MusicDropdownComponent from "./MusicDropdownComponent.vue";

defineProps({
  music: {
    id: String,
    name: String,
    img: String,
    singer: String,
  },
});
</script>

<style lang="scss" scoped>
.music {
  width: 100%;

  &__image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1rem;
  }

  &__footer {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.4rem;

      i {
        cursor: pointer;
      }

      h3 {
        @include font(1rem, 700, 1.5rem);
      }
    }
    h2 {
      @include font(0.875rem, 00, 1.5rem, #999999);
    }
  }
}
</style>
