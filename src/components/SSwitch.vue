<template>
  <button
    class="s-switch"
    @click="toggle"
    :aria-pressed="modelValue"
    role="switch"
  >
    <div class="s-thumb" :class="{ active: modelValue }" />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<style scoped>
.s-switch {
  width: 3.5rem;
  height: 2rem;
  padding: 4px;
  border-radius: 9999px;
  background: #e0e0e0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
}

.s-thumb {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #c5c5c5;
  box-shadow: inset 2px 2px 6px #bebebe, inset -2px -2px 6px #ffffff;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.s-thumb.active {
  transform: translateX(1.5rem);
  background-color: #2196f3;
}
</style>
