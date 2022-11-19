<template>
  <main>
    <LayoutView>
      <template v-slot:content>
        <div class="landing">
          <div class="landing__main-panel">
            <LandingBannerComponent></LandingBannerComponent>
            <div class="latest-songs-week">
              <MusicGroupShowComponent
                title="جدیدترین آهنگ های این هفته"
                :musics="newMusics"
              >
              </MusicGroupShowComponent>
            </div>
            <div class="selected-playlist">
              <MusicGroupShowComponent title="آهنگ های داغ" :musics="hotMusics">
              </MusicGroupShowComponent>
            </div>
          </div>
          <div class="landing__side-panel">
            <VipAccountComponent></VipAccountComponent>
            <div class="tabs">
              <div class="tabs__option">
                <input
                  type="radio"
                  id="play-history"
                  value="play-history"
                  name="seside-tab"
                />
                <label for="play-history">تاریخچه پخش</label>
              </div>
              <div class="tabs__option">
                <input
                  type="radio"
                  id="most-popular"
                  value="most-popular"
                  name="seside-tab"
                  checked
                />
                <label for="most-popular">محبوب ترین آهنگ ها</label>
              </div>
            </div>
            <div class="tabs-container">
              <MusicInSideComponent
                v-for="(music, index) in mostPopularMusics"
                :key="index"
                :music="music"
              ></MusicInSideComponent>
            </div>
          </div>
        </div>
      </template>
    </LayoutView>
  </main>
</template>

<script setup>
import LayoutView from "@/layout/LayoutView.vue";
import MusicGroupShowComponent from "@/components/MusicGroupShowComponent.vue";
import MusicInSideComponent from "@/components/MusicInSideComponent.vue";
import LandingBannerComponent from "@/components/LandingBannerComponent.vue";
import VipAccountComponent from "../components/VipAccountComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const newMusics = computed(() => store.state.musics.new_musics);
const hotMusics = computed(() => store.state.musics.hot_musics);
const mostPopularMusics = computed(() => store.state.musics.mostPopularMusics);
</script>

<style scoped lang="scss">
.landing {
  display: flex;
  margin: 6.1rem 0;

  &__main-panel {
    flex: 71%;

    .latest-songs-week {
      margin-top: 3rem;
    }

    .selected-playlist {
      margin-top: 2.3125rem;
    }
  }

  &__side-panel {
    flex: 20%;
    margin-right: 2.8125rem;

    .tabs {
      display: flex;
      width: 100%;
      height: 3.5rem;
      background: rgba(70, 70, 70, 0.4);
      border-radius: 1rem;
      margin-top: 3rem;
      overflow: hidden;

      &__option {
        text-align: center;
        flex: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        input {
          display: none;
        }

        label {
          cursor: pointer;
          @include font(1rem, 700, 1.5rem, #999999);
          border-radius: 1rem;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        input:checked + label {
          background: linear-gradient(
            108.1deg,
            #fe8a48 -11.1%,
            #fda53e 112.32%
          );
          color: white;
        }
      }
    }

    .tabs-container {
      width: 100%;
      height: 40.5rem;
      background: rgba(70, 70, 70, 0.4);
      margin-top: 2rem;
      border-radius: 1rem;
      padding: 0.5rem 1.875rem 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
