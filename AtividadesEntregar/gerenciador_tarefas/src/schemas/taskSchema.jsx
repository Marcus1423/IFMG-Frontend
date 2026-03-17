import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "O título deve ter pelo menos 3 caracteres"),

  description: z
    .string()
    .optional(),

  category: z
    .string()
    .min(1, "Selecione uma categoria"),
});