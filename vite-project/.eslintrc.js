import eslint from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs.recommended,
  reactRefresh.configs.recommended,
  importPlugin.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
  },
];