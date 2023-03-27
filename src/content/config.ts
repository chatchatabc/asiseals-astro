import { defineCollection, z } from "astro:content";

const productSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
  }),
});

const orderSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    order: z.number(),
  }),
});

const imageSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    imageUrl: z.string(),
  }),
});

export const collections = {
  "product-categories": productSchema,
  industries: productSchema,
  resources: imageSchema,
  "product-information": orderSchema,
};
