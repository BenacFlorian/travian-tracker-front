import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSearchWidgetComponent } from './table-search-widget.component';

describe('TableSearchWidgetComponent', () => {
  let component: TableSearchWidgetComponent;
  let fixture: ComponentFixture<TableSearchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSearchWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
