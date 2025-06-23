import { Component, input, output } from '@angular/core';
import { Table } from '@tanstack/angular-table';

@Component({
  selector: 'app-table-search-widget',
  imports: [],
  templateUrl: './table-search-widget.component.html',
  styleUrl: './table-search-widget.component.scss',
})
export class TableSearchWidgetComponent {
  table = input.required<Table<any>>();
  searchChange = output<string>()

  updateGlobalTableFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value)
    this.table().setGlobalFilter(value);
  }
}
