# ✅ SInput

The `SInput` component is a neumorphic-styled input field for user text entry.

## Usage

```vue
<script setup>
import { SInput } from "samorphic-vue";
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <SInput v-model="name" placeholder="Enter your name" />
</template>
```

## Props

| Prop          | Type   | Default | Description                   |
| ------------- | ------ | ------- | ----------------------------- |
| `modelValue`  | string | `''`    | The value bound to the input. |
| `placeholder` | string | `''`    | Placeholder text when empty.  |

## Events

| Event               | Description                         |
| ------------------- | ----------------------------------- |
| `update:modelValue` | Fired when the input value changes. |

## Slots

This component does not use slots.
