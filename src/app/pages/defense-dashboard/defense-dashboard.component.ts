import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { IncomingAttacksDatatableComponent } from '../../components/incoming-attacks-datatable/incoming-attacks-datatable.component';

@Component({
  selector: 'app-defense-dashboard',
  standalone: true,
  imports: [CommonModule, NavigationHeaderComponent, IncomingAttacksDatatableComponent],
  templateUrl: './defense-dashboard.component.html',
  styleUrl: './defense-dashboard.component.scss'
})
export class DefenseDashboardComponent {

} 