import { create } from "zustand";
import { SubscriptionState, Subscription, SubscriptionPlan, Invoice } from "./types";

interface SubscriptionStore extends SubscriptionState {
  setSubscription: (subscription: Subscription | null) => void;
  setPlans: (plans: SubscriptionPlan[]) => void;
  setInvoices: (invoices: Invoice[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: SubscriptionState = {
  subscription: null,
  plans: [],
  invoices: [],
  isLoading: false,
  error: null,
};

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  ...initialState,
  
  setSubscription: (subscription) => set({ subscription, error: null }),
  
  setPlans: (plans) => set({ plans, error: null }),
  
  setInvoices: (invoices) => set({ invoices, error: null }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error, isLoading: false }),
  
  reset: () => set(initialState),
}));
