import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpyService } from './spy.service';

@Component({
  selector: 'app-spy',
  imports: [FormsModule],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.scss'
})
export class SpyComponent {
  spyHtml: string = '';
  isLoading = signal(false);

  @ViewChild('pasteZone', { static: false }) pasteZone!: ElementRef<HTMLDivElement>;

  constructor(private spyService: SpyService) {}

  handleSubmit() {
    const pastedDom = this.pasteZone.nativeElement;
    this.isLoading.set(true);
    this.spyService.storeSpyReport(pastedDom).subscribe(response => {
      console.log('Report stored:', response);
      this.isLoading.set(false);
    });
  }
}
