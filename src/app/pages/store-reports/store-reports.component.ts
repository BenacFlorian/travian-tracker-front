import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from '../../components/navigation-header/navigation-header.component';
import { VerticalTabsComponent } from '../../components/vertical-tabs/vertical-tabs.component';
import { SpyComponent } from '../../components/reports/spy/spy.component';
import { VerticalTabDirective } from '../../components/vertical-tabs/vertical-tabs.directive';
import { PlayerComponent } from '../../components/reports/player/player.component';
import { AttackComponent } from '../../components/reports/attack/attack.component';
import { DefenseComponent } from '../../components/reports/defense/defense.component';

@Component({
  selector: 'app-store-reports',
  standalone: true,
  imports: [CommonModule, NavigationHeaderComponent, VerticalTabsComponent, SpyComponent, VerticalTabDirective, PlayerComponent, AttackComponent, DefenseComponent],
  templateUrl: './store-reports.component.html',
  styleUrl: './store-reports.component.scss'
})
export class StoreReportsComponent {

} 