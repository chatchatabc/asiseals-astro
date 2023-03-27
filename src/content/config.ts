import { defineCollection, z } from "astro:content";

const productSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
  }),
});

export const collections = {
  "product-categories": productSchema,
  industries: productSchema,
};
