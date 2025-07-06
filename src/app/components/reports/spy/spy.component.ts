import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpyService } from './spy.service';
import { SpyReportDisplayComponent } from '../spy-report-display/spy-report-display.component';
import { Report } from '../../../models/db.model';

@Component({
  selector: 'app-spy',
  imports: [FormsModule, SpyReportDisplayComponent],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.scss'
})
export class SpyComponent {
  spyHtml: string = '';
  isLoading = signal(false);
  displayMode = signal(false);
  report = signal<Report | null>(null);

  @ViewChild('pasteZone', { static: false }) pasteZone!: ElementRef<HTMLDivElement>;

  constructor(private spyService: SpyService) {}

  handleSubmit() {
    const pastedDom = this.pasteZone.nativeElement;
    this.isLoading.set(true);
    this.spyService.storeSpyReport(pastedDom).subscribe(response => {
      console.log('Report stored:', JSON.stringify(response));
      this.isLoading.set(false);
      this.displayMode.set(true);
      this.report.set(response);
    });
  }

  reset() {
    this.displayMode.set(false);
  }
}
