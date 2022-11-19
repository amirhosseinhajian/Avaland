<template>
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
      <DropdownItem @click="toggleRemoveMusicModal">
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
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#FFA928"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.90024 16.53C9.38024 16.01 10.1203 16.05 10.5403 16.62L11.1403 17.42C11.6103 18.05 12.3902 18.05 12.8602 17.42L13.4503 16.63C13.8703 16.07 14.6102 16.03 15.0902 16.54C16.1402 17.66 16.9902 17.29 16.9902 15.72V9.09C16.9902 6.72 16.4302 6.13 14.2102 6.13H9.77023C7.55023 6.13 6.99023 6.72 6.99023 9.09V15.72C7.00023 17.27 7.86024 17.64 8.90024 16.53Z"
              stroke="#FFA928"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
        اضافه کردن به لیست پخش
      </DropdownItem>
    </DropdownMenu>
  </DropdownComponent>
  <!-- <RemoveMusicModalComponent
    v-show="removeMusicModal"
    @closeModal="toggleRemoveMusicModal"
  ></RemoveMusicModalComponent>
  <AddMusicToPlaylistModalComponent
    v-show="addToPlaylistModal"
    @closeModal="toggleAddToPlaylistModal"
  ></AddMusicToPlaylistModalComponent> -->
</template>
<script setup>
import DropdownComponent from "@/components/Dropdown/DropdownComponent.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
// import RemoveMusicModalComponent from "./RemoveMusicModalComponent.vue";
// import AddMusicToPlaylistModalComponent from "./AddMusicToPlaylistModalComponent.vue";
import { ref } from "vue";

const removeMusicModal = ref(false);
// const addToPlaylistModal = ref(false);

const toggleRemoveMusicModal = () => {
  removeMusicModal.value = !removeMusicModal.value;
};
</script>
<style lang="scss" scoped></style>
