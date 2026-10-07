---
name: typescript-best-practices
description: >-
  Use this skill when the user asks to review, audit, write, or improve TypeScript code
  for correctness, type safety, idiomatic patterns, and maintainability. Activate when
  the user mentions TypeScript best practices, TS review, strict typing, generics, utility
  types, or asks to make TypeScript better, safer, or cleaner.
---

# TypeScript Best Practices Skill

You are now acting as a **Senior TypeScript Engineer** conducting a thorough review or writing production-grade TypeScript. Follow every section below precisely.

---

## 1. Pre-Review Checklist

Before touching any code, answer these questions by reading the files:

- Is strict:true enabled in tsconfig.json?
- Are there any types used explicitly or implicitly?
- Are there unhandled Promise rejections or missing await?
- Are there magic strings/numbers that should be enums or const objects?
- Are utility types (Partial, Required, Pick, Omit, Record, ReturnType, etc.) underused?

---

## 2. Type Safety Rules (Non-Negotiable)

### NEVER Do This
- Explicit any: function process(data: any)
- Type assertions without guards: const user = response as User
- Non-null assertion without certainty: const value = map.get(key)!
- Implicit returns in typed functions

### ALWAYS Do This
- Use unknown for untrusted data then narrow it with type guards
- Use type guards: function isUser(val: unknown): val is User
- Use nullish coalescing: const name = user?.profile?.name ?? 'Anonymous'
- Always have explicit return types on public functions

---

## 3. Generics and Advanced Types

- Prefer constrained generics over any for reusable utilities
- Use conditional types for powerful transformations
- Use template literal types for string-based APIs
- Use the satisfies operator (TS 4.9+) to validate without widening

---

## 4. Naming and Organization Conventions

- Types/Interfaces: PascalCase (UserProfile, ApiResponse<T>)
- Enums: PascalCase members (Status.Active)
- Constants: SCREAMING_SNAKE_CASE (MAX_RETRIES)
- Generic params: Single uppercase or descriptive (T, TData, TError)
- Type files: Collocated or in types/ folder (user.types.ts)
- Prefer interface for object shapes that may be extended
- Prefer type for unions, intersections, and aliases
- Never use namespace in modern TypeScript modules

---

## 5. Error Handling Pattern

- Define domain errors extending Error class with code, message, and cause
- Use Result pattern: type Result<T, E = AppError> = { ok: true; value: T } | { ok: false; error: E }
- Always catch errors and return typed Result instead of throwing from async functions
- Type the catch block error as unknown and narrow before using

---

## 6. tsconfig.json Must-Have Settings

- strict: true (enables all strict checks)
- noUncheckedIndexedAccess: true (arr[0] is T | undefined)
- exactOptionalPropertyTypes: true (no implicit undefined on optional props)
- noImplicitReturns: true (all code paths must return)
- noFallthroughCasesInSwitch: true (prevent switch fallthrough bugs)
- forceConsistentCasingInFileNames: true
- isolatedModules: true (ensures compatibility with bundlers)

---

## 7. Review Workflow

When asked to REVIEW TypeScript code:

1. Scan the file using view_file - note all any, assertions, and missing types
2. Check tsconfig.json with view_file - flag any missing strict settings
3. Run type-check: npx tsc --noEmit
4. Identify pattern violations from sections 2-5 above
5. Produce a structured report:
   - CRITICAL: breaks type safety
   - WARNING: reduces maintainability
   - SUGGESTION: improvement opportunities
6. Apply fixes only after presenting the report and getting approval

---

## 8. Writing New TypeScript Code

When asked to WRITE TypeScript code:

1. Always add explicit return types on exported functions
2. Always type React component props with an interface, not inline types
3. Use const assertions for immutable data structures
4. Prefer named exports over default exports for better refactoring support
5. Add JSDoc comments on all public APIs

---

## 9. Validation Checklist (Post-Edit)

After making changes, always verify:
1. npx tsc --noEmit (type check passes with zero errors)
2. npx eslint . --ext .ts,.tsx (linter passes)
3. npm test (tests still pass)
