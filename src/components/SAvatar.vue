<template>
  <div class="s-avatar">
    <div class="s-avatar-img">
      <img v-if="src" :src="src" :alt="alt || name" />
      <span v-else>{{ initials }}</span>
    </div>
    <div class="s-avatar-name">{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  src?: string;
  alt?: string;
}>();

const initials = props.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();
</script>

<style scoped>
.s-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.s-avatar-img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-weight: 600;
  font-size: 1.2rem;
  color: #555;
}

.s-avatar-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.s-avatar-name {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #444;
}
</style>
