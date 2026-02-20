# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is Formelio

A React form library (npm package `formelio`) that generates forms from field definitions. It supports nested/dynamic fields, conditional visibility (`when`), custom validators, and multiple input types (text, number, date, select, tags, check, password, files, text-multiline). Built with TypeScript, React 16 class components, and styled-components.

## Commands

- **Install**: `npm i`
- **Build**: `npm run build` (uses microbundle-crl, outputs to `dist/`)
- **Lint**: `npm run lint`
- **Run all tests**: `npm test` (runs lint + unit tests)
- **Run unit tests only**: `npm run test:unit`
- **Run tests in watch mode**: `npm run dev:test`
- **Update snapshots**: `npm run test:unit:reset`
- **Dev mode (watch + compile)**: `npm run dev`
- **Storybook**: `npm run storybook` (port 6006)
- **Demo site**: `npm run dev:site` (builds and serves the `site/` app)

## Architecture

### Core layers (src/)

1. **`DynamicForm` (Form)** — The public API. Exported as `Form` and as default export. Handles conditional fields (`when`), nested field flattening/unflattening, and dynamic list fields (`length`). Wraps `BasicForm`.

2. **`BasicForm`** — Renders the form HTML structure. Groups fields by `depth` for visual nesting. Manages field validity state and debounced `onChange` propagation (default 500ms). Creates a `FieldWrapper` per field to bridge form-level data to individual `Field` components.

3. **`Field/Field`** — Individual field component. Manages field state (errors, focus, dirty, typing). Calls the validator and renders label, input, icon, and hint. Class component extending a custom `Component` base.

4. **`Input/`** — Input type renderers. `Input/index.tsx` routes to the correct component (Input, TextArea, Select/Tags, Date, File, Checkbox) based on `type` and `options` props.

### Data flow for nested fields

`DynamicForm` flattens nested values (e.g., `{ address: { city: "X" } }` → `{ "address.city": "X" }`) using `modules/flatten.ts`. Field names use dot notation internally. On `onChange`, values are unflattened back before propagating to the consumer.

### Key modules (src/modules/)

- `flatten`/`unflatten` — Convert between nested objects and dot-notation flat objects
- `clone` — Deep clone utility
- `getBorderColor` — Computes input border color based on focus/error state

### Styling

SASS modules (`src/style/index.module.sass`) + CSS module for Date input. Theme variables in `src/style/theme.sass`. Component uses `classnames` for conditional class application.

### Testing

Tests live in `src/stories/` alongside Storybook stories. Tests import stories and render them with `@testing-library/react`. Storyshot tests provide snapshot coverage.

### Demo site

The `site/` directory is a separate React app that uses `formelio` as a file dependency (`file:..`). It shares `node_modules` with the root via file references.

## Git Hooks

- **pre-commit**: runs lint-staged (prettier + eslint), build, and full test suite
- **commit-msg**: enforces [Conventional Commits](https://www.conventionalcommits.org/) via commitlint

## Lint Rules

- Max complexity: 10
- Max line length: 120 chars
- Max file length: 350 lines
- `sort-keys` and `sort-imports` are warned (not errors)

## Key Type Definitions (src/types.ts)

- `TForm<T>` — Main form props: `fields`, `onChange`, `value`, `delay`, `colors`
- `TField<T, F>` — Field definition with generics for value type (T) and form type (F)
- `TInput<T>` — Low-level input props
- `TColors` — Theme customization: `{ base?, accent?, error? }`

## Class Component Pattern

Components extend a custom `Component` base class (src/Component.tsx) that tracks mount state via `_isMounted`. This is used to guard async setState calls. This is a known antipattern (per React docs) but is the current approach.
