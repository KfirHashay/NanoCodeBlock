# @nano-codeblock/vue

Vue component for NanoCodeBlock.

## Installation

```sh
pnpm add @nano-codeblock/vue
# or
npm install @nano-codeblock/vue
# or
yarn add @nano-codeblock/vue
```

## Usage

```vue
<script setup lang="ts">
import { CodeBlock } from '@nano-codeblock/vue'
import '@nano-codeblock/core/themes.css'
</script>

<CodeBlock code="console.log('hello')" lang="javascript" />
```
