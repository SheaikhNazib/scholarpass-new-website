"use client";

import { useTransition } from "react";
import { useSubscriptionStore } from "./store";
import {
  getSubscriptionPlansAction,
  getActiveSubscriptionAction,
  createSubscriptionAction,
  cancelSubscriptionAction,
  updateSubscriptionAction,
  getSubscriptionByIdAction,
  getSubscriptionInvoicesAction,
} from "./server-actions";
import type {
  CreateSubscriptionRequest,
  CancelSubscriptionRequest,
  UpdateSubscriptionRequest,
} from "./types";

/**
 * Hook for subscription operations
 */
export function useSubscription() {
  const store = useSubscriptionStore();
  const [isPending, startTransition] = useTransition();

  const fetchPlans = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getSubscriptionPlansAction();

        if (result.success) {
          store.setPlans(result.data);
        } else {
          store.setError(result.error || "Failed to fetch plans");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  const fetchActiveSubscription = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getActiveSubscriptionAction();

        if (result.success) {
          store.setSubscription(result.data);
        } else {
          store.setError(result.error || "Failed to fetch subscription");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  const createSubscription = async (data: CreateSubscriptionRequest) => {
    store.setLoading(true);
    store.setError(null);

    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await createSubscriptionAction(data);

          if (result.success) {
            store.setSubscription(result.data);
            resolve({ success: true, data: result.data });
          } else {
            store.setError(result.error || "Failed to create subscription");
            resolve({ success: false, error: result.error });
          }
        } catch (error: any) {
          const errorMessage = error.message || "Failed to create subscription";
          store.setError(errorMessage);
          resolve({ success: false, error: errorMessage });
        }
      });
    });
  };

  const cancelSubscription = async (data: CancelSubscriptionRequest) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await cancelSubscriptionAction(data);

          if (result.success) {
            store.setSubscription(result.data);
          }
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  const updateSubscription = async (data: UpdateSubscriptionRequest) => {
    return new Promise((resolve) => {
      startTransition(async () => {
        try {
          const result = await updateSubscriptionAction(data);

          if (result.success) {
            store.setSubscription(result.data);
          }
          resolve(result);
        } catch (error: any) {
          resolve({ success: false, error: error.message });
        }
      });
    });
  };

  const fetchInvoices = async () => {
    store.setLoading(true);

    startTransition(async () => {
      try {
        const result = await getSubscriptionInvoicesAction();

        if (result.success) {
          store.setInvoices(result.data);
        } else {
          store.setError(result.error || "Failed to fetch invoices");
        }
      } catch (error: any) {
        store.setError(error.message);
      }
    });
  };

  return {
    subscription: store.subscription,
    plans: store.plans,
    invoices: store.invoices,
    isLoading: store.isLoading || isPending,
    error: store.error,
    fetchPlans,
    fetchActiveSubscription,
    createSubscription,
    cancelSubscription,
    updateSubscription,
    fetchInvoices,
    refetch: fetchActiveSubscription,
  };
}
