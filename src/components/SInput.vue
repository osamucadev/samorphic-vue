<template>
  <div class="s-input-wrapper">
    <input
      class="s-input"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="emit('update:modelValue', inputValue)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    if (val !== inputValue.value) inputValue.value = val;
  }
);
</script>

<style scoped>
.s-input-wrapper {
  display: inline-block;
}

.s-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  background: #e0e0e0;
  color: #333;
  border: none;
  box-shadow: inset 4px 4px 10px #bebebe, inset -4px -4px 10px #ffffff;
  outline: none;
  transition: 0.2s ease;
}

.s-input:focus {
  box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff,
    0 0 0 2px #2196f3;
}
</style>
