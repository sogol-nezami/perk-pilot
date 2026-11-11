# Perk Pilot

A small dashboard for creating and managing discount campaigns and coupon codes.

> 🚧 Work in progress — built step by step as a portfolio project.

**Live demo:** _coming soon_

## Tech stack

- **React 19** + **TypeScript**, bundled with **Vite**
- **Redux Toolkit** for app state (`createSlice`, `createAsyncThunk`)
- **CSS Modules** for component-scoped styles
- **MSW (Mock Service Worker)** as a fake REST API, so the app runs without a backend
- **Vitest** + **Testing Library** for unit and component tests
- **Cypress** for end-to-end tests

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run test` | Run unit tests in watch mode |
| `npm run cy:open` | Open Cypress (dev server must be running) |
| `npm run lint` | Lint with oxlint |

## Project structure

```
src/
  app/                  # Redux store and typed hooks
  features/campaigns/   # Everything for the campaigns feature: slice, components, styles, tests
  mocks/                # Fake REST API (MSW) and sample data
  test/                 # Test setup
cypress/e2e/            # End-to-end tests
```

Code is grouped **by feature**, not by file type, so everything about campaigns lives in one place.

## Roadmap

- [x] Project setup: Vite, TypeScript, Redux Toolkit, CSS Modules, MSW, Vitest, Cypress
- [x] Campaign list with loading, error and empty states
- [ ] Filter campaigns by status
- [ ] Create a campaign (form with validation)
- [ ] Edit and pause / resume a campaign
- [ ] Accessible form and keyboard navigation checks
- [ ] Deploy to Vercel / Netlify

## Decisions & trade-offs

- **MSW instead of a real backend:** keeps the focus on the frontend while still using real `fetch` calls, so swapping in an API later only means removing the mocks.
- **Redux Toolkit:** the app is small enough for local state, but campaigns are shared across list, filters and forms, which is where a central store pays off.
