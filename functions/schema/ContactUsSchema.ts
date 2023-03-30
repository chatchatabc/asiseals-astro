import { z } from "zod";

export const ContactUsFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
  name: z.string().min(1),
  companyName: z.string().min(1).optional(),
  telephone: z.string().min(1),
});
