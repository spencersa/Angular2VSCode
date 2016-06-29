import { provideRouter, RouterConfig } from '@angular/router';
import { LandingPage }  from './landingPage.component';
import { EmployeeManagement }    from './employeeManagement.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'landing-page', terminal: true},
  { path: 'landing-page', component: LandingPage},
  { path: 'employee-management', component: EmployeeManagement }
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];