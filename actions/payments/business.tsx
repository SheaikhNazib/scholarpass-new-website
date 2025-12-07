"use client";

import { useTransition } from "react";
import { usePaymentStore } from "./store";
import {
  createPaymentIntentAction,
  confirmPaymentAction,
  getPaymentByIdAction,
  getPaymentHistoryAction,
  requestRefundAction,
  getPaymentMethodsAction,
  addPaymentMethodAction,
  removePaymentMethodAction,
} from "./server-actions";
import type {
  CreatePaymentIntentRequest,
  ConfirmPaymentRequest,
  RefundRequest,
} from "./types";

/**
 * Hook for payment operations
 */
export function usePayment() {
  const store = usePaymentStore();
  const [isPending, startTransition] = useTransition();

  const createPaymentIntent = async (data: CreatePaymentIntentRequest) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await createPaymentIntentAction(data);

          if (result.success) {
            store.setPaymentIntent(result.data);
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Failed to create payment intent");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Failed to create payment intent";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  const confirmPayment = async (data: ConfirmPaymentRequest) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await confirmPaymentAction(data);

          if (result.success) {
            store.setPayment(result.data);
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Failed to confirm payment");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Failed to confirm payment";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  const getPaymentHistory = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getPaymentHistoryAction();

        if (result.success) {
          store.setPayments(result.data);
        } else {
          store.setError(result.error || "Failed to fetch payment history");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  const requestRefund = async (data: RefundRequest) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await requestRefundAction(data);
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  return {
    payment: store.payment,
    payments: store.payments,
    paymentIntent: store.paymentIntent,
    isLoading: store.isLoading || isPending,
    error: store.error,
    createPaymentIntent,
    confirmPayment,
    getPaymentHistory,
    requestRefund,
  };
}

/**
 * Hook for payment methods
 */
export function usePaymentMethods() {
  const store = usePaymentStore();
  const [isPending, startTransition] = useTransition();

  const fetchPaymentMethods = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getPaymentMethodsAction();

        if (result.success) {
          store.setPaymentMethods(result.data);
        } else {
          store.setError(result.error || "Failed to fetch payment methods");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  const addMethod = async (paymentMethodId: string) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await addPaymentMethodAction({ paymentMethodId });
          
          if (result.success) {
            store.setPaymentMethods([...store.paymentMethods, result.data]);
          }
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  const removeMethod = async (methodId: string) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await removePaymentMethodAction(methodId);
          
          if (result.success) {
            store.setPaymentMethods(
              store.paymentMethods.filter((m) => m.id !== methodId)
            );
          }
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  return {
    paymentMethods: store.paymentMethods,
    isLoading: store.isLoading || isPending,
    error: store.error,
    fetchPaymentMethods,
    addMethod,
    removeMethod,
  };
}
