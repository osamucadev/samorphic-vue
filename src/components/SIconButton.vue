<template>
  <button class="s-icon-button" :disabled="disabled" @click="emit('click')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<style scoped>
.s-icon-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e0e0e0;
  border: none;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #444;
  transition: all 0.2s ease;
}

.s-icon-button:active {
  box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;
}

.s-icon-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}
</style>
