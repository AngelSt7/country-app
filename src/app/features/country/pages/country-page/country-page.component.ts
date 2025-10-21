import { Component, inject } from '@angular/core';
import { SearchInputComponent, TableCountryComponent } from "@/app/features/country/components";
import { CountryStoreService } from '@/app/features/country/services';

@Component({
  selector: 'app-country-page',
  imports: [SearchInputComponent, TableCountryComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  headers = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población']
  public countryStore = inject(CountryStoreService)

}
