import { Component } from '@angular/core';
import { SearchInputComponent, TableCountryComponent } from "@/app/features/country/components";

@Component({
  selector: 'app-capital-page',
  imports: [SearchInputComponent, TableCountryComponent],
  templateUrl: './capital-page.component.html',
})

export class CapitalPageComponent {

  headers = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población']

  onSearch(value: string) {
    console.log(value);
  }

}
