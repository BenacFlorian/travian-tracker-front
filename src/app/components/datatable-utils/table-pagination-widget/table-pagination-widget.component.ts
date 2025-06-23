import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table } from '@tanstack/angular-table';

@Component({
  selector: 'app-table-pagination-widget',
  imports: [FormsModule],
  templateUrl: './table-pagination-widget.component.html',
  styleUrl: './table-pagination-widget.component.scss'
})
export class TablePaginationWidgetComponent {
 table =  input.required<Table<any>>()
 pageSizes = input<number[]>([5,10,20,50,100]) // default value

setPageSize(event: Event) {
  this.table().setPageSize(Number((event.target as HTMLSelectElement).value))
}

}
