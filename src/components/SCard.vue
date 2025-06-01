<template>
  <div class="s-card">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  padding?: string;
}>();
</script>

<style scoped>
.s-card {
  background: #e0e0e0;
  border-radius: 1rem;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
}
</style>
