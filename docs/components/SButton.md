# ✅ SButton

The `SButton` component is a neumorphic-styled button used for actions and form submissions.

## Usage

```vue
<script setup>
import { SButton } from 'samorphic-vue'
</script>

<template>
  <SButton @click="console.log('Clicked!')">Click me</SButton>
</template>
```

## Props

| Prop      | Type    | Default     | Description                                                  |
|-----------|---------|-------------|--------------------------------------------------------------|
| `type`    | string  | `"button"`  | Native button type (`"button"`, `"submit"`, `"reset"`)       |
| `disabled`| boolean | `false`     | Disables the button and makes it unclickable                |

## Slots

- **default** – The content to display inside the button (e.g., text, icon)

---

### 🧪 Example

```vue
<SButton type="submit">Send</SButton>
```
