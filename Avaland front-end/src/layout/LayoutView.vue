<template>
  <SideMenuComponent />
  <BottomMenuComponent />

  <div id="content">
    <div class="container">
      <HeaderComponent />
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import SideMenuComponent from "@/components/SideMenuComponent.vue";
import BottomMenuComponent from "@/components/BottomMenuComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
