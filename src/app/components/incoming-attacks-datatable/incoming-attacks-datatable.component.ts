import { Component, signal } from '@angular/core';
import { TableSearchWidgetComponent } from '../datatable-utils/table-search-widget/table-search-widget.component';
import { TablePaginationWidgetComponent } from '../datatable-utils/table-pagination-widget/table-pagination-widget.component';
import { TableSortWidgetComponent } from '../datatable-utils/table-sort-widget/table-sort-widget.component';
import { CommonModule } from '@angular/common';
import { ColumnDef } from '@tanstack/angular-table';
import { createAngularTable, FlexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from '@tanstack/angular-table';

@Component({
  selector: 'app-incoming-attacks-datatable',
  imports: [
    CommonModule, 
    TableSortWidgetComponent,
    TablePaginationWidgetComponent,
    TableSearchWidgetComponent,
    FlexRender
  ],
  templateUrl: './incoming-attacks-datatable.component.html',
  styleUrl: './incoming-attacks-datatable.component.scss'
})
export class IncomingAttacksDatatableComponent {


  // Signal pour les données
  targettedVillagesData = signal([{code: '123'}]);

  defaultColumns: ColumnDef<any, any>[] = [
    // {
    //   id: 'expansion',
    //   header: '',
    //   cell: () => this.requestsTableExpansionTmpl(),
    // },
    {
      id: 'code',
      header: 'Code',
      accessorKey: 'code',
      enableSorting: true
    },
  ];
  
  table = createAngularTable(() => ({
    data: this.targettedVillagesData(), // Utilise le signal
    columns: this.defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // getExpandedRowModel: getExpandedRowModel(), // Add expanded row model
    getRowCanExpand: () => false, // Allow all rows to be expanded
    globalFilterFn: 'includesString',
    initialState: {
      sorting: [{ id: 'code', desc: true }],
      pagination: {
        pageSize: 10,
      },
    },
  }));

}

