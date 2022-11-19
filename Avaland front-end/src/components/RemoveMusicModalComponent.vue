<template>
  <ModalComponent @closeModal="removeMusic">
    <template v-slot:body>
      <div class="remove-music">
        <p class="remove-music__message">آیا از حذف این آهنگ اطمینان دارید؟</p>
        <button class="remove-music__remove-btn" @click="confirmRemove">
          حذف
        </button>
        <button class="remove-music__cancel-btn" @click="removeMusic">
          لغو
        </button>
      </div>
    </template>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const emit = defineEmits(["closeModal"]);

const removeMusic = () => {
  emit("closeModal");
};

const confirmRemove = () => {
  removeMusic();
  store.dispatch("musics/removeMusic");
  alert("موزیک با موفقیت حذف شد!");
  router.push({ name: "home" });
};
</script>
<style lang="scss" scoped>
.remove-music {
  &__message {
    @include font(1.125rem, 600, 1.5rem);
  }

  &__remove-btn {
    width: 19.375rem;
    height: 3.5rem;
    background-color: #f54444;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-top: 1.5rem;
  }

  &__cancel-btn {
    width: 13.125rem;
    height: 3.5rem;
    background-color: #464646;
    @include font(1rem, 700, 1.4rem);
    border-radius: 0.5rem;
    margin-right: 1.5rem;
  }
}
</style>
