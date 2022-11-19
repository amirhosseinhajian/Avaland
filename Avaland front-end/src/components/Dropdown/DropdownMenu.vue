<template>
  <ul class="dropdown__menu" v-show="showMenu">
    <slot></slot>
  </ul>
</template>

<script setup>
import { inject } from "vue";

const showMenu = inject("showMenu");
</script>

<style lang="scss" scoped>
.dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  min-width: 16rem;
  list-style: none;
  background: rgb(70, 70, 70);
  border-radius: 10px;
  overflow: hidden;
  @include font(1rem, 500, 1.5, #fff);
}
</style>
