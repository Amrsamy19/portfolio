---
name: nextjs-best-practices
description: >-
  Use this skill when the user asks to review, audit, write, or improve Next.js code
  following the App Router architecture. Activate when the user mentions Next.js best
  practices, server components, client components, data fetching, caching, routing,
  metadata, middleware, performance, or asks to make their Next.js code better or correct.
---

# Next.js Best Practices Skill (App Router)

You are now acting as a **Senior Next.js Engineer** using the App Router (Next.js 13+/14+/15+). Follow every section precisely.

---

## 1. Architecture Decision: Server vs Client Components

This is the MOST CRITICAL distinction in Next.js App Router.

### Server Components (default, no directive needed)
Use when the component:
- Fetches data directly from a database or API
- Accesses server-only resources (env secrets, fs, DB)
- Does NOT need interactivity, event listeners, or hooks
- Renders static or dynamic HTML

### Client Components ('use client' directive required)
Use when the component:
- Uses useState, useEffect, useReducer, or any React hook
- Needs event listeners (onClick, onChange, etc.)
- Uses browser APIs (window, localStorage, etc.)
- Uses third-party client libraries

### The Golden Rule
Push 'use client' as far DOWN the tree as possible. Keep as much as possible as Server Components. A common pattern is to wrap only the interactive leaf node in a Client Component.

---

## 2. File & Folder Structure

app/
  layout.tsx          (Root layout - Server Component)
  page.tsx            (Root page - Server Component by default)
  loading.tsx         (Streaming UI skeleton)
  error.tsx           (Error boundary - must be Client Component)
  not-found.tsx       (404 page)
  (route-group)/      (Grouped routes, not in URL)
  [slug]/             (Dynamic segment)
    page.tsx
  api/
    route.ts          (Route Handler - replaces pages/api/)
components/
  ui/                 (Pure presentational components)
  features/           (Feature-specific components)
lib/
  actions.ts          (Server Actions)
  utils.ts
types/

---

## 3. Data Fetching Patterns

### In Server Components (preferred)
- Fetch directly in the component body - no useEffect needed
- Use async/await directly in the component
- Colocate data fetching with the component that needs it
- Use parallel fetching with Promise.all when possible

### Caching Strategy
- fetch() is automatically memoized per request in the same render tree
- Use cache: 'force-cache' for static data (CDN-cacheable)
- Use cache: 'no-store' for always-fresh data
- Use next: { revalidate: 3600 } for ISR (revalidate every hour)
- Use unstable_cache from next/cache for non-fetch data sources (DB queries)

### Server Actions
- Define with 'use server' directive
- Use for form submissions and mutations
- Always validate input with Zod
- Return typed results, never throw to the client
- Revalidate cache after mutations using revalidatePath or revalidateTag

---

## 4. Metadata & SEO

Always implement metadata on every page:
- Export a static metadata object OR a generateMetadata async function
- Every page must have title, description, and openGraph
- Use dynamic metadata for dynamic routes

Template pattern for metadata:
- Root layout: title template like "%s | Site Name"
- Individual pages: title that fills the template
- Always include openGraph with title, description, url, and images
- Always include twitter card metadata

---

## 5. Performance Rules

### Images
- ALWAYS use next/image instead of <img>
- Always provide width and height or use fill prop
- Use priority prop on above-the-fold images
- Use sizes prop for responsive images

### Fonts
- ALWAYS use next/font (google or local) - never load from external CDN in CSS
- Define fonts in layout.tsx and apply as className

### Scripts
- ALWAYS use next/script instead of <script>
- Use strategy='lazyOnload' for non-critical scripts
- Use strategy='afterInteractive' for analytics

### Bundles
- Use dynamic() from next/dynamic for large Client Components
- Use ssr: false for browser-only libraries
- Analyze bundle with @next/bundle-analyzer

---

## 6. Route Handlers (API Routes)

- File must be named route.ts (not index.ts)
- Export named HTTP method functions: GET, POST, PUT, DELETE, PATCH
- Always type the Request as NextRequest
- Always return NextResponse with proper status codes
- Validate request body with Zod before processing
- Never expose sensitive data; always sanitize responses

---

## 7. Middleware

- File must be at the root level: middleware.ts
- Use the config matcher to scope middleware to specific routes
- Keep middleware lightweight - it runs on every request
- Do NOT do heavy computation or DB calls in middleware
- Use for: auth checks, redirects, rewrites, A/B testing, locale detection

---

## 8. Environment Variables

- NEXT_PUBLIC_ prefix makes variables available to the browser - use sparingly
- Never expose secret keys with NEXT_PUBLIC_ prefix
- Always access server-only env vars in Server Components or Route Handlers
- Use a validated env schema (with Zod + @t3-oss/env-nextjs or similar)

---

## 9. Error Handling

- error.tsx files catch errors in their route segment and children
- error.tsx MUST be a Client Component ('use client')
- Always implement global-error.tsx at the app root for unhandled errors
- Use notFound() from next/navigation to trigger not-found.tsx
- Use redirect() from next/navigation for programmatic redirects

---

## 10. Review Workflow

When asked to REVIEW Next.js code:

1. Identify all components - determine if each should be Server or Client
2. Check data fetching - is it happening in Server Components? Is caching correct?
3. Check metadata - does every page export metadata or generateMetadata?
4. Check image/font/script usage - are next/image, next/font, next/script used?
5. Check Server Actions - are inputs validated? Are caches revalidated?
6. Run build to catch errors: npm run build
7. Produce a structured report:
   - CRITICAL: wrong component type, data exposure, missing validation
   - WARNING: missing caching, missing metadata, performance issues
   - SUGGESTION: refactoring for better colocation or cleaner patterns

---

## 11. Writing New Next.js Code

When asked to WRITE Next.js code:

1. Default to Server Component - add 'use client' only when truly needed
2. Type all props with TypeScript interfaces
3. Handle all loading and error states with loading.tsx and error.tsx
4. Always implement metadata
5. Use Server Actions for all form submissions
6. Validate ALL user input with Zod
7. Never put secrets in Client Components

---

## 12. Validation Checklist (Post-Edit)

After making changes, always verify:
1. npm run build (catches type errors, missing exports, and build failures)
2. Check for any 'use client' components that could be Server Components
3. Verify all new pages have metadata exported
4. Confirm no secrets are exposed via NEXT_PUBLIC_ or in client-side code
