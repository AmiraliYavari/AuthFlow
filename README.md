<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# 🔐 AuthFlow

A modern, production-ready full-stack authentication system built with React, TypeScript, Node.js, Express, Prisma and PostgreSQL.

> Designed as a real-world authentication platform with scalable architecture, clean code, and security best practices.

---

## ✨ Features

### Authentication

- User Registration
- User Login
- Secure Logout
- JWT Authentication
- Refresh Token Rotation
- Protected Routes
- Remember Me

### User Management

- User Profile
- Edit Profile
- Change Password
- Avatar Upload
- Delete Account

### Email

- Email Verification
- Forgot Password
- Password Reset

### Security

- Password Hashing (bcrypt)
- Rate Limiting
- Helmet
- CORS
- Input Validation
- Secure Cookies

### Developer Experience

- TypeScript
- REST API
- Prisma ORM
- PostgreSQL
- Docker
- GitHub Actions
- ESLint
- Prettier
- Husky
- Environment Variables

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- React Hook Form
- Zod

### Backend

- Node.js
- Express
- Prisma
- PostgreSQL
- JWT
- bcrypt

---

## 📂 Project Structure

```text
authflow/
├── client/
├── server/
├── docs/
└── README.md
```

---

## 🚀 Roadmap

- [ ] Project setup
- [ ] Authentication UI
- [ ] REST API
- [ ] Database integration
- [ ] JWT authentication
- [ ] Email verification
- [ ] Password reset
- [ ] Avatar upload
- [ ] Admin dashboard
- [ ] Docker support
- [ ] GitHub Actions
- [ ] Unit testing
- [ ] Production deployment

---

## 📄 License

MIT
>>>>>>> b29ec42c650c0d24eaf01e2364a730cd7cd5a88b
