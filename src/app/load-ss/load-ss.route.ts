import { Routes, RouterModule } from '@angular/router';
import { LoadSSComponent } from './load-ss.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: LoadSSComponent },
];

export const routing = RouterModule.forChild(routes);