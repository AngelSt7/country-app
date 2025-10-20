import { Component, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})

export class SearchInputComponent {
  search = output<string>()
  onSearch = (data: string) => this.search.emit(data)
}
