import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pkg from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';

const { parser: tsParser } = pkg;
const __dirname = dirname(fileURLToPath(import.meta.url));
// Provide the required 'recommendedConfig' to FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: 'eslint:recommended'
});

// Assign array to a variable to avoid anonymous default export warnings
const config = [
  // Ignore Next.js build and node modules
  { ignores: ['**/.next/**', '**/node_modules/**'] },

  // Include recommended and shareable configs via FlatCompat
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),

  // Custom overrides and rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-namespace': 'off'
    }
  }
];

export default config;
