import z from "zod";

export const countrySchema = z.object({
    name: z.object({
        common: z.string(),
        official: z.string()
    }),
    cca2: z.string(),
    flag: z.string(),
    flags: z.object({
        png: z.string(),
        svg: z.string(),
        alt: z.string().optional()
    }),
    translations: z.object({
        spa: z.object({
            common: z.string(),
            official: z.string()
        }).optional(),
    }),
    population: z.number(),
    continents: z.array(z.string()),
    capital: z.array(z.string()).optional(),
})

export const countriesSchema = z.array(countrySchema)