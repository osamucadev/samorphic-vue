# ✅ SSwitch

The `SSwitch` component is a neumorphic-style switch for toggling boolean states.

## Usage

```vue
<script setup>
import { SSwitch } from 'samorphic-vue'
import { ref } from 'vue'

const isOn = ref(false)
</script>

<template>
  <SSwitch v-model="isOn" />
  <p>Status: {{ isOn ? 'On' : 'Off' }}</p>
</template>
```

## Props

| Prop     | Type    | Default | Description                           |
|----------|---------|---------|---------------------------------------|
| modelValue | boolean | `false` | The current state of the switch       |

## Events

| Event     | Payload | Description               |
|-----------|---------|---------------------------|
| `update:modelValue` | boolean | Emitted when the switch value changes |