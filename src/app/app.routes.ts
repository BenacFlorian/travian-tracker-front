import { Routes } from '@angular/router';
import { StoreReportsComponent } from './pages/store-reports/store-reports.component';
import { DefenseDashboardComponent } from './pages/defense-dashboard/defense-dashboard.component';

export const routes: Routes = [
  { path: 'store-reports/:allianceTag', component: StoreReportsComponent, title: 'Store Reports' },
  { path: 'defense-dashboard/:allianceTag', component: DefenseDashboardComponent, title: 'Defense Dashboard' }
];
