import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpDeleteOptions, HttpGetOptions, HttpPatchOptions, HttpPostOptions, HttpPutOptions } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class HttpClientService {
  private http = inject(HttpClient);
  private baseUrl = environment.base_url;

  get<T>(endpoint: string, options?: HttpGetOptions) {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, options);
  }

  post<T>(endpoint: string, body: unknown, options?: HttpPostOptions) {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body, options);
  }

  put<T>(endpoint: string, body: unknown, options?: HttpPutOptions) {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body, options);
  }

  patch<T>(endpoint: string, body: unknown, options?: HttpPatchOptions) {
    return this.http.patch<T>(`${this.baseUrl}${endpoint}`, body, options);
  }

  delete<T>(endpoint: string, options?: HttpDeleteOptions) {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`, options);
  }
}
