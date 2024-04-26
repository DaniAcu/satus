import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DRAFT_MODE_TOKEN: z.string().min(1),
    GSAP_AUTH_TOKEN: z.string().min(1),
    HUBSPOT_ACCESS_TOKEN: z.string().min(1),
    NEXT_HUSBPOT_FORM_ID: z.string().min(1),
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_HUSBPOT_PORTAL_ID: z.string().min(1),
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string().min(1),
    SHOPIFY_STORE_DOMAIN: z.string().min(1),
    STORYBLOK_PREVIEW_ACCESS_TOKEN: z.string().min(1),
    STORYBLOK_PUBLIC_ACCESS_TOKEN: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().min(0),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string().min(0),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_HUSBPOT_PORTAL_ID: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().min(0),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string().min(0),
  },
  runtimeEnv: {
    DRAFT_MODE_TOKEN: process.env.DRAFT_MODE_TOKEN,
    GSAP_AUTH_TOKEN: process.env.GSAP_AUTH_TOKEN,
    HUBSPOT_ACCESS_TOKEN: process.env.HUBSPOT_ACCESS_TOKEN,
    NEXT_HUSBPOT_FORM_ID: process.env.NEXT_HUSBPOT_FORM_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_HUSBPOT_PORTAL_ID: process.env.NEXT_PUBLIC_HUSBPOT_PORTAL_ID,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    STORYBLOK_PREVIEW_ACCESS_TOKEN: process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN,
    STORYBLOK_PUBLIC_ACCESS_TOKEN: process.env.STORYBLOK_PUBLIC_ACCESS_TOKEN,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
})
