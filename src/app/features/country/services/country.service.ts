import { inject, Injectable } from '@angular/core';
import { HttpClientService } from '@/app/features/shared/services';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private http = inject(HttpClientService);

  searchByCapital = (query: string) => {
    return this.http.get(`/capital/${query.toLowerCase()}`);
  }

  searchByCountry = (query: string) => {
    return this.http.get(`/name/${query.toLowerCase()}`);
  }

}
