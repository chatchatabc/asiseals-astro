import { defineCollection, z } from "astro:content";

const productSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
  }),
});

const productInformationSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  "product-categories": productSchema,
  industries: productSchema,
  "product-information": productInformationSchema,
};
