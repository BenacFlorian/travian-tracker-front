import { Routes } from '@angular/router';
import { StoreReportsComponent } from './pages/store-reports/store-reports.component';
import { DefenseDashboardComponent } from './pages/defense-dashboard/defense-dashboard.component';

export const routes: Routes = [
  { path: 'store-reports', component: StoreReportsComponent },
  { path: 'defense-dashboard', component: DefenseDashboardComponent }
];
