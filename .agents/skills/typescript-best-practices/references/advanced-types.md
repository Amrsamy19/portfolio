# Advanced TypeScript Patterns Reference

## Branded Types (Nominal Typing)

Use branded types to prevent mixing semantically different primitives:

declare const __brand: unique symbol;
type Brand<T, B> = T & { [__brand]: B };
type UserId = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;

function createUserId(id: string): UserId { return id as UserId; }

// Now TypeScript prevents: acceptUserId(productId) - compile error!

---

## Builder Pattern with Types

type Builder<T> = {
  [K in keyof T]-?: (value: T[K]) => Builder<T>;
} & { build(): T };

---

## Discriminated Unions (State Machines)

type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function renderState<T>(state: RequestState<T>) {
  switch (state.status) {
    case 'idle': return 'Waiting...';
    case 'loading': return 'Loading...';
    case 'success': return state.data; // TypeScript knows data exists here
    case 'error': return state.error.message; // TypeScript knows error exists here
  }
}

---

## Mapped Types with Re-mapping

type Getters<T> = {
  [K in keyof T as get]: () => T[K];
};

type User = { name: string; age: number };
type UserGetters = Getters<User>;
// Result: { getName: () => string; getAge: () => number }

---

## Recursive Types

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

---

## Infer Keyword

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type UnpackArray<T> = T extends Array<infer U> ? U : T;
type FirstArg<T extends (...args: any) => any> = T extends (first: infer F, ...args: any) => any ? F : never;

---

## Strict Event Emitter Pattern

type EventMap = {
  userCreated: { userId: string; email: string };
  orderPlaced: { orderId: string; total: number };
};

class TypedEventEmitter<T extends Record<string, unknown>> {
  on<K extends keyof T>(event: K, handler: (data: T[K]) => void): void { ... }
  emit<K extends keyof T>(event: K, data: T[K]): void { ... }
}

const emitter = new TypedEventEmitter<EventMap>();
emitter.emit('userCreated', { userId: '1', email: 'a@b.com' }); // fully typed!
