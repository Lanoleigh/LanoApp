import { Routes, RouterModule } from '@angular/router';
import { AppAComponent } from './app-a.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: AppAComponent },
];

export const routing = RouterModule.forChild(routes);