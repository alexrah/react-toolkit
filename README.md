# @alexrah/react-toolkit

A collection of react tools

## Installation

```bash
pnpm install @alexrah/react-toolkit
```

## Exported Functions

### `cn(...inputs: ClassValue[])`

This function merges Tailwind CSS classes without style conflicts. It's a combination of `clsx` and `tailwind-merge`.

**Usage:**

```tsx
import { cn } from '@alexrah/react-toolkit/utils';

function MyComponent({ className }: { className?: string }) {
  return <div className={cn('bg-red-500', className)}>Hello</div>;
}
```

### `` tw`p-1` ``

A utility for triggering LSP completions for Tailwind CSS class names dynamically.

**Usage:**

```tsx
import { tw } from '@alexrah/react-toolkit/utils';

const myClassName = tw`bg-red-500`;
```

## Scripts

- `pnpm build`: Compiles the TypeScript code.
- `pnpm typecheck`: Runs the TypeScript compiler to check for type errors without emitting files.
- `pnpm clean`: Removes the `dist` directory and TypeScript build info files.
- `pnpm prepublishOnly`: Cleans and builds the project before publishing.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm lint:fix`: Lints the codebase and automatically fixes issues.

## Dependencies

- [clsx](https://github.com/lukeed/clsx): A tiny (228B) utility for constructing `className` strings conditionally.
- [tailwind-merge](https://github.com/dcastil/tailwind-merge): A utility function to merge Tailwind CSS classes in JS without style conflicts.

## Dev Dependencies

- [eslint](https://eslint.org/): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`).
- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.

## Repository

[https://github.com/alexrah/react-toolkit](https://github.com/alexrah/react-toolkit)
