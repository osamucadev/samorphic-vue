<template>
    <button class="s-button" :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts" setup>
defineProps<{
    disabled?: boolean;
}>()
</script>

<style scoped>
.s-button {
    padding: 0.75rem 1.5rem;
    border-radius: 1rem;
    font-weight: 600;
    font-family: var(--samorphic-font);
    background: #e0e0e0;
    color: #555;
    border: none;
    box-shadow:
        8px 8px 16px #bebebe,
        -8px -8px 16px #ffffff;
    transition: 0.2s ease;
}

.s-button:active {
    box-shadow:
        inset 4px 4px 10px #bebebe,
        inset -4px -4px 10px #ffffff;
}

.s-button:disabled {
    opacity: 0.6;
    box-shadow: none;
    cursor: not-allowed;
}
</style>