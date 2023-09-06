import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'report'},
  {
    path: 'report', loadComponent: () => import('@p-feature/report-yonatan')
      .then(c => c.FeatureReportYonatanComponent)
  }
];
