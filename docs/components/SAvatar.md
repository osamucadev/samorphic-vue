# ✅ SAvatar

The `SAvatar` component displays a user's avatar image or initials with a neumorphic style.

## Usage

```vue
<script setup>
import { SAvatar } from 'samorphic-vue'
</script>

<template>
  <SAvatar name="Joana Silva" src="https://i.pravatar.cc/150?img=3" />
  <SAvatar name="Samuel Caetité" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `""` | The name to generate initials from if `src` is not provided |
| `src` | `string` | `""` | Image URL for the avatar |