"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_PATHS } from "@/constant";
import type { ApiResponse } from "@/types";
import type {
  Subscription,
  SubscriptionPlan,
  CreateSubscriptionRequest,
  CancelSubscriptionRequest,
  UpdateSubscriptionRequest,
  Invoice,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2312";

async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("authToken")?.value;
}

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
 * Get all subscription plans
 */
export async function getSubscriptionPlansAction(): Promise<
  ApiResponse<SubscriptionPlan[]>
> {
  try {
    const axiosInstance = createAuthAxios();
    const response = await axiosInstance.get<ApiResponse<SubscriptionPlan[]>>(
      API_PATHS.SUBSCRIPTIONS.PLANS
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error:
        error.response?.data?.message || "Failed to fetch subscription plans",
    };
  }
}

/**
 * Get active subscription
 */
export async function getActiveSubscriptionAction(): Promise<
  ApiResponse<Subscription | null>
> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: null,
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<Subscription | null>>(
      API_PATHS.SUBSCRIPTIONS.ACTIVE
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null,
      error:
        error.response?.data?.message || "Failed to fetch active subscription",
    };
  }
}

/**
 * Create new subscription
 */
export async function createSubscriptionAction(
  data: CreateSubscriptionRequest
): Promise<ApiResponse<Subscription>> {
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
    const response = await axiosInstance.post<ApiResponse<Subscription>>(
      API_PATHS.SUBSCRIPTIONS.CREATE,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to create subscription",
    };
  }
}

/**
 * Cancel subscription
 */
export async function cancelSubscriptionAction(
  data: CancelSubscriptionRequest
): Promise<ApiResponse<Subscription>> {
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
    const response = await axiosInstance.post<ApiResponse<Subscription>>(
      API_PATHS.SUBSCRIPTIONS.CANCEL(data.subscriptionId),
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to cancel subscription",
    };
  }
}

/**
 * Update subscription
 */
export async function updateSubscriptionAction(
  data: UpdateSubscriptionRequest
): Promise<ApiResponse<Subscription>> {
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
    const response = await axiosInstance.put<ApiResponse<Subscription>>(
      API_PATHS.SUBSCRIPTIONS.UPDATE(data.subscriptionId),
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to update subscription",
    };
  }
}

/**
 * Get subscription by ID
 */
export async function getSubscriptionByIdAction(
  subscriptionId: string
): Promise<ApiResponse<Subscription>> {
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
    const response = await axiosInstance.get<ApiResponse<Subscription>>(
      API_PATHS.SUBSCRIPTIONS.GET_BY_ID(subscriptionId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch subscription",
    };
  }
}

/**
 * Get subscription invoices
 */
export async function getSubscriptionInvoicesAction(): Promise<
  ApiResponse<Invoice[]>
> {
  try {
    const token = await getAuthToken();
    if (!token) {
      return {
        success: false,
        data: [],
        error: "Not authenticated",
      };
    }

    const axiosInstance = createAuthAxios(token);
    const response = await axiosInstance.get<ApiResponse<Invoice[]>>(
      API_PATHS.SUBSCRIPTIONS.INVOICES
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error:
        error.response?.data?.message || "Failed to fetch subscription invoices",
    };
  }
}
