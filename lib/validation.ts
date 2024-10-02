import { z } from "zod";

export const complexAccidentSchema = z.object({
  passportSeriya: z.string().min(2).max(2),
  pasportRaqam: z.string().min(5),
  jshshir: z.string().min(10),
  FIO: z.string().min(5),
  birthday: z.string().min(5),
  manzil: z.string().min(3),
  sugurtaManzil: z.string().min(3),
  hudud: z.string().min(4),
  telefonRaqam: z.string().min(6),
  qarindoshlikDarajasi: z.string().min(2),
  qarindoshFIO: z.string().min(2),
});
