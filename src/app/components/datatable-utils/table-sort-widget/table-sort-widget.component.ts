import { Component, input, output } from '@angular/core';
import { Header, SortDirection } from '@tanstack/angular-table';

@Component({
  selector: 'app-table-sort-widget',
  imports: [],
  templateUrl: './table-sort-widget.component.html',
  styleUrl: './table-sort-widget.component.scss',
})
export class TableSortWidgetComponent {
  console = console;

  header = input.required<Header<any, unknown>>();
  // sortButtonClicked = output<SortDirection | false>();
}
