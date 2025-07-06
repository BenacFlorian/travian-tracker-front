import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Report } from '../../../models/db.model';
import { SpyReportDisplayService } from './spy-report-display.service';

@Component({
  selector: 'app-spy-report-display',
  imports: [DatePipe],
  templateUrl: './spy-report-display.component.html',
  styleUrl: './spy-report-display.component.scss'
})
export class SpyReportDisplayComponent {
  report = input.required<Report>();  

  constructor(public spyDisplayService: SpyReportDisplayService) {}

  getAttackerTribeBgImagePath(): string {
    return this.report()?.attacking_village?.player?.tribe?.bg_img_path;
  }
}
