import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private closeToasts = () => toast.dismiss()

  success = (message: string) => {
    this.closeToasts()
    toast.success(message)
  }

  error = (message: string) => {
    this.closeToasts()
    toast.error(message)
  }

}