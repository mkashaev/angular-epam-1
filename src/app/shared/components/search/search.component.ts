import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder = 'Input text';
  searchInput = '';

  @Output() onSearch = new EventEmitter<string | undefined>();

  handleOnSearch() {
    this.onSearch.emit(this.searchInput);
  }
}
