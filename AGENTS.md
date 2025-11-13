# RAD Template — LLM Project Overview

This repository couples a Next.js App Router application with a Vite bundle that ships Daikin design system web components. Use this guide as the canonical context document for language models working in the project.

## Architecture Snapshot

- **Frameworks:** Next.js (App Router) with TypeScript and React 19.
- **Design System:** Daikin design system custom elements, pre-bundled into `public/webcomponents.js` via Vite. React wrappers live inside `app/components/dds-wrappers.tsx`.
- **Auth:** NextAuth configured for a Keycloak identity provider. Local development can bypass the flow with `BYPASS_AUTH=true`.
- **Styling:** Global styles live in `app/globals.css`; design tokens are documented in `CSS_VARIABLES.md`. Tailwind CSS utilities are available (see `postcss.config.mjs`).

## Key Directories

- `app/` — App Router routes, layouts, server actions, and React components.
    - `app/components/` — Reusable React components and wrappers for custom elements.
    - `app/locale/` — Typed locale bundles and helpers for internationalized copy.
    - `app/webcomponents.ts` — Single entry point that registers all custom elements used in React.
- `lib/` — Shared utilities (authentication helpers, fetch wrappers, etc.).
- `public/` — Static assets, including `webcomponents.js` built by Vite.
- `tests/` — Playwright end-to-end scenarios.
- `types/` — Shared TypeScript declarations that augment third-party modules.

## Common Workflows

- **Install & bootstrap:**
    ```bash
    npm install
    cp .env.example .env.local
    npx auth secret
    ```
- **Run the dev server:** `npm run dev` (serves on http://localhost:3006).
- **Watch the web component bundle:** `npm run dev:webcomponents`.
- **Production build:** `npm run build` (runs the Vite bundle step before the Next.js build).
- **Vitest component tests:** `npm run test:component` (or `:coverage`, `:ui`).
- **Playwright E2E tests:** `ENV="local" npm run test:e2e` (requires dev server running).
- **Linting & formatting:** `npm run lint` and `npm run format` (Prettier with Tailwind plugin).

## Implementation Notes

- The project uses strict TypeScript settings (`strict: true`). Prefer type-safe APIs and avoid suppressing errors unless absolutely necessary.
- Keep `app/webcomponents.ts` in sync with any new custom elements consumed from React wrappers.
- When adding locales, extend `SupportedLocale` in `app/locale/types.ts` and supply a corresponding bundle file.
- For authenticated flows, rely on helpers in `lib/auth/` (e.g., session retrieval) rather than reimplementing NextAuth wiring.
- Update `CSS_VARIABLES.md` if you add or rename design tokens that should be exposed to consumers.

## Environment Variables

The app expects the following variables in `.env.local`:

- `RAD_URL`
- `AUTH_SECRET`
- `AUTH_KEYCLOAK_ID`
- `AUTH_KEYCLOAK_SECRET`
- `AUTH_KEYCLOAK_ISSUER`
- `BYPASS_AUTH` (set to `true` locally to skip Keycloak)

Restart the dev server after modifying the env file.

## Expectations for Contributions

- Favor small, focused changes and accompany them with tests when feasible.
- Run the relevant `npm run test:*` and `npm run lint` commands before opening a PR.
- Follow the existing file structure and naming conventions to keep parity with the template.
