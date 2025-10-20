import { Component, input } from '@angular/core';

interface TableCountry {  
  headers: string[]
}

@Component({
  selector: 'country-table',
  imports: [],
  templateUrl: './table-country.component.html',
})

export class TableCountryComponent {
  headers = input.required<TableCountry['headers']>()
}
