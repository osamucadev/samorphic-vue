# samorphic-vue

A Vue 3 component library styled with **neumorphism** — soft UI with smooth shadows.  
Includes buttons, inputs, cards, avatars, toggles, icon buttons, and a fully functional toast system.

![npm](https://img.shields.io/npm/v/samorphic-vue)  
![license](https://img.shields.io/npm/l/samorphic-vue)

---

## ✨ Features

- 💡 Vue 3 Composition API support
- 🎨 Neumorphic UI design
- 📢 Toasts with `info`, `success`, `warn`, `alert`
- 🧩 Easy component registration via `app.use()`
- ⚙️ TypeScript support
- 🧪 Ready for local or NPM usage

---

## 📦 Installation

```bash
pnpm add samorphic-vue
# or
npm install samorphic-vue
```

---

## 🚀 Quick Start

### 1. Register globally in `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { SamorphicVue } from 'samorphic-vue'

const app = createApp(App)
app.use(SamorphicVue) // ✅ registers components + toasts
app.mount('#app')
```

---

### 2. Use components in your templates

```vue
<template>
  <SButton @click="toast({ title: 'Hey!', message: 'This is a toast.' })">Click me</SButton>
  <SInput v-model="name" placeholder="Your name" />
  <SSwitch v-model="isOn" />
  <SCard>Some neumorphic content</SCard>
  <SToastContainer />
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'samorphic-vue'

const toast = useToast()
const name = ref('')
const isOn = ref(false)
</script>
```

---

## 📢 Toast API

```ts
toast({
  title: 'Optional title',
  message: 'Your message here',
  type: 'info' | 'success' | 'warn' | 'alert', // optional, default = "info"
  timeout: 5000 // optional, default = 4000ms
})
```

---

## 🧩 Available Components

| Component         | Description                         |
|------------------|-------------------------------------|
| `SButton`         | Neumorphic button                   |
| `SSwitch`         | Toggle switch                       |
| `SInput`          | Input field                         |
| `SCard`           | Container/card                      |
| `SAvatar`         | Image or initials                   |
| `SIconButton`     | Button with icon                    |
| `SToastContainer` | Toast system container              |

---

## 📄 License

[MIT](./LICENSE)

---

Made with 💙 by [Samuel Caetité](https://www.linkedin.com/in/samuelcaetite/)