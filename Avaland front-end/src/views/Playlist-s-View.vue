<template>
  <LayoutView>
    <template v-slot:content>
      <section id="list-playlist">
        <h1>لیست های پخش</h1>
        <div class="list-palylist">
          <PlaylistComponent
            v-for="playlist in playlists"
            :key="playlist.name"
            :playlist="playlist"
          ></PlaylistComponent>
        </div>
      </section>
    </template>
  </LayoutView>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import PlaylistComponent from "@/components/PlaylistComponent.vue";
import LayoutView from "@/layout/LayoutView.vue";

const store = useStore();

const playlists = computed(() => store.state.user.playlists);
</script>

<style lang="scss" scoped>
#list-playlist {
  padding: 3.5rem 0 5rem 3.5rem;
}
h1 {
  @include font(1.75rem, 700, 1.5rem);
  margin-bottom: 2rem;
}
.list-palylist {
  display: flex;
  gap: 3.854375rem;
  flex-wrap: wrap;
  background-color: #46464666;
  padding: 2rem 2rem 3rem;
  border-radius: 1.5rem;
  justify-content: space-around;
}
</style>
