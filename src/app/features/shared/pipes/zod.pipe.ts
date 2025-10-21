import { map, OperatorFunction } from 'rxjs';
import { ZodSchema } from 'zod';

export const ZOD_ERROR = 'Zod validation failed';

export function zodPipe<T>(schema: ZodSchema<T>): OperatorFunction<unknown, T> {
  return map((data) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const issues = parsed.error.errors
        .map(e => `${e.path.join('.')}: ${e.message}`)
        .join(', ');
      const error = new Error(`${ZOD_ERROR}: ${issues}`);
      (error as any).isZodError = true;
      throw error;
    }
    return parsed.data;
  });
}
