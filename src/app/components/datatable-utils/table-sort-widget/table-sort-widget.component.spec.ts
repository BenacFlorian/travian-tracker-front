import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortWidgetComponent } from './table-sort-widget.component';

describe('TableSortWidgetComponent', () => {
  let component: TableSortWidgetComponent;
  let fixture: ComponentFixture<TableSortWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSortWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSortWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
