/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
export default [
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
