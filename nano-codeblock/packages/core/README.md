# @nano-codeblock/core

Utilities for tokenizing code, applying themes and copying text to the clipboard. This package is framework agnostic and is used by the UI wrappers.

## Installation

```sh
pnpm add @nano-codeblock/core
# or
npm install @nano-codeblock/core
# or
yarn add @nano-codeblock/core
```

## Usage

```ts
import { highlight, Theme, copyToClipboard } from '@nano-codeblock/core'
import '@nano-codeblock/core/themes.css'

const code = "console.log('hello')"
const tokens = highlight(code, 'javascript')

// pick a CSS class based on the theme
const themeClass = `cb-theme-${Theme.dracula}`

await copyToClipboard(code)
```

`themes.css` exposes CSS variables for each theme. Apply the corresponding `cb-theme-*` class on a container or use the variables directly in your styles.

## Running tests

Execute unit tests from the repository root:

```sh
pnpm test
```
