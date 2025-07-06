import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyReportDisplayComponent } from './spy-report-display.component';

describe('SpyReportDisplayComponent', () => {
  let component: SpyReportDisplayComponent;
  let fixture: ComponentFixture<SpyReportDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpyReportDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyReportDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
