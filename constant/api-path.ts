// API endpoint paths organized by feature

export const API_PATHS = {
  // App endpoints
  APP: {
    BASE: "/",
    DEBUG_SENTRY: "/debug-sentry",
  },

  // Authentication endpoints
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/me",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
    VERIFY_EMAIL: "/auth/verify-email",
    RESEND_VERIFICATION: "/auth/resend-verification",
    GUARDIAN_INVITE: "/guardian/invite",
  },

  // Course endpoints
  COURSES: {
    CREATE: "/courses",
    GET_ALL: "/courses",
    LIST: "/courses/list",
    COUNT: "/courses/count",
    FEATURED_BUNDLE: "/courses/featured-bundle",
    CAREER_COURSES: "/courses/career-courses",
    POPULAR: "/courses/popular",
    MY_COURSES: "/courses/my-courses",
    GET_BY_ID: (id: string) => `/courses/${id}`,
    UPDATE: (id: string) => `/courses/${id}`,
    DELETE: (id: string) => `/courses/${id}`,
    STATS: (id: string) => `/courses/${id}/stats`,
    ENROLL: (id: string) => `/courses/${id}/enroll`,
    PROGRESS: (id: string) => `/courses/${id}/progress`,
    CURRICULUM: (id: string) => `/courses/${id}/curriculum`,
    REVIEWS: (id: string) => `/courses/${id}/reviews`,
  },

  // Lesson endpoints
  LESSONS: {
    GET_ALL: "/lessons",
    GET_BY_ID: (id: string) => `/lessons/${id}`,
    COMPLETE: (id: string) => `/lessons/${id}/complete`,
    RESOURCES: (id: string) => `/lessons/${id}/resources`,
  },

  // Payment endpoints
  PAYMENTS: {
    CREATE_INTENT: "/payments/create-intent",
    CONFIRM: "/payments/confirm",
    GET_BY_ID: (id: string) => `/payments/${id}`,
    HISTORY: "/payments/history",
    REFUND: "/payments/refund",
    METHODS: "/payments/methods",
    ADD_METHOD: "/payments/methods/add",
    REMOVE_METHOD: (id: string) => `/payments/methods/${id}`,
  },

  // Subscription endpoints
  SUBSCRIPTIONS: {
    PLANS: "/subscriptions/plans",
    ACTIVE: "/subscriptions/active",
    CREATE: "/subscriptions/create",
    CANCEL: (id: string) => `/subscriptions/${id}/cancel`,
    UPDATE: (id: string) => `/subscriptions/${id}/update`,
    GET_BY_ID: (id: string) => `/subscriptions/${id}`,
    INVOICES: "/subscriptions/invoices",
  },

  // Stripe Payment & Enrollment endpoints
  STRIPE: {
    CREATE_PAYMENT_INTENT: "/stripe/create-payment-intent",
    CREATE_SUBSCRIPTION: "/stripe/create-subscription",
    CREATE_USER_SUBSCRIPTION: "/stripe/create-user-subscription",
    PAYMENT_HISTORY: "/stripe/payment-history",
    SUBSCRIPTION_HISTORY: "/stripe/subscription-history",
    SUBSCRIPTION_HISTORY_STUDENT: (studentId: string) => `/stripe/subscription-history-student/${studentId}`,
    INVOICES: "/stripe/invoices",
    UPCOMING_INVOICE: (subscriptionId: string) => `/stripe/upcoming-invoice/${subscriptionId}`,
    WEBHOOK: "/stripe/webhook",
    CUSTOMER: "/stripe/customer",
    ACTIVE_SUBSCRIPTION: "/stripe/active-subscription",
    CANCEL_SUBSCRIPTION: (subscriptionId: string) => `/stripe/cancel-subscription/${subscriptionId}`,
    RESUME_SUBSCRIPTION: (subscriptionId: string) => `/stripe/resume-subscription/${subscriptionId}`,
    PAYMENT: (paymentId: string) => `/stripe/payment/${paymentId}`,
    VERIFY_COURSE_ENROLLMENT: "/stripe/verify-course-enrollment",
    MANUAL_PROCESS_PAYMENT: "/stripe/manual-process-payment",
    SUBSCRIPTION: (subscriptionId: string) => `/stripe/subscription/${subscriptionId}`,
    CHECK_ENROLLMENT: "/stripe/check-enrollment",
    CHECK_ANY_ENROLLMENT: "/stripe/check-any-enrollment",
    DIRECT_ENROLL: "/stripe/direct-enroll",
    GUARDIAN_ENROLL: "/stripe/guardian-enroll",
    COURSE_ENROLLMENT: "/stripe/course-enrollment",
  },

  // Store endpoints
  STORES: {
    CREATE: "/stores",
    GET_ALL: "/stores",
    COUNT: "/stores/count",
    GET_BY_ID: (id: string) => `/stores/${id}`,
    UPDATE: (id: string) => `/stores/${id}`,
    DELETE: (id: string) => `/stores/${id}`,
  },

  // Course Category endpoints
  COURSE_CATEGORIES: {
    CREATE: "/course-categories",
    GET_ALL: "/course-categories",
    COUNT: "/course-categories/count",
    GET_BY_ID: (id: string) => `/course-categories/${id}`,
    UPDATE: (id: string) => `/course-categories/${id}`,
    DELETE: (id: string) => `/course-categories/${id}`,
  },

  // Tutor endpoints
  TUTORS: {
    CREATE: "/tutors",
    GET_ALL: "/tutors",
    COUNT: "/tutors/count",
    MY: "/tutors/my",
    ADD_BY_SUPERADMIN: "/tutors/add-by-superadmin",
    GET_BY_ID: (id: string) => `/tutors/${id}`,
    UPDATE: (id: string) => `/tutors/${id}`,
    DELETE: (id: string) => `/tutors/${id}`,
  },

  // Institute endpoints
  INSTITUTES: {
    CREATE: "/institutes",
    GET_ALL: "/institutes",
    COUNT: "/institutes/count",
    PUBLIC: "/institutes/public",
    PUBLIC_COUNT: "/institutes/public/count",
    CREATE_USER: "/institutes/create-user",
    GET_BY_ID: (id: string) => `/institutes/${id}`,
    UPDATE: (id: string) => `/institutes/${id}`,
    DELETE: (id: string) => `/institutes/${id}`,
    FULL: (id: string) => `/institutes/${id}/full`,
    PUBLIC_BY_ID: (id: string) => `/institutes/public/${id}`,
    PUBLIC_FULL: (id: string) => `/institutes/public/${id}/full`,
    VERIFY_AND_CREATE_USER: (id: string) => `/institutes/verify-and-create-user/${id}`,
  },

  // Zone endpoints
  ZONES: {
    CREATE: "/zones",
    GET_ALL: "/zones",
    COUNT: "/zones/count",
    GET_BY_ID: (id: string) => `/zones/${id}`,
    UPDATE: (id: string) => `/zones/${id}`,
    DELETE: (id: string) => `/zones/${id}`,
  },
} as const;

export default API_PATHS;
