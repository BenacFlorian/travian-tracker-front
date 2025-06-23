
import { FilterFn } from "@tanstack/angular-table";

// this GLOBAL filter function should should only be enabled on 1 column (else the work will be duplicated)
// to do this : use getColumnCanGlobalFilter table option : https://tanstack.com/table/v8/docs/api/features/global-filtering#getcolumncanglobalfilter
export const filterStringFilterFn: FilterFn<any> = (
  row,
  columnId: string,
  filterValue: string
) => {
  const rowFormattedFilterString = row
    .original._filterString
    .trim()
    .toLowerCase();
  const fomattedFilterValue = filterValue?.toString()?.toLowerCase();
  const filterValues = fomattedFilterValue.split(' ');
  return filterValues.reduce(
    (acc, val) => acc && rowFormattedFilterString.indexOf(val) >= 0,
    true
  ); // returns true only if all val of filterValues are included in rowFormattedFilterString
};
