// Payment and transaction types

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: PaymentMethod;
  description?: string;
  metadata?: Record<string, any>;
  stripePaymentIntentId?: string;
  receiptUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export enum PaymentStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
  CANCELED = "canceled",
  REFUNDED = "refunded",
}

export enum PaymentMethod {
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  PAYPAL = "paypal",
  STRIPE = "stripe",
  BANK_TRANSFER = "bank_transfer",
}

export interface CreatePaymentIntentRequest {
  amount: number;
  currency?: string;
  courseId?: string;
  subscriptionId?: string;
  metadata?: Record<string, any>;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

export interface ConfirmPaymentRequest {
  paymentIntentId: string;
  paymentMethodId: string;
}

export interface RefundRequest {
  paymentId: string;
  amount?: number;
  reason?: string;
}

export interface PaymentState {
  payment: Payment | null;
  payments: Payment[];
  paymentIntent: PaymentIntentResponse | null;
  paymentMethods: any[];
  isLoading: boolean;
  error: string | null;
}
