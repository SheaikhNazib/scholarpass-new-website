"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_PATHS } from "@/constant";
import type { ApiResponse, User } from "@/types";
import type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  VerifyEmailRequest,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2312";

// Helper to get auth token from cookies
async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("authToken")?.value;
}

// Helper to create axios instance with auth
function createAuthAxios(token?: string) {
  return axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

/**
 * Login user with credentials
 */
export async function loginAction(
  credentials: LoginCredentials
): Promise<ApiResponse<AuthResponse>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_PATHS.AUTH.LOGIN,
      credentials
    );

    // Store token in cookies
    if (response.data.success && response.data.data.token) {
      const cookieStore = await cookies();
      cookieStore.set("authToken", response.data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      if (response.data.data.refreshToken) {
        cookieStore.set("refreshToken", response.data.data.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });
      }
    }

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Login failed",
    };
  }
}

/**
 * Register new user
 */
export async function registerAction(
  data: RegisterData
): Promise<ApiResponse<AuthResponse>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_PATHS.AUTH.REGISTER,
      data
    );

    // Store token in cookies if registration includes auto-login
    if (response.data.success && response.data.data.token) {
      const cookieStore = await cookies();
      cookieStore.set("authToken", response.data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Registration failed",
    };
  }
}

/**
 * Logout user
 */
export async function logoutAction(): Promise<ApiResponse<void>> {
  try {
    const token = await getAuthToken();
    const axiosInstance = createAuthAxios(token);

    await axiosInstance.post(API_PATHS.AUTH.LOGOUT);

    // Clear cookies
    const cookieStore = await cookies();
    cookieStore.delete("authToken");
    cookieStore.delete("refreshToken");

    return {
      success: true,
      data: undefined as any,
      message: "Logged out successfully",
    };
  } catch (error: any) {
    // Clear cookies even if API call fails
    const cookieStore = await cookies();
    cookieStore.delete("authToken");
    cookieStore.delete("refreshToken");

    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Logout failed",
    };
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUserAction(): Promise<ApiResponse<User>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<User>>(
      API_PATHS.AUTH.ME
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to get user",
    };
  }
}

/**
 * Forgot password - Request reset
 */
export async function forgotPasswordAction(
  data: ForgotPasswordRequest
): Promise<ApiResponse<void>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.AUTH.FORGOT_PASSWORD,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to send reset email",
    };
  }
}

/**
 * Reset password with token
 */
export async function resetPasswordAction(
  data: ResetPasswordRequest
): Promise<ApiResponse<void>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.AUTH.RESET_PASSWORD,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to reset password",
    };
  }
}

/**
 * Change password for authenticated user
 */
export async function changePasswordAction(
  data: ChangePasswordRequest
): Promise<ApiResponse<void>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.AUTH.CHANGE_PASSWORD,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to change password",
    };
  }
}

/**
 * Verify email with token
 */
export async function verifyEmailAction(
  data: VerifyEmailRequest
): Promise<ApiResponse<void>> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.AUTH.VERIFY_EMAIL,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to verify email",
    };
  }
}

/**
 * Resend verification email
 */
export async function resendVerificationAction(): Promise<ApiResponse<void>> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null as any,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.post<ApiResponse<void>>(
      API_PATHS.AUTH.RESEND_VERIFICATION
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to resend verification",
    };
  }
}
