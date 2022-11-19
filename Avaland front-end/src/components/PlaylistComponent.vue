<template>
  <div class="playlist">
    <img
      class="playlist__image"
      :src="require(`@/assets/images/${playlist.musics[0].img}`)"
      alt="playlist image"
      @click="showPlaylist"
    />
    <div class="playlist__footer">
      <div>
        <h3 @click="showPlaylist">{{ playlist.name }}</h3>
        <DropdownComponent>
          <template #toggle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-3b104551=""
            >
              <path
                d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                data-v-3b104551=""
              ></path>
              <path
                d="M14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                data-v-3b104551=""
              ></path>
              <path
                d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                data-v-3b104551=""
              ></path>
            </svg>
          </template>

          <DropdownMenu>
            <DropdownItem @click="modalToggle">
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                    stroke="#F54444"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                    stroke="#F54444"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8504 9.14001L18.2004 19.21C18.0904 20.78 18.0004 22 15.2104 22H8.79039C6.00039 22 5.91039 20.78 5.80039 19.21L5.15039 9.14001"
                    stroke="#F54444"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3301 16.5H13.6601"
                    stroke="#F54444"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 12.5H14.5"
                    stroke="#F54444"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              حذف
            </DropdownItem>

            <DropdownItem>
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                    stroke="#FFA928"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                    stroke="#FFA928"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.9102 4.15002C15.5802 6.54002 17.4502 8.41002 19.8502 9.09002"
                    stroke="#FFA928"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              تغییر نام لیست
            </DropdownItem>
          </DropdownMenu>
        </DropdownComponent>
      </div>
      <p>ایجاد شده توسط {{ playlist.creator }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import DropdownComponent from "@/components/Dropdown/DropdownComponent.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";

const router = useRouter();

const props = defineProps({
  playlist: {
    name: String,
    img: String,
    creator: String,
    musics: Array,
    isLike: Boolean,
  },
});

const showPlaylist = () => {
  router.push({
    name: "playlist",
    params: { playlistName: props.playlist.name },
  });
};
</script>

<style lang="scss" scoped>
.playlist {
  max-width: 20.5rem;
  max-height: 25rem;

  &__image {
    border-radius: 1rem;
    cursor: pointer;
  }

  &__footer {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.6rem;

      h3 {
        @include font(1.5rem, 700, 1.5rem);
        cursor: pointer;
      }
    }

    p {
      @include font(0.875rem, 500, 1.5rem, $inactive-color);
      margin-top: 0.5625rem;
    }
  }
}
</style>
