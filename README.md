# Money Guard

**Simple, fast personal finance tracker built with React & Vite**

[Live Demo](https://thereacthor.github.io/moneyguard)

## Contents

- [Money Guard](#money-guard)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Key Features](#key-features)
  - [Tech Stack](#tech-stack)
  - [Quick Start](#quick-start)
  - [NPM Scripts](#npm-scripts)
  - [Directory Structure](#directory-structure)
  - [State Management](#state-management)
  - [API Endpoints](#api-endpoints)
  - [Known Issues \& Improvements](#known-issues--improvements)
    - [🐛 Current Issues](#-current-issues)
    - [✅ Recommended Fixes (WIP on `fix-bugs` branch)](#-recommended-fixes-wip-on-fix-bugs-branch)
    - [🚀 Future Improvements](#-future-improvements)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

Money Guard is a single-page application (SPA) that lets you track personal finances. Record income & expenses, view your balance, categorize transactions, and visualize spending patterns with charts. Auth state persists across sessions and refreshes transparently.

## Key Features

- **Authentication**: Register, login, logout, automatic token refresh
- **Persistent Session**: Redux-persist keeps auth state across page reloads
- **Transaction Management**: Add, edit, list, sort, and filter transactions by date, category, amount
- **Category & Summaries**: View spending by category and time period
- **Visualizations**: Doughnut charts for category breakdown
- **Form Validation**: Multiple validation approaches (Yup, Formik, React Hook Form)
- **Date Picking**: Integrated date picker for transaction dates
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modals & Dialogs**: Clean UI for confirmations and data entry

## Tech Stack

**Frontend**

- React 18 + Vite 6 (bundling)
- Redux Toolkit + redux-persist (state management)
- React Router v7 (routing)
- Axios (HTTP client)

**Forms & Validation**

- Formik + Yup
- React Hook Form

**UI & Charts**

- Chart.js + react-chartjs-2 (doughnut charts)
- React Select (dropdowns)
- React Datepicker (date selection)
- React Modal (modal dialogs)
- React Icons (icon library)
- CSS Modules + modern-normalize (styling)

**Dev & Build**

- ESLint (code quality)
- GitHub Pages (deployment)

## Quick Start

**Prerequisites**: Node.js >= 18, npm

```bash
git clone https://github.com/TheReacThor/moneyguard.git
cd moneyguard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Build for production**

```bash
npm run build
npm run preview
```

**Deploy to GitHub Pages**

```bash
npm run deploy
```

## NPM Scripts

| Script            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start Vite dev server on localhost:5173 |
| `npm run build`   | Create optimized production build       |
| `npm run preview` | Preview production build locally        |
| `npm run lint`    | Run ESLint code quality checks          |
| `npm run deploy`  | Build and deploy to GitHub Pages        |

## Directory Structure

```
src/
├── components/        # Reusable UI & feature components
│   ├── Header/
│   ├── LogOutModal/
│   ├── AddTransactionForm/
│   ├── ChartDoughnut/
│   └── ...
├── pages/            # Route-level page layouts
│   ├── DashboardPage/
│   ├── LoginPage/
│   └── RegistrationPage/
├── redux/            # Redux slices & async thunks
│   ├── Auth/
│   ├── Transactions/
│   ├── Statistics/
│   ├── Currency/
│   ├── Modals/
│   └── store.jsx
├── services/         # API service abstractions
│   └── statistics-api.js
├── config/           # Shared configuration (axios, tokens)
│   └── userTransactionApi.js
├── helpers/          # Utility functions (formatting, sorting)
│   ├── transactionsFormatter.js
│   ├── dateHelper.js
│   └── formatBalance.js
├── hooks/            # Custom React hooks
│   ├── useMedia.jsx
│   └── useToggle.jsx
├── routes/           # Route guards & layout
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
├── schemas/          # Form validation schemas (Yup)
├── utils/            # Global styles & variables
└── App.jsx          # Root component
```

## State Management

**Redux Store Structure**

```
auth:
  ├── user: { name, email, balance }
  ├── token: string (JWT)
  ├── isLoggedIn: boolean
  ├── isRefreshing: boolean
  ├── isAuthLoading: boolean
  └── isAuthError: string | null

transactions:
  ├── items: Array
  ├── isLoading: boolean
  └── error: string | null

statistics:
  ├── summary: Object
  ├── categories: Array
  └── ...

currency: { ... }
modals: { ... }
```

**Persistence**: Only the `auth` slice is persisted via `redux-persist` with localStorage.

**Auth Flow**:

1. User submits login form
2. `loginThunk` calls POST `/api/auth/sign-in`
3. Token saved to localStorage & set in axios Authorization header
4. `isLoggedIn` set to true
5. On page reload, `refreshThunk` validates token and restores session

## API Endpoints

**Base URL**: `https://wallet.b.goit.study`

| Method | Endpoint                      | Purpose                            |
| ------ | ----------------------------- | ---------------------------------- |
| POST   | `/api/auth/sign-up`           | Register new user                  |
| POST   | `/api/auth/sign-in`           | Login user                         |
| DELETE | `/api/auth/sign-out`          | Logout user                        |
| GET    | `/api/users/current`          | Get current user & balance         |
| GET    | `/api/transactions-summary`   | Get period summaries (with params) |
| GET    | `/api/transaction-categories` | Get available categories           |

**Headers**: `Authorization: Bearer <token>` (set by axios interceptor after login)

## Known Issues & Improvements

### 🐛 Current Issues

- **Logout Modal**: Logout button may not fire correctly if state cleanup is incomplete
- **Early Login State**: `refreshThunk.pending` sets `isLoggedIn = true` prematurely, causing UI flicker
- **No Rejected Handler**: `logoutThunk.rejected` case is missing, so failed logout doesn't clean state

### ✅ Recommended Fixes (WIP on `fix-bugs` branch)

1. Remove optimistic `isLoggedIn = true` from `refreshThunk.pending`
2. Add `logoutThunk.rejected` case to reset auth state on error
3. Ensure `removeToken()` is called in both success and error logout paths

### 🚀 Future Improvements

- Introduce `.env` for environment-based API URL configuration
- Add comprehensive test suite (Vitest + React Testing Library + MSW)
- Implement Error Boundary for global error handling
- Add dark mode support
- Virtualize long transaction lists for performance
- CI/CD pipeline (GitHub Actions)
- Better accessibility (ARIA labels, keyboard navigation)

## Contributing

1. Create a feature branch: `git checkout -b fix/<topic>`
2. Make your changes and test locally
3. Commit with conventional messages:
   - `feat: add new feature`
   - `fix: resolve logout issue`
   - `refactor: improve state logic`
4. Push and open a Pull Request

## License

MIT License – see LICENSE file.
