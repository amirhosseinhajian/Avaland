<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

function close() {
  emit("closeModal");
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(17, 17, 17, 0.805);
  padding: 8rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 3;
  overflow: auto;
}

.modal {
  background: rgb(53, 53, 53);
  border-radius: 1rem;
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
}
</style>
