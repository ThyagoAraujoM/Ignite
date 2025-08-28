declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_API_KEY: string;
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;
    STRIPE_WEBHOOK_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    FIREBASE_PROJECT_TYPE: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_PRIVATE_KEY_ID: string;
    FIREBASE_PRIVATE_KEY: string;
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_CLIENT_ID: string;
    FIREBASE_AUTH_URI: string;
    FIREBASE_TOKEN_URI: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    // Add others as needed...
  }
}
