# NanoCodeBlock

Cross-framework code block component.

The monorepo is contained in `nano-codeblock/` and uses a standard `apps` and `packages` layout.

## Goal

Provide a reusable code block component that works across React and Vue projects.

## Features

- Syntax highlighting with your choice of themes
- Copy-to-clipboard button
- Light and dark mode support
- Works in both server and client environments

## Setup

```sh
cd nano-codeblock
pnpm install
```

## Development

```sh
pnpm dev    # start apps in watch mode
pnpm build  # build all packages
pnpm test   # run unit tests
```

## Contributing

1. Read the repository root [AGENTS.md](AGENTS.md) for workflow expectations.
2. Create a branch and run `pnpm lint --fix` and `pnpm test` before opening a PR.
3. Use conventional commit messages when committing changes.

See [AGENTS.md](AGENTS.md) for full contribution guidelines.
