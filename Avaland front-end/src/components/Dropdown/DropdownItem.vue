<template>
  <li>
    <a href="javascript:void(0)">
      <i class="icon">
        <slot name="icon"></slot>
      </i>

      <slot></slot>
    </a>
  </li>
</template>

<script setup></script>

<style lang="scss" scoped>
li {
  text-align: right;
}

li > a {
  padding: 1rem 0.875rem;
  display: block;
  white-space: nowrap;
  text-decoration: none;
  color: #ffffff;
}

li > a:hover {
  background: rgba(70, 70, 70, 0.5);
}

.icon {
  margin-left: 0.625rem;
}

li {
  list-style: none;
  overflow: hidden;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #999;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }
}

li:last-child {
  margin: 0;

  &::after {
    display: none;
  }
}
</style>
