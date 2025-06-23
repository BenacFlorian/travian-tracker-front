import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationWidgetComponent } from './table-pagination-widget.component';

describe('TablePaginationWidgetComponent', () => {
  let component: TablePaginationWidgetComponent;
  let fixture: ComponentFixture<TablePaginationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePaginationWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaginationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
