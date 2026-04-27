export const systemConfig = {
  appName: "MovOS",
  version: "0.1.0",
  environment: (process.env.NODE_ENV ?? "development") as
    | "development"
    | "production"
    | "test",
} as const;
