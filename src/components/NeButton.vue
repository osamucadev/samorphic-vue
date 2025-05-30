<template>
    <button class="ne-button">
        <slot />
    </button>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;

.ne-button {
    background-color: $base-color;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 6px 6px 16px $shadow-dark, -6px -6px 16px $shadow-light;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        box-shadow: inset 4px 4px 10px $shadow-dark, inset -4px -4px 10px $shadow-light;
    }
}
</style>