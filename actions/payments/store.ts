import { create } from "zustand";
import { PaymentState, Payment, PaymentIntentResponse } from "./types";

interface PaymentStore extends PaymentState {
  setPayment: (payment: Payment | null) => void;
  setPayments: (payments: Payment[]) => void;
  setPaymentIntent: (intent: PaymentIntentResponse | null) => void;
  setPaymentMethods: (methods: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: PaymentState = {
  payment: null,
  payments: [],
  paymentIntent: null,
  paymentMethods: [],
  isLoading: false,
  error: null,
};

export const usePaymentStore = create<PaymentStore>((set) => ({
  ...initialState,
  
  setPayment: (payment) => set({ payment, error: null }),
  
  setPayments: (payments) => set({ payments, error: null }),
  
  setPaymentIntent: (paymentIntent) => set({ paymentIntent, error: null }),
  
  setPaymentMethods: (paymentMethods) => set({ paymentMethods, error: null }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error, isLoading: false }),
  
  reset: () => set(initialState),
}));
