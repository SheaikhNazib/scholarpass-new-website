"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_PATHS } from "@/constant";
import type { ApiResponse } from "@/types";
import type { Invoice } from "../subscriptions/types";
import type {
  Payment,
  CreatePaymentIntentRequest,
  PaymentIntentResponse,
  ConfirmPaymentRequest,
  RefundRequest,
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
 * Create payment intent
 */
export async function createPaymentIntentAction(
  data: CreatePaymentIntentRequest
): Promise<ApiResponse<PaymentIntentResponse>> {
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
    const response = await axiosInstance.post<
      ApiResponse<PaymentIntentResponse>
    >(API_PATHS.PAYMENTS.CREATE_INTENT, data);

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error:
        error.response?.data?.message || "Failed to create payment intent",
    };
  }
}

/**
 * Confirm payment
 */
export async function confirmPaymentAction(
  data: ConfirmPaymentRequest
): Promise<ApiResponse<Payment>> {
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
    const response = await axiosInstance.post<ApiResponse<Payment>>(
      API_PATHS.PAYMENTS.CONFIRM,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to confirm payment",
    };
  }
}

/**
 * Get payment by ID
 */
export async function getPaymentByIdAction(
  paymentId: string
): Promise<ApiResponse<Payment>> {
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
    const response = await axiosInstance.get<ApiResponse<Payment>>(
      API_PATHS.PAYMENTS.GET_BY_ID(paymentId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to fetch payment",
    };
  }
}

/**
 * Get payment history
 */
export async function getPaymentHistoryAction(): Promise<
  ApiResponse<Payment[]>
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
    const response = await axiosInstance.get<ApiResponse<Payment[]>>(
      API_PATHS.PAYMENTS.HISTORY
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error: error.response?.data?.message || "Failed to fetch payment history",
    };
  }
}

/**
 * Request refund
 */
export async function requestRefundAction(
  data: RefundRequest
): Promise<ApiResponse<Payment>> {
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
    const response = await axiosInstance.post<ApiResponse<Payment>>(
      API_PATHS.PAYMENTS.REFUND,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to request refund",
    };
  }
}

/**
 * Get payment methods
 */
export async function getPaymentMethodsAction(): Promise<ApiResponse<any[]>> {
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
    const response = await axiosInstance.get<ApiResponse<any[]>>(
      API_PATHS.PAYMENTS.METHODS
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: [],
      error:
        error.response?.data?.message || "Failed to fetch payment methods",
    };
  }
}

/**
 * Add payment method
 */
export async function addPaymentMethodAction(data: {
  paymentMethodId: string;
}): Promise<ApiResponse<any>> {
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
    const response = await axiosInstance.post<ApiResponse<any>>(
      API_PATHS.PAYMENTS.ADD_METHOD,
      data
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to add payment method",
    };
  }
}

/**
 * Remove payment method
 */
export async function removePaymentMethodAction(
  methodId: string
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
    const response = await axiosInstance.delete<ApiResponse<void>>(
      API_PATHS.PAYMENTS.REMOVE_METHOD(methodId)
    );

    return response.data;
  } catch (error: any) {
    return {
      success: false,
      data: null as any,
      error: error.response?.data?.message || "Failed to remove payment method",
    };
  }
}
