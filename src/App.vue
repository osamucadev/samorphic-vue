<template>
  <main class="app">
    <NeButton>Click me</NeButton>
  </main>
</template>

<script setup lang="ts">
import NeButton from './components/NeButton.vue'
</script>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #dde1e7;
  font-family: 'Segoe UI', sans-serif;
}
</style>
