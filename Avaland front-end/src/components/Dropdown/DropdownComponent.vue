<template>
  <div class="dropdown" ref="dropdown" @click="toggleMenu">
    <button class="dropdown__toggle">
      <slot name="toggle"></slot>
    </button>

    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { onMounted, onBeforeUnmount, ref } from "vue";

onMounted(() => {
  document.addEventListener("click", clickHandler);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", clickHandler);
});

let dropdown = ref(null);
let showMenu = ref(false);

provide(/* key */ "showMenu", /* value */ showMenu);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function clickHandler(event) {
  const { target } = event;

  if (!dropdown.value.contains(target)) showMenu.value = false;
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__toggle {
  border: 0;
  background: transparent;
  box-shadow: none;
  border-radius: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
