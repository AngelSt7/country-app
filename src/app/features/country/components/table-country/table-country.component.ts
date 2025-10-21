import { Component, input } from '@angular/core';
import { Country } from '@/app/features/country/interfaces';
import { DecimalPipe } from '@angular/common';
import { toast } from 'ngx-sonner';
import { RouterLink } from "@angular/router";

interface TableCountry {  
  headers: string[]
  items: Country[]
}

@Component({
  selector: 'country-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table-country.component.html',
})

export class TableCountryComponent {
  protected readonly toast = toast;
  headers = input.required<TableCountry['headers']>()
  items = input.required<TableCountry['items']>()

  errorMessage = input<string | unknown>()
  isLoading = input<boolean>()
  isEmpty = input<boolean>()
}
