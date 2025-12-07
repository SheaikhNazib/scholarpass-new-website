"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/utils";
import { useAuthStore } from "./store";
import {
  loginAction,
  registerAction,
  logoutAction,
  getCurrentUserAction,
  forgotPasswordAction,
  resetPasswordAction,
  changePasswordAction,
  verifyEmailAction,
  resendVerificationAction,
} from "./server-actions";
import type {
  LoginCredentials,
  RegisterData,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  VerifyEmailRequest,
} from "./types";

/**
 * Hook for authentication operations
 */
export function useAuth() {
  const store = useAuthStore();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  /**
   * Login user
   */
  const login = async (credentials: LoginCredentials) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await loginAction(credentials);

          if (result.success) {
            store.setUser(result.data.user);
            storage.set("user", result.data.user);
            storage.set("authToken", result.data.token);
            router.push("/dashboard");
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Login failed");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Login failed";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  /**
   * Register new user
   */
  const register = async (data: RegisterData) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await registerAction(data);

          if (result.success) {
            store.setUser(result.data.user);
            storage.set("user", result.data.user);
            storage.set("authToken", result.data.token);
            router.push("/dashboard");
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Registration failed");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Registration failed";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  /**
   * Logout user
   */
  const logout = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        await logoutAction();
        store.reset();
        storage.remove("user");
        storage.remove("authToken");
        storage.remove("refreshToken");
        router.push("/login");
      } catch (error: any) {
        store.setError(error.message || "Logout failed");
      }
    });
  };

  /**
   * Get current user
   */
  const getCurrentUser = async () => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await getCurrentUserAction();

      if (result.success) {
        store.setUser(result.data);
        storage.set("user", result.data);
        return { success: true, data: result.data };
      } else {
        store.setError(result.error || "Failed to get user");
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      const errorMessage = error.message || "Failed to get user";
      store.setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  /**
   * Forgot password
   */
  const forgotPassword = async (data: ForgotPasswordRequest) => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await forgotPasswordAction(data);
      store.setLoading(false);
      return result;
    } catch (error: any) {
      store.setError(error.message || "Failed to send reset email");
      return { success: false, error: error.message };
    }
  };

  /**
   * Reset password
   */
  const resetPassword = async (data: ResetPasswordRequest) => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await resetPasswordAction(data);
      store.setLoading(false);
      return result;
    } catch (error: any) {
      store.setError(error.message || "Failed to reset password");
      return { success: false, error: error.message };
    }
  };

  /**
   * Change password
   */
  const changePassword = async (data: ChangePasswordRequest) => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await changePasswordAction(data);
      store.setLoading(false);
      return result;
    } catch (error: any) {
      store.setError(error.message || "Failed to change password");
      return { success: false, error: error.message };
    }
  };

  /**
   * Verify email
   */
  const verifyEmail = async (data: VerifyEmailRequest) => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await verifyEmailAction(data);
      store.setLoading(false);
      return result;
    } catch (error: any) {
      store.setError(error.message || "Failed to verify email");
      return { success: false, error: error.message };
    }
  };

  /**
   * Resend verification email
   */
  const resendVerification = async () => {
    store.setLoading(true);
    store.setError(null);

    try {
      const result = await resendVerificationAction();
      store.setLoading(false);
      return result;
    } catch (error: any) {
      store.setError(error.message || "Failed to resend verification");
      return { success: false, error: error.message };
    }
  };

  return {
    user: store.user,
    isLoading: store.isLoading || isPending,
    error: store.error,
    login,
    register,
    logout,
    getCurrentUser,
    forgotPassword,
    resetPassword,
    changePassword,
    verifyEmail,
    resendVerification,
  };
}
