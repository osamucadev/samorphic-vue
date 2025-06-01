<template>
    <button class="s-button">
        <slot />
    </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.s-button {
    background: #e0e0e0;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    padding: 10px 20px;
    border: none;
}
</style>