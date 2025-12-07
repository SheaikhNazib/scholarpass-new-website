"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/actions/auth/business";
import { storage } from "@/lib/utils";
import type { User } from "@/types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: any) => Promise<any>;
  register: (data: any) => Promise<any>;
  logout: () => Promise<void>;
  refetchUser: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      const storedUser = storage.get("user");
      const token = storage.get("authToken");

      if (storedUser && token) {
        // Verify token is still valid by fetching current user
        await auth.getCurrentUser();
      }

      setIsInitialized(true);
    };

    initAuth();
  }, []);

  const value: AuthContextType = {
    user: auth.user,
    isAuthenticated: !!auth.user,
    isLoading: !isInitialized || auth.isLoading,
    login: auth.login,
    register: auth.register,
    logout: auth.logout,
    refetchUser: auth.getCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
