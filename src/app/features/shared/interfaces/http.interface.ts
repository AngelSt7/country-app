import { HttpClient } from "@angular/common/http";

export type HttpGetOptions = Parameters<HttpClient['get']>[1];
export type HttpPostOptions = Parameters<HttpClient['post']>[2];
export type HttpPutOptions = Parameters<HttpClient['put']>[2];
export type HttpPatchOptions = Parameters<HttpClient['patch']>[2];
export type HttpDeleteOptions = Parameters<HttpClient['delete']>[1];
