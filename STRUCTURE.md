# Project Structure Guide

This project follows the **tutorsplan crm_admin pattern** with a clear modular architecture.

## Actions Folder Structure

Each feature module in the `actions/` folder contains exactly **4 files**:

### File Structure Pattern

```
actions/
  ├── [feature-name]/
  │   ├── types.ts           # Type definitions
  │   ├── store.ts           # Zustand store
  │   ├── server-actions.ts  # Server Actions ("use server")
  │   └── business.tsx       # Client hooks ("use client")
```

### Example: Auth Module

```
actions/auth/
  ├── types.ts              # LoginCredentials, AuthResponse, AuthState, etc.
  ├── store.ts              # useAuthStore with Zustand
  ├── server-actions.ts     # loginAction, registerAction, etc.
  └── business.tsx          # useAuth() hook
```

## How It Works

### 1. Types (types.ts)
Define all TypeScript interfaces and types for the feature.

```typescript
// actions/auth/types.ts
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
```

### 2. Store (store.ts)
Create a Zustand store for state management.

```typescript
// actions/auth/store.ts
import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  // ...
}));
```

### 3. Server Actions (server-actions.ts)
Server-side functions that call the API (marked with `"use server"`).

```typescript
// actions/auth/server-actions.ts
"use server";

export async function loginAction(credentials: LoginCredentials) {
  // Server-side API call
  // Handles cookies, tokens securely
  const response = await axios.post(API_PATHS.AUTH.LOGIN, credentials);
  return response.data;
}
```

### 4. Business Logic (business.tsx)
Client-side hooks that use the store and server actions (marked with `"use client"`).

```typescript
// actions/auth/business.tsx
"use client";

export function useAuth() {
  const store = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const login = async (credentials) => {
    store.setLoading(true);
    
    startTransition(async () => {
      const result = await loginAction(credentials);
      if (result.success) {
        store.setUser(result.data.user);
      }
    });
  };

  return { login, user: store.user, isLoading: store.isLoading };
}
```

## Usage in Components

```typescript
"use client";

import { useAuth } from "@/actions/auth/business";

export default function LoginPage() {
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {error && <p className="error">{error}</p>}
      <button disabled={isLoading}>Login</button>
    </form>
  );
}
```

## Current Modules

- ✅ **auth** - Authentication (login, register, logout, etc.)
- ✅ **courses** - Course management (fetch, enroll, progress, etc.)
- ✅ **payments** - Payment processing (Stripe integration)
- ✅ **subscriptions** - Subscription management (plans, billing, etc.)

## Adding a New Feature Module

1. Create a new folder in `actions/`:
   ```bash
   mkdir actions/new-feature
   ```

2. Create the 4 required files:
   ```bash
   touch actions/new-feature/types.ts
   touch actions/new-feature/store.ts
   touch actions/new-feature/server-actions.ts
   touch actions/new-feature/business.tsx
   ```

3. Define types in `types.ts`
4. Create Zustand store in `store.ts`
5. Add server actions in `server-actions.ts`
6. Create client hooks in `business.tsx`

## Best Practices

1. **Always use 4 files** - Keep the pattern consistent
2. **Types first** - Define types before implementation
3. **Server actions are secure** - API calls happen server-side
4. **Business hooks are reusable** - Use them across components
5. **Store manages state** - Centralize state management with Zustand
6. **Use transitions** - Leverage React's `useTransition` for better UX

## File Naming Convention

- `types.ts` - Always plural (not `type.ts`)
- `store.ts` - Always singular
- `server-actions.ts` - Always plural with hyphen
- `business.tsx` - Always singular, `.tsx` extension

## Key Differences from Other Patterns

❌ **NOT like this:**
```
actions/auth/index.ts
business/auth/hooks.tsx
```

✅ **Correct pattern:**
```
actions/auth/types.ts
actions/auth/store.ts
actions/auth/server-actions.ts
actions/auth/business.tsx
```

All logic stays within each feature module - no separate `business/` folder!
