# ✅ SIconButton

The `SIconButton` is a neumorphic-styled icon button designed for simple icon-based actions.

## Usage

```vue
<script setup>
import { SIconButton } from 'samorphic-vue';
</script>

<template>
  <SIconButton @click="console.log('Clicked!')">←</SIconButton>
</template>
```

## Props

This component accepts all native `button` attributes and uses a default slot for the icon or symbol.

## Slots

| Name    | Description                     |
|---------|---------------------------------|
| default | Icon or symbol to display inside the button |
