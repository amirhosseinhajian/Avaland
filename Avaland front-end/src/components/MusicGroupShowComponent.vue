<template>
  <div class="group">
    <div class="group__header header">
      <h1 class="header__title">
        {{ props.title }}
      </h1>
      <a href="#" class="header__view-all">مشاهده همه</a>
    </div>
    <div class="group__body">
      <MusicComponent
        v-for="(music, index) in props.musics"
        :key="index"
        :music="music"
        class="music-componet"
      ></MusicComponent>
    </div>
  </div>
</template>
<script setup>
import MusicComponent from "@/components/MusicComponent.vue";
const props = defineProps({
  title: String,
  musics: Array,
});
</script>
<style lang="scss">
.group {
  &__header {
    display: flex;
    justify-content: space-between;

    .header__title {
      @include font(1.25rem, 700, 1.5rem);
    }

    .header__view-all {
      @include font(1rem, 800, 1.5rem, $active-color);
    }
  }

  &__body {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    background-color: #46464666;
    padding: 1.5rem;
    border-radius: 1.5rem;

    .music-componet {
      max-width: 18%;
    }
  }
}
</style>
