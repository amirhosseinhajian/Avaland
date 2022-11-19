<template>
  <div class="current-track">
    <div class="centeralize">
      <div class="container">
        <div class="player-container">
          <div class="current-track__intro intro">
            <figure class="intro__image">
              <img
                :src="require(`@/assets/images/${currentTrack?.img}`)"
                alt="current track"
              />
            </figure>

            <div class="intro__info info">
              <p class="info__title">{{ currentTrack?.name }}</p>
              <p class="info__singer">{{ currentTrack?.singer }}</p>
            </div>
          </div>

          <div class="music-player">
            <div class="volume-control">
              <input
                id="volume"
                @click="volumeChange"
                type="range"
                min="0"
                max="100"
                value="80"
                class="slider"
              />
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16.75C17.84 16.75 17.69 16.7 17.55 16.6C17.22 16.35 17.15 15.88 17.4 15.55C18.97 13.46 18.97 10.54 17.4 8.45C17.15 8.12 17.22 7.65 17.55 7.4C17.88 7.15 18.35 7.22 18.6 7.55C20.56 10.17 20.56 13.83 18.6 16.45C18.45 16.65 18.23 16.75 18 16.75Z"
                    fill="white"
                  />
                  <path
                    d="M19.83 19.25C19.67 19.25 19.52 19.2 19.38 19.1C19.05 18.85 18.98 18.38 19.23 18.05C21.9 14.49 21.9 9.51 19.23 5.95C18.98 5.62 19.05 5.15 19.38 4.9C19.71 4.65 20.18 4.72 20.43 5.05C23.5 9.14 23.5 14.86 20.43 18.95C20.29 19.15 20.06 19.25 19.83 19.25Z"
                    fill="white"
                  />
                  <path
                    d="M14.02 3.78C12.9 3.16 11.47 3.32 10.01 4.23L7.09 6.06C6.89 6.18 6.66 6.25 6.43 6.25H5.5H5C2.58 6.25 1.25 7.58 1.25 10V14C1.25 16.42 2.58 17.75 5 17.75H5.5H6.43C6.66 17.75 6.89 17.82 7.09 17.94L10.01 19.77C10.89 20.32 11.75 20.59 12.55 20.59C13.07 20.59 13.57 20.47 14.02 20.22C15.13 19.6 15.75 18.31 15.75 16.59V7.41C15.75 5.69 15.13 4.4 14.02 3.78Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>

            <div class="music-player__progress progress">
              <div class="progress__duration">{{ duration }}</div>

              <div class="progress__bar">
                <input
                  type="range"
                  class="slider"
                  min="0"
                  max="100"
                  :value="bar"
                  @click="clickProgress"
                  ref="progress"
                />
              </div>

              <div class="progress__current-time">{{ currentTime }}</div>
            </div>

            <div class="music-player__control">
              <i class="next-track-btn" @click="playNextMusic">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.76001 7.22V16.79C3.76001 18.75 5.89001 19.98 7.59001 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.8L11.74 7.4L7.59001 5.01C5.89001 4.03 3.76001 5.25 3.76001 7.22Z"
                    fill="white"
                  />
                  <path
                    d="M20.24 18.93C19.83 18.93 19.49 18.59 19.49 18.18V5.82C19.49 5.41 19.83 5.07 20.24 5.07C20.65 5.07 20.99 5.41 20.99 5.82V18.18C20.99 18.59 20.66 18.93 20.24 18.93Z"
                    fill="white"
                  />
                </svg>
              </i>
              <button
                class="play-pause"
                :class="{ pause: !isPlay, play: isPlay }"
              >
                <i @click="play" class="play-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L14.05 6.2L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
                <i @click="pause" class="pause-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.65 19.11V4.89C9.65 3.54 9.30353 3 8.42824 3H6.22176C5.34647 3 5 3.54 5 4.89V19.11C5 20.46 5.34647 21 6.22176 21H8.42824C9.30353 21 9.65 20.46 9.65 19.11Z"
                      fill="white"
                    />
                    <path
                      d="M19.0001 19.11V4.89C19.0001 3.54 18.6536 3 17.7783 3H15.5719C14.7026 3 14.3501 3.54 14.3501 4.89V19.11C14.3501 20.46 14.6966 21 15.5719 21H17.7783C18.6536 21 19.0001 20.46 19.0001 19.11Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </button>
              <i class="prev-track-btn" @click="playPrevMusic">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.24 7.22V16.79C20.24 18.75 18.11 19.98 16.41 19L12.26 16.61L8.10999 14.21C6.40999 13.23 6.40999 10.78 8.10999 9.8L12.26 7.4L16.41 5.01C18.11 4.03 20.24 5.25 20.24 7.22Z"
                    fill="white"
                  />
                  <path
                    d="M3.76001 18.93C3.35001 18.93 3.01001 18.59 3.01001 18.18V5.82C3.01001 5.41 3.35001 5.07 3.76001 5.07C4.17001 5.07 4.51001 5.41 4.51001 5.82V18.18C4.51001 18.59 4.17001 18.93 3.76001 18.93Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>
          </div>

          <div class="music-player__option">
            <input
              type="checkbox"
              id="current-music"
              class="like"
              hidden
              :checked="currentTrack.isLike"
            />
            <label for="current-music">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.44 3.1C14.63 3.1 13.01 3.98 12 5.33C10.99 3.98 9.37 3.1 7.56 3.1C4.49 3.1 2 5.6 2 8.69C2 9.88 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.1 16.44 3.1Z"
                  fill="white"
                />
              </svg>
            </label>
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  playMusicOnShow: Boolean,
  tracks: Array,
  playingMusicIndex: {
    type: Number,
    default: 0,
  },
  pauseMusicPlayer: Boolean,
});

const emit = defineEmits([
  "changePlayingMusic",
  "playlistEnded",
  "playListRePlayed",
  "musicPlayerIsStarted",
  "musicPlayerIsPaused",
]);

let state = computed(() => props.playMusicOnShow);
let playingMusicIndex = ref(props.playingMusicIndex);
let pauseMusicPlayer = computed(() => props.pauseMusicPlayer);
// let playingMusicIndex = ref(0);
let isPlay = ref(false);
let progress;
let bar = ref(0);
let duration = ref("00:00");
let currentTime = ref("00:00");
let tracks = computed(() => props.tracks);
let currentTrack = ref({ img: "music1.jpg" });
let audio = new Audio();

const generateTime = () => {
  let durmin = Math.floor((audio.duration ?? 0) / 60);
  let dursec = Math.floor((audio.duration ?? 0) - durmin * 60);
  let curmin = Math.floor((audio.currentTime ?? 0) / 60);
  let cursec = Math.floor((audio.currentTime ?? 0) - curmin * 60);
  if (durmin < 10) {
    durmin = "0" + durmin;
  }
  if (dursec < 10) {
    dursec = "0" + dursec;
  }
  if (curmin < 10) {
    curmin = "0" + curmin;
  }
  if (cursec < 10) {
    cursec = "0" + cursec;
  }
  duration.value =
    (isNaN(durmin) ? "00" : durmin) + ":" + (isNaN(dursec) ? "00" : dursec);
  currentTime.value = curmin + ":" + cursec;
};

const resetMusicPlayer = () => {
  if (playingMusicIndex.value < tracks.value.length - 1) {
    playingMusicIndex.value++;
    setNewMusic();
    setTimeout(play, 100);
  } else {
    bar.value = 0;
    currentTime.value = "00:00";
    audio.currentTime = 0;
    isPlay.value = false;
    emit("playlistEnded");
  }
};

const musicProgressBar = () => {
  if (!isNaN(audio.duration)) {
    bar.value = bar.value + 100 / audio.duration;
  }
  if (audio.currentTime === audio.duration) {
    clearInterval(progress);
    resetMusicPlayer();
  }
};

const musicProgressTime = () => {
  let curmin = Math.floor(audio.currentTime / 60);
  let cursec = Math.floor(audio.currentTime - curmin * 60);
  if (curmin < 10) {
    curmin = "0" + curmin;
  }
  if (cursec < 10) {
    cursec = "0" + cursec;
  }
  currentTime.value = curmin + ":" + cursec;
};

const musicProgress = () => {
  musicProgressTime();
  musicProgressBar();
};

const musicProgressInterval = () => {
  progress = setInterval(musicProgress, 1000);
};

const play = () => {
  audio.volume = document.getElementById("volume").value / 100;
  audio.play();
  generateTime();
  isPlay.value = true;
  musicProgressInterval();
  if (tracks.value.length > 1) {
    emit("playListRePlayed");
  }
  emit("musicPlayerIsStarted");
};

const pause = () => {
  isPlay.value = false;
  audio.pause();
  clearInterval(progress);
  emit("musicPlayerIsPaused");
};

const clickProgress = (event) => {
  audio.pause();
  clearInterval(progress);
  bar.value = Number(event.target.value);
  audio.currentTime = audio.duration * (Number(event.target.value) / 100);
  musicProgressTime();
  if (isPlay.value === true) {
    musicProgressInterval();
    audio.play();
  }
};

const volumeChange = (event) => {
  audio.volume = event.target.value / 100;
};

const setNewMusic = () => {
  clearInterval(progress);
  bar.value = 0;
  currentTime.value = "00:00";
  duration.value = "00:00";
  currentTrack.value = tracks.value[playingMusicIndex.value];
  audio.src = require(`@/assets/musics/${currentTrack.value.source}`);
};

const playNextMusic = () => {
  playingMusicIndex.value =
    playingMusicIndex.value < tracks.value.length - 1
      ? playingMusicIndex.value + 1
      : 0;
  setNewMusic();
  setTimeout(play, 100);
};

const playPrevMusic = () => {
  playingMusicIndex.value =
    playingMusicIndex.value > 0
      ? playingMusicIndex.value - 1
      : tracks.value.length - 1;
  setNewMusic();
  setTimeout(play, 100);
};

watch(state, () => {
  if (!state.value) {
    pause();
  }
});

watch(tracks, () => {
  playingMusicIndex.value = 0;
  setNewMusic();
  setTimeout(play, 100);
});

watch(playingMusicIndex, () => {
  emit("changePlayingMusic", playingMusicIndex.value);
});

watch(pauseMusicPlayer, () => {
  if (pauseMusicPlayer.value) {
    pause();
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/music-player";
</style>
