import { Component, inject } from '@angular/core';
import { SearchInputComponent, TableCountryComponent } from "@/app/features/country/components";
import { CountryStoreService } from '@/app/features/country/services';

@Component({
  selector: 'app-capital-page',
  imports: [SearchInputComponent, TableCountryComponent],
  templateUrl: './capital-page.component.html',
})

export class CapitalPageComponent {
  headers = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población']
  public countryStore = inject(CountryStoreService)

}
