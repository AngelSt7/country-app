import { Component } from '@angular/core';
import { SearchInputComponent, TableCountryComponent } from "../../components";

@Component({
  selector: 'app-country-page',
  imports: [SearchInputComponent, TableCountryComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  headers = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población']

  onSearch(value: string) {
    console.log(value);
  }

}
