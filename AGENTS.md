# Repository Guidelines

This project uses Turborepo with an `apps` and `packages` structure. All Node commands should be run from the `nano-codeblock` directory.

## Development workflow
- Commit messages should follow conventional commit format.
- Always run `pnpm lint --fix` before committing. Run this command from the `nano-codeblock` directory. If the command fails due to missing dependencies, note the failure in the PR.
- Run tests with `pnpm exec vitest run packages/core/src --run` from the `nano-codeblock` directory.
- Add `// TODO(codex):` comments when leaving tasks for manual follow-up.
- If tests run for more than 30 minutes without finishing, stop the run.
- Create a Changesets changelog entry for each feature.
- Open a draft PR per milestone and keep diffs under 400 lines.
