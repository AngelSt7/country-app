import { Component } from '@angular/core';
import { TableCountryComponent } from "../../components";

@Component({
  selector: 'app-region-page',
  imports: [TableCountryComponent],
  templateUrl: './region-page.component.html',
})
export class RegionPageComponent {
    headers = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población']
}
