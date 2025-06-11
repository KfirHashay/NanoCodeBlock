# NanoCodeBlock Workspace

This directory houses the Turborepo workspace for the cross-framework code block component.
Apps live in `apps/` and reusable packages in `packages/`.

## Goal

Ship a drop-in code block component that can be consumed by multiple frontend frameworks.

## Features

- Themeable syntax highlighting
- Copy button
- Works with React and Vue

## Installation

```sh
pnpm install
```

## Development Commands

```sh
pnpm dev     # run all apps in watch mode
pnpm build   # build packages and apps
pnpm test    # run unit tests
```

## Contributing

See the root [AGENTS.md](../AGENTS.md) for workflow details. Run `pnpm lint --fix` and `pnpm test` before submitting a pull request.
