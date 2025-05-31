#!/bin/bash

echo "🧹 Limpando arquivos desnecessários do projeto samorphic-vue..."

# Apagar pastas
rm -rf public
rm -rf .vscode
rm -rf dist
rm -rf src/App.vue
rm -rf src/main.ts

# Apagar arquivos avulsos
rm -f index.html
rm -f samorphic-vue.css
rm -f samorphic-vue.zip
rm -f vite.svg
rm -f tsconfig.app.json
rm -f tsconfig.node.json

echo "✅ Limpeza concluída."
