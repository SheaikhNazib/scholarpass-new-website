# ScholarPass New Website

A modern Next.js application with optimized server-side architecture following the tutorsplan pattern. This project provides a secure and efficient way to handle API calls while preventing API endpoint exposure to the client.

## 🏗️ Project Architecture

This project follows a structured architecture pattern with clear separation of concerns:

```
sp-new/
├── actions/              # Feature modules (following tutorsplan pattern)
│   ├── auth/            
│   │   ├── types.ts           # Type definitions
│   │   ├── store.ts           # Zustand store
│   │   ├── server-actions.ts  # Server-side API calls
│   │   └── business.tsx       # Client-side hooks
│   ├── courses/         
│   │   ├── types.ts
│   │   ├── store.ts
│   │   ├── server-actions.ts
│   │   └── business.tsx
│   ├── payments/        
│   │   ├── types.ts
│   │   ├── store.ts
│   │   ├── server-actions.ts
│   │   └── business.tsx
│   └── subscriptions/   
│       ├── types.ts
│       ├── store.ts
│       ├── server-actions.ts
│       └── business.tsx
├── types/              # Global shared type definitions
│   ├── auth.types.ts
│   ├── course.types.ts
│   ├── payment.types.ts
│   ├── subscription.types.ts
│   ├── content.types.ts
│   ├── scholarship.types.ts
│   └── common.types.ts
├── constant/           # Constants and configuration
│   └── api-path.ts     # API endpoint paths
├── lib/                # Utility functions and configurations
│   ├── axios.ts        # Axios configuration
│   └── utils.ts        # Helper functions
├── contexts/           # React contexts
│   ├── AuthContext.tsx
│   └── QueryProvider.tsx
├── app/                # Next.js app directory
├── components/         # React components
└── hooks/             # Custom React hooks
```

## 🔑 Key Features

- **Server Actions**: All API calls are handled server-side using Next.js Server Actions
- **Type Safety**: Comprehensive TypeScript types for all entities
- **Secure**: API endpoints are not exposed to the client
- **Optimized**: Better performance with server-side data fetching
- **Clean Architecture**: Clear separation between server actions and business logic
- **Authentication**: Built-in auth system with JWT token management
- **State Management**: React hooks with Zustand and React Query support

## 📁 Architecture Layers

### 1. Actions (`/actions`)

Each feature folder contains 4 files following the tutorsplan pattern:

- **types.ts** - Type definitions specific to the feature
- **store.ts** - Zustand store for state management
- **server-actions.ts** - Server-side API calls (marked with `"use server"`)
- **business.tsx** - Client-side hooks that consume server actions

### 2. Types (`/types`)
Global shared TypeScript type definitions

### 3. Constants (`/constant`)
API endpoint paths using `API_PATHS` object

### 4. Lib (`/lib`)
Utility functions and configurations (axios, utils, etc.)

### 5. Contexts (`/contexts`)
React context providers for global state

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API URL and keys
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Usage Examples

### Authentication
```typescript
import { useAuth } from "@/actions/auth/business";

function LoginPage() {
  const { login, isLoading } = useAuth();
  
  const handleLogin = async (credentials) => {
    await login(credentials);
  };
}
```

### Courses
```typescript
import { useCourses } from "@/actions/courses/business";

function CoursesPage() {
  const { courses, fetchCourses } = useCourses();
  
  useEffect(() => {
    fetchCourses({ page: 1, limit: 10 });
  }, []);
}
```

## 📚 Learn More

- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
