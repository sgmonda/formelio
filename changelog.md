# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] — Unreleased

Major release that modernizes the entire stack. Read the **Breaking Changes** section carefully before upgrading.

### Breaking Changes

#### Minimum React version: 18

The peer dependency for `react` changed from `^16.0.0` to `^18.0.0 || ^19.0.0`. React 16 and 17 are no longer supported.

```diff
- "react": "^16.0.0"
+ "react": "^18.0.0 || ^19.0.0"
```

#### `react-dom` is now a required peer dependency

Previously not listed. You must have it installed alongside `react`:

```bash
npm install react-dom
```

#### Minimum Node.js version: 18

The engine requirement changed from `>=10` to `>=18`.

#### CSS must be imported explicitly

Styles are no longer injected via JavaScript. You **must** import the CSS file once in your application:

```ts
import 'formelio/styles.css';
```

Without this import, the form will render unstyled.

#### `icon` field type changed from `string` to `ReactNode`

The `icon` property on field definitions no longer accepts Font Awesome icon name strings. It now accepts any `React.ReactNode`.

```diff
- { name: 'email', icon: 'envelope' }
+ { name: 'email', icon: '📧' }
+ { name: 'email', icon: <MyEnvelopeIcon /> }
```

If you were using Font Awesome icon names, you need to install an icon library yourself and pass components:

```tsx
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

{ name: 'email', icon: <FontAwesomeIcon icon={faEnvelope} /> }
```

Or use any other icon solution (lucide-react, react-icons, SVGs, emojis, etc.).

#### Font Awesome removed from dependencies

The following packages are no longer bundled:

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`

This significantly reduces the bundle size. Internal icons (warning, help) now use inline SVGs.

#### ESM module entry point changed

The ESM entry point moved from `dist/index.modern.js` to `dist/index.mjs`. If you referenced the file directly (uncommon), update the path. Standard imports (`import { Form } from 'formelio'`) are unaffected — the `exports` map handles resolution automatically.

### Removed Dependencies

The following runtime dependencies have been removed, reducing bundle size:

| Package             | Replacement                        |
| ------------------- | ---------------------------------- |
| `lodash`            | Minimal internal utilities         |
| `faker`             | Removed (was unused in production) |
| `react-markdown`    | Lightweight internal renderer      |
| `styled-components` | Moved to peer dependency only      |

### Upgraded Dependencies

| Package            | Before | After |
| ------------------ | ------ | ----- |
| `date-fns`         | ^2.22  | ^4.1  |
| `react-datepicker` | 3.6.0  | ^7.5  |
| `react-select`     | 4.3.0  | ^5.8  |

### Changed

- All components rewritten from class components to functional components with hooks
- `styled-components` peer dependency range widened to `^5.2.1 || ^6.0.0` (v6 now supported)
- Package now ships proper `exports` map with separate ESM/CJS entry points and TypeScript declarations
- New `FieldHandle` type exported for ref-based field access via `useImperativeHandle`
- Build system changed from `microbundle-crl` to `tsup`
- TypeScript upgraded from 3.7 to 5.7

### Fixed

- CSS typo: `whitespace` corrected to `white-space`
- CSS typo: `line-heigth` corrected to `line-height`
- Date input: `createGlobalStyle` moved outside component to avoid re-creation on every render
- Date input: uses transient `$borderColor` prop to avoid styled-components DOM warning
- Label line-height adjusted for better vertical alignment

---

## Migration guide from 0.2.x to 1.0.0

### Step 1 — Update peer dependencies

```bash
npm install react@^18 react-dom@^18 styled-components@^5.2.1
```

Or, if you want to use styled-components v6:

```bash
npm install react@^18 react-dom@^18 styled-components@^6
```

### Step 2 — Import styles

Add this import once, typically in your app entry point:

```ts
import 'formelio/styles.css';
```

### Step 3 — Update icon fields

Search your codebase for `icon:` in field definitions. Replace Font Awesome name strings with React nodes:

```diff
- { name: 'user', icon: 'user' }
+ { name: 'user', icon: '👤' }
```

### Step 4 — Verify Node.js version

Ensure you are running Node.js 18 or later:

```bash
node --version  # Must be >= 18
```

### Step 5 — Test

```bash
npm test
```

No changes to the `Form` component API (`fields`, `value`, `onChange`, `delay`, `colors`) are required. The component interface is fully backward-compatible beyond the changes listed above.

---

## Previous releases

- [0.2.0](https://github.com/sgmonda/formelio/compare/v0.1.0...v0.2.0)
- [0.1.0](https://github.com/sgmonda/formelio/compare/0.0.2...v0.1.0)
