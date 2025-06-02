# ✅ SToast

The `SToast` component is used to display transient feedback messages to the user. It supports multiple types such as **info**, **success**, **warn**, and **alert**.

> ℹ️ Default type is `info`. Toasts can stack and auto-dismiss after a given time.

## Usage

```vue
<script setup>
import { useToast, SToastContainer } from 'samorphic-vue'

const toast = useToast()
</script>

<template>
  <SToastContainer />
  <button @click="toast({ title: 'Info', message: 'This is an info toast!' })">Info</button>
  <button @click="toast({ title: 'Success', message: 'Yay! It worked!', type: 'success' })">Success</button>
  <button @click="toast({ title: 'Warning', message: 'Be careful!', type: 'warn' })">Warning</button>
  <button @click="toast({ title: 'Alert', message: 'Something went wrong!', type: 'alert' })">Alert</button>
</template>
```

## Props (Toast Options)

| Prop     | Type     | Default  | Description                       |
|----------|----------|----------|-----------------------------------|
| `title`  | string   | -        | The title displayed on the toast |
| `message`| string   | -        | The content of the toast         |
| `type`   | string   | "info"   | One of: `info`, `success`, `warn`, `alert` |
| `timeout`| number   | `3000`   | Time in ms before it disappears  |

## Slots

The `SToast` component does not expose slots. Content is passed through options.
