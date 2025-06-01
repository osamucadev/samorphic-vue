<template>
  <div class="s-toast-container">
    <SToast v-for="toast in toasts" :key="toast.id" v-bind="toast" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import SToast from "./SToast.vue";
import type { Toast } from "../composables/useToast";

const toasts = inject<Toast[]>("samorphic-toasts")!;
</script>

<style scoped>
.s-toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 9999;
}
</style>
