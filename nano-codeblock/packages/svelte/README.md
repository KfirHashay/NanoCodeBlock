# @nano-codeblock/svelte

Svelte component for NanoCodeBlock.

## Installation

```sh
pnpm add @nano-codeblock/svelte
# or
npm install @nano-codeblock/svelte
# or
yarn add @nano-codeblock/svelte
```

## Usage

```svelte
<script lang="ts">
  import CodeBlock from '@nano-codeblock/svelte';
  import '@nano-codeblock/core/themes.css';
</script>

<CodeBlock code="console.log('hello')" lang="javascript" />
```
