<template>
  <button class="samorphic-btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.samorphic-btn {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
}
</style>
