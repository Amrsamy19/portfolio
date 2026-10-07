import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
    RECIPIENT_EMAIL: z.string().email("RECIPIENT_EMAIL must be a valid email").optional(),
    RESEND_FROM_EMAIL: z.string().min(1, "RESEND_FROM_EMAIL is required").optional(),
    DATABASE_URI: z.string().url("DATABASE_URI must be a valid URL"),
    PAYLOAD_SECRET: z.string().min(1, "PAYLOAD_SECRET is required"),
    BLOB_READ_WRITE_TOKEN: z.string().optional(),
  },
  client: {
    // Add client-side env vars here if any, e.g., NEXT_PUBLIC_XXX: z.string()
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
  },
});
