<template>
  <router-view />
  <MusicPlayerComponent
    v-show="musicPlayer"
    :playMusicOnShow="musicPlayer"
    :tracks="tracks"
    :pauseMusicPlayer="pauseCommand"
    @changePlayingMusic="changePlayingMusic"
    @playlistEnded="playlistEnded"
    @playListRePlayed="playListRePlayed"
    @musicPlayerIsStarted="musicPlayerIsStarted"
    @musicPlayerIsPaused="musicPlayerIsPaused"
  />
</template>

<script setup>
import MusicPlayerComponent from "./components/MusicPlayerComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
let musicPlayer = computed(() => store.state.musics.isMusicPlaying);
let tracks = computed(() => store.state.musics.musicPlayer.tracks);
let pauseCommand = computed(
  () => store.state.musics.musicPlayer.pauseMusicPlayer
);

const changePlayingMusic = (playingMusicIndex) => {
  store.dispatch("musics/setMusicPlayerCurrentMusicIndex", playingMusicIndex);
};

const playlistEnded = () => {
  store.dispatch("musics/setEndPlaylistState");
};

const playListRePlayed = () => {
  store.dispatch("musics/playlistReplayed");
};

const musicPlayerIsStarted = () => {
  store.dispatch("musics/setingMusicplayerToPlay");
};

const musicPlayerIsPaused = () => {
  store.dispatch("musics/setMusicPlayerToPause");
};
</script>

<style lang="scss"></style>
