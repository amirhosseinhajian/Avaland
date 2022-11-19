<template>
  <ModalComponent v-show="playlistModal" @closeModal="addToPlaylist">
    <template v-slot:header>
      <div class="tab">
        <div class="tab__select">
          <input
            v-model="selectedtab"
            type="radio"
            name="tab"
            id="create-playlist"
            value="create-playlist"
            checked
          />
          <label for="create-playlist"> ایجاد لیست پخش </label>
          <input
            v-model="selectedtab"
            type="radio"
            name="tab"
            id="select-playlist"
            value="select-playlist"
          />
          <label for="select-playlist"> انتخاب لیست پخش </label>
        </div>
        <div calss="tab__close-icon" @click="addToPlaylist">
          <i>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.16992 14.83L14.8299 9.16998"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 14.83L9.16992 9.16998"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <hr />
    </template>
    <template v-slot:body>
      <div v-if="selectedtab === 'create-playlist'">
        <div class="playlist-input">
          <form @submit.prevent="addNewPlaylist">
            <label for="playlist-name">نام لیست پخش</label><br />
            <input
              type="text"
              name="playlist-name"
              v-model="playlistName"
              required
            />
            <button>ذخیره</button>
          </form>
        </div>
        <div class="new-musics-container">
          <div
            class="playlist-music-input"
            v-for="(music, index) in newlyAddToPlaylistMusics"
            :key="index"
          >
            <div class="music">
              <figure class="music__image">
                <img :src="require(`@/assets/images/${music.img}`)" alt="" />
              </figure>
              <div class="music__info info">
                <p class="info__name">{{ music.name }}</p>
                <p class="info__singer">{{ music.singer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="select-playlists">
          <label for="filter">نام لیست پخش</label><br />
          <input
            type="text"
            v-model="existPlaylist"
            id="filter"
            name="filter-playlists"
          />
        </div>
        <div class="playlists-container">
          <h1>لیست های پخش</h1>
          <div v-for="playlist in playlists" :key="playlist.name">
            <div class="playlist">
              <div class="playlist__intro intro">
                <figure class="playlist__image">
                  <img
                    :src="require(`@/assets/images/${playlist.musics[0].img}`)"
                    alt=""
                  />
                </figure>
                <div class="playlist__info info">
                  <p class="info__name">{{ playlist.name }}</p>
                  <p class="info__song-count">
                    {{ playlist.musics.length }} آهنگ
                  </p>
                </div>
              </div>
              <button
                class="playlist__add-btn"
                @click="addMusicToExistPlaylist(playlist.name)"
              >
                اضافه کردن به لیست پخش
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <hr v-if="selectedtab === 'create-playlist'" />
      <div v-if="selectedtab === 'create-playlist'" class="similar-musics">
        <h1 class="similar-musics__header">آهنگ های مشابه</h1>
        <div class="similar-musics__body">
          <div
            v-for="(music, index) in similarMusics"
            :key="index"
            class="similar-musics__container"
          >
            <div>
              <figure class="similar-musics-info__image">
                <img :src="require(`@/assets/images/${music.img}`)" alt="" />
              </figure>
              <div class="similar-musics-info info">
                <p class="info__name">{{ music.name }}</p>
                <p class="info__singer">{{ music.singer }}</p>
              </div>
            </div>
            <button
              class="similar-musics__add-btn"
              @click="addSimilarMusic(music.id)"
            >
              اضافه کردن به لیست پخش
            </button>
          </div>
        </div>
      </div>
    </template>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedtab = ref("create-playlist");
const playlistName = ref(null);
const newlyAddToPlaylistMusics = ref([]);
const existPlaylist = ref(null);
const playlists = ref(store.state.user.playlists);
const musics = computed(() => store.getters["musics/relatedMusics"]);
const similarMusics = [musics.value[0], musics.value[1], musics.value[2]];

const closeModal = () => {
  console.log("inja");
};

const addNewPlaylist = () => {
  const playlists = store.state.user.playlists;
  if (playlists.find((playlist) => playlist.name === playlistName.value)) {
    alert("پلی لیستی با این نام از قبل وجود دارد.");
  } else {
    store.dispatch("user/addNewPlaylist", {
      playlist: playlistName.value,
      musics: [...newlyAddToPlaylistMusics.value],
    });
    alert("پلی لیست جدید با موفقیت ایجاد شد.");
    closeModal();
  }
};

watch(existPlaylist, () => {
  playlists.value = store.state.user.playlists.filter((playlist) => {
    return playlist.name.includes(existPlaylist.value);
  });
});

const addMusicToExistPlaylist = (playlistName) => {
  store.dispatch("user/addMusicToPlaylist", playlistName);
  alert("موزیک با موفقیت به پلی لیست اضافه شد.");
};

const addSimilarMusic = (musicId) => {
  if (
    !newlyAddToPlaylistMusics.value.includes(
      similarMusics.find((music) => music.id === musicId)
    )
  ) {
    newlyAddToPlaylistMusics.value.push(
      similarMusics.find((music) => music.id === musicId)
    );
  }
};
</script>
<style lang="scss" scoped>
.tab {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }

  &__select {
    width: 17.8125rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      #fc8f22;
    border-radius: 0.625rem;
  }
  label {
    display: inline-block;
    width: 8.90625rem;
    height: 2.75rem;
    border-radius: 0.625rem;
    background-color: transparent;
    text-align: center;
    line-height: 2.75rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    user-select: none;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #fc8f22;
  }
}

hr {
  width: 34rem;
  height: 1px;
  background-color: #ffffff26;
}

.playlist-input {
  margin-top: 1.5rem;

  form {
    margin-top: 0.5rem;
  }

  input {
    width: 27.125rem;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: #464646;
    padding: 0.75rem 0.5rem 0.75rem 0;
    height: 3rem;
    color: white;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button {
    width: 6.875rem;
    border-bottom-left-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
    padding: 0.75rem 2.375rem;
    @include font(0.875rem, 600, 1.5rem);
    height: 3rem;
    background-color: #fc8f22;
  }
}

.new-musics-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
}

.playlist-music-input {
  width: 33%;

  .music {
    display: flex;
    align-items: center;
    margin-top: 1.75rem;

    &__image {
      img {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.625rem;
      }
    }

    .info {
      margin-right: 1rem;
      &__name {
        @include font(0.875rem, 600, 1.5rem, $active-color);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }
}

.select-playlists {
  margin-top: 1.5rem;
  input {
    margin-top: 0.5rem;
    width: 34rem;
    height: 3rem;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.playlists-container {
  h1 {
    margin-top: 1.5rem;
    @include font(1rem, 600, 1.5rem);
  }
  .playlist {
    width: 34rem;
    height: 5.5rem;
    display: flex;
    margin-top: 0.5rem;
    background-color: #3f3f3f;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    justify-content: space-between;

    figure {
      width: 4.5rem;
      height: 4.5rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      margin-right: 0.75rem;

      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__song-count {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }

    &__intro {
      display: flex;
      align-items: center;
    }
    &__add-btn {
      background-color: transparent;
      @include font(0.875rem, 600, 1.5rem, $active-color);
    }
  }

  div:last-child .playlist {
    margin-bottom: 0;
  }
}

.similar-musics {
  margin-top: 1.5rem;

  &__header {
    @include font(1rem, 600, 1.5rem);
    margin-bottom: 0.5rem;
  }

  &__body {
    border-radius: 1rem;
    overflow: hidden;
    background-color: #3f3f3f;
    width: 34rem;

    .similar-musics__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.75rem;
    }

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    img {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 0.625rem;
    }

    .info {
      &__name {
        @include font(1rem, 700, 1.5rem);
      }

      &__singer {
        @include font(0.75rem, 400, 1.5rem, $inactive-color);
      }
    }
  }

  &__add-btn {
    @include font(0.875rem, 600, 1.5rem, $active-color);
    background-color: transparent;
  }
}
</style>
