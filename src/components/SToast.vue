<template>
  <div class="s-toast" :class="type">
    <strong v-if="title">{{ title }}</strong>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  message?: string;
  type?: "info" | "success" | "warn" | "alert";
}>();
</script>

<style scoped>
.s-toast {
  background: #e0e0e0;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  transition: opacity 0.3s ease;
  font-size: 0.9rem;
  max-width: 320px;
  word-break: break-word;
}

/* cores por tipo */
.s-toast.info {
  border-left: 4px solid #2196f3;
}
.s-toast.success {
  border-left: 4px solid #4caf50;
}
.s-toast.warn {
  border-left: 4px solid #ff9800;
}
.s-toast.alert {
  border-left: 4px solid #f44336;
}

strong {
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
}

p {
  margin: 0;
}
</style>
