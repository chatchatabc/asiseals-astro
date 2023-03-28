import { defineCollection, z } from "astro:content";

const featuredSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
    imageUrl: z.string(),
  }),
});

const orderSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    order: z.number(),
  }),
});

const newsSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    type: z.string(),
    summary: z.string(),
    imageUrl: z.string(),
  }),
});

const imageSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    imageUrl: z.string(),
  }),
});

export const collections = {
  "product-categories": featuredSchema,
  industries: orderSchema,
  resources: imageSchema,
  "product-information": orderSchema,
  faqs: orderSchema,
  news: newsSchema,
};
