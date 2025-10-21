import z from "zod";
import { countrySchema } from "../schemas";

export type Country = z.infer<typeof countrySchema>