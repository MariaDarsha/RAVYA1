--------------------------------------------------

# Project Overview

RAVYA is built using React + TypeScript + Vite and provides a modern frontend development setup with Hot Module Replacement (HMR), TypeScript support and ESLint integration.

Additional Features

• Fast development workflow using Vite

• Component-based architecture

• TypeScript support

• Tailwind CSS integration

• Responsive frontend structure

--------------------------------------------------

Tech Stack

Frontend

• React

• TypeScript

• Tailwind CSS

• Vite

Backend

• Node.js

--------------------------------------------------

Getting Started

Clone repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build application

```bash
npm run build
```

--------------------------------------------------

Recommended Production ESLint Configuration

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [

      tseslint.configs.recommendedTypeChecked,

      // alternatively:
      tseslint.configs.strictTypeChecked,

      // optional:
      tseslint.configs.stylisticTypeChecked,

    ],

    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.node.json',
          './tsconfig.app.json'
        ],

        tsconfigRootDir:
        import.meta.dirname,
      },
    },
  },
])
```

--------------------------------------------------

React-specific ESLint Rules

Install:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom
```

Configuration:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [

      reactX.configs[
      'recommended-typescript'
      ],

      reactDom.configs.recommended,

    ],

    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.node.json',
          './tsconfig.app.json'
        ],

        tsconfigRootDir:
        import.meta.dirname,
      },
    },
  },
])
```

--------------------------------------------------

Future Improvements

• Reusable UI components

• Better documentation

• Loading utilities

• Enhanced frontend structure
