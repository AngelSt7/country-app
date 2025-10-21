import { inject, Injectable, signal } from '@angular/core';
import { CountryService } from './country.service';
import { countriesSchema } from '../schemas';
import { Country } from '@/app/features/country/interfaces';
import { zodPipe } from '@/app/features/shared/pipes';
import { catchError, delay, of, tap, throwError } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ToastService } from '../../shared';

@Injectable({ providedIn: 'root' })
export class CountryStoreService {
  private countryService = inject(CountryService)
  private toastService = inject(ToastService)

  queryCapital = signal('');
  queryCountry = signal('');

  countries = signal<Country[]>([]);
  onSearch = (query: string, type: 'country' | 'capital') => {
    if (type === 'country') this.queryCountry.set(query);
    if (type === 'capital') this.queryCapital.set(query);
  };

  searchByCapital = rxResource({
    params: () => ({ query: this.queryCapital() }),
    stream: ({ params }) => {
      if (!this.queryCapital().trim()) return of([])
      return this.countryService.searchByCapital(params.query).pipe(
        zodPipe(countriesSchema),
        delay(2000),
        tap((data) => this.toastService.success(`Se encontraron ${data.length} resultados para '${params.query}'`)),
        catchError((error) => {
          if ((error as any).isZodError) {
            console.error('Error de validación Zod:', error.message);
          } else { this.toastService.error(`No se encontraron resultados para '${params.query}'`) }
          return throwError(() => error);
        })
      );
    },
  });

  searchByCountry = rxResource({
    params: () => ({query: this.queryCountry()}),
    stream: ({params}) => {
      if(!this.queryCountry().trim()) return of([])
      return this.countryService.searchByCountry(params.query)
      .pipe(
        zodPipe(countriesSchema),
        delay(2000),
        tap((data) => this.toastService.success(`Se encontraron ${data.length} resultados para '${params.query}'`)),
        catchError((error) => {
          if ((error as any).isZodError) {
            console.error('Error de validación Zod:', error.message);
          } else { this.toastService.error(`No se encontraron resultados para '${params.query}'`) }
          return throwError(() => error);
        })
      )
    }
  })

  // searchByCapital(query: string) {
  //   if (this.loading().capital) return;
  //   this.loading.update(current => ({ ...current, capital: true }));
  //   this.countryService.searchByCapital(query)
  //     .pipe(
  //       zodPipe(countriesSchema),
  //       finalize(() => this.loading.update(current => ({ ...current, capital: false })))
  //     )
  //     .subscribe({
  //       next: (data: Country[]) => {
  //         this.countries.set(data),
  //           toast.success(`Se encontraron ${data.length} resultados para '${query}'`)
  //       },
  //       error: (error) => {
  //         console.error(error?.error?.message || error),
  //           toast.error(`No se encontraron resultados para '${query}'`),
  //           this.countries.set([])
  //       }
  //     });
  // }

}
