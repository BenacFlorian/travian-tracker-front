import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';

@Component({
  selector: 'app-store-reports',
  standalone: true,
  imports: [CommonModule, NavigationHeaderComponent],
  templateUrl: './store-reports.component.html',
  styleUrl: './store-reports.component.scss'
})
export class StoreReportsComponent {

} 